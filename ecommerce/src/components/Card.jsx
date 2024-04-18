import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import StarIcon from "@mui/icons-material/Star";

export default function MediaCard({
  brand,
  title,
  img,
  price,
  ogPrice,
  offer,
  rating,
}) {
  return (
    <Card sx={{ maxWidth: 345, height: "100%" }}>
      <div style={{ height: 300, overflow: "hidden" }}>
        <CardMedia
          component="img"
          image={img}
          title={title}
          style={{
            objectFit: "contain", // Change objectFit to "contain"
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <CardContent>
        <Typography variant="body2" color="text.secondary" noWrap>
          <b>{brand}</b>
        </Typography>
        <Typography gutterBottom variant="h5" component="div" noWrap>
          {title}
        </Typography>

        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body1" color="text.secondary">
            <b>₹{price}</b>
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ marginLeft: "10px", textDecoration: "line-through" }}
          >
            ₹{ogPrice}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ marginLeft: "5px", color: "orange" }}
          >
            <b> ({offer}% OFF)</b>
          </Typography>
        </div>
        <Chip label={`${rating} `} avatar={<StarIcon />} />
      </CardContent>
    </Card>
  );
}
