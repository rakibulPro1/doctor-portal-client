import { CardMedia, Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Service = (props) => {
  const { name, description, img } = props.service;
  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card sx={{ textAlign: "center", border: 0, boxShadow: 0 }}>
        <CardMedia
          component="img"
          style={{
            width: "auto",
            height: "100px",
            margin: "0 auto",
            padding: "20px 10px",
          }}
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Service;
