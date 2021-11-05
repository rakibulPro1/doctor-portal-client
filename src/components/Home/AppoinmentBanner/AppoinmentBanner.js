import { Button, Container, Grid, Typography } from "@mui/material";
import { Box, display } from "@mui/system";
import React from "react";
import doctor from "../../../images/doctor.png";
import bg from "../../../images/appointment-bg.png";

const appointmentBanner = {
  background: `url(${bg})`,
  backgroundBlendMode: "darken, luminosity",
  backgroundColor: "rgba(26, 39, 42, 0.8)",
};

const AppoinmentBanner = () => {
  return (
    <Box style={appointmentBanner} sx={{ flexGrow: 1, marginTop: 18 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: 500, marginTop: "-125px" }}
            src={doctor}
            alt=""
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            padding: "0px 10px",
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ color: "#0AE299" }} mb={2}>
              APPOINMENT
            </Typography>
            <Typography
              variant="h4"
              sx={{ color: "white", fontWeight: "bold", fontSize: "40px" }}
              mb={4}
            >
              Make an Appoinment Today
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "white", opacity: 0.8 }}
              mb={3}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
              aut sint at sit earum nihil debitis corrupti ipsum quasi
              cupiditate?
            </Typography>
            <Button variant="contained" sx={{ backgroundColor: "#0AE299" }}>
              LEARN MORE
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppoinmentBanner;
