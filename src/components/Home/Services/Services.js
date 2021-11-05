import React from "react";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Service from "../Service/Service";

const services = [
  {
    name: "Flurid Treatment",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error earum sequi odio autem quaerat expedita est ab officiis, ullam modi.",
    img: "https://i.ibb.co/x60B8jk/cavity.png",
  },
  {
    name: "Cavity Treatment",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error earum sequi odio autem quaerat expedita est ab officiis, ullam modi.",
    img: "https://i.ibb.co/LR4xjjb/fluoride.png",
  },
  {
    name: "Teath whitening",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error earum sequi odio autem quaerat expedita est ab officiis, ullam modi.",
    img: "https://i.ibb.co/ChgNKsj/whitening.png",
  },
];

const Services = () => {
  return (
    <Container sx={{ mt: 3, flexGrow: 1 }}>
      <Box sx={{ textAlign: "center" }} px={2}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "500", color: "info.main" }}
          mb={2}
        >
          Our Services
        </Typography>
        <Typography
          variant="h4"
          sx={{ fontWeight: 600, marginBottom: 10 }}
          mb={3}
        >
          Services We Provide
        </Typography>
      </Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {services.map((service) => (
          <Service key={service.name} service={service}></Service>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
