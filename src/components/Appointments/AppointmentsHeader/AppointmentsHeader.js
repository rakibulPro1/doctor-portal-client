import { Container, Grid } from "@mui/material";
import React from "react";
import Calendar from "../../sharedComponents/Calendar/Calendar";
import bg from "../../../images/bg.png";
import chair from "../../../images/chair.png";

const appointmentHeaderBg = {
  background: `url(${bg})`,
};

const AppointmentsHeader = ({ date, setDate }) => {
  return (
    <Container style={appointmentHeaderBg} sx={{ flexGrow: 1, mt: 2, mb: 7 }}>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Grid item xs={12} md={6}>
          <Calendar date={date} setDate={setDate}></Calendar>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={chair} style={{ width: "90%" }} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AppointmentsHeader;
