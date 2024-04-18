import React, { useState } from "react";
import Card from "./Card"; // Import the Card component
import jsonData from "../output.json"; // Import the JSON data
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Navbar from "./Navbar";
import FilterListIcon from "@mui/icons-material/FilterList";

const Products = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // State variable for search query
  const [sortOption, setSortOption] = useState(""); // State variable for sort option
  const productsPerPage = 42; // Number of products per page

  // Handle change in search query
  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handle sort option change
  const handleSort = (option) => {
    setSortOption(option);
  };

  // Handle filter click event
  const handleFilter = () => {
    // Add your filter logic here
    console.log("Filter clicked");
  };

  // Filter jsonData based on searchQuery
  const filteredData = jsonData.filter(
    (product) =>
      product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort filteredData based on sortOption
  const sortedData = [...filteredData];
  switch (sortOption) {
    case "price-high-to-low":
      sortedData.sort((a, b) => b.price - a.price);
      break;
    case "price-low-to-high":
      sortedData.sort((a, b) => a.price - b.price);
      break;
    case "rating-high-to-low":
      sortedData.sort((a, b) => b.rating - a.rating);
      break;
    case "rating-low-to-high":
      sortedData.sort((a, b) => a.rating - b.rating);
      break;
    default:
      // No sorting
      break;
  }

  const pageCount = Math.ceil(sortedData.length / productsPerPage);

  const displayProducts = sortedData
    .slice((pageNumber - 1) * productsPerPage, pageNumber * productsPerPage)
    .map((product) => (
      <Card
        key={product.id}
        brand={product.brand}
        title={product.title}
        img={product.img}
        price={product.price}
        ogPrice={product["og price"]}
        offer={product.offer}
        style={{ margin: "10px" }} // Adjust margin for spacing between cards
        rating={product.rating}
      />
    ));

  return (
    <div>
      <Navbar
        searchQuery={searchQuery}
        handleChange={handleChange}
        handleSort={handleSort} // Pass handleSort function to Navbar
        handleFilter={handleFilter} // Pass handleFilter function to Navbar
      />
      <div style={{ margin: "15px" }}></div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "20px",
          margin: "30px",
        }}
      >
        {displayProducts}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <Pagination
          count={pageCount}
          page={pageNumber}
          onChange={(event, value) => setPageNumber(value)}
          color="primary"
          variant="outlined"
          shape="rounded"
          boundaryCount={1} // Set boundaryCount to 1
          siblingCount={1} // Set siblingCount to 1
        />
      </div>
    </div>
  );
};

export default Products;
