import React from "react";
import Grid from "@mui/material/Grid";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import { Button, Container, Typography } from "@mui/material";

const bannerBg = {
  background: `url(${bg})`,
};
const Banner = () => {
  return (
    <Container
      style={bannerBg}
      sx={{
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        height: "450px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "600", fontSize: "3rem" }}
            mt={2}
            mb={3}
          >
            Your New Smile <br />
            Start Here
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontWeight: "300", color: "gray" }}
            mb={3}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            voluptatum ullam quod, praesentium doloribus voluptates illo. At
            iusto enim id?
          </Typography>
          <Button variant="contained" sx={{ backgroundColor: "#0AE299" }}>
            GET APPOINTMENT
          </Button>
        </Grid>
        <Grid item xs={12} md={7}>
          <img style={{ height: "300px" }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
