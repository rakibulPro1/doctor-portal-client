import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ booking, date }) => {
  const { name, time, space } = booking;
  const [modalOpen, setModalOpen] = React.useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);
  return (
    <Grid item xs={12} sm={6} md={4} sx={{ textAlign: "center" }}>
      <Paper sx={{ py: 4 }}>
        <Typography
          variant="h5"
          sx={{ color: "info.main", fontWeight: "500", mb: 1 }}
        >
          {name}
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontWeight: "500", fontSize: 16, mb: 1 }}
        >
          {time}
        </Typography>
        <Typography variant="caption" sx={{ mb: 1 }} gutterBottom>
          {space} SPACES AVAILAVLE
        </Typography>
        <Button
          onClick={handleModalOpen}
          size="small"
          variant="contained"
          sx={{
            backgroundColor: "info.main",
            display: "block",
            mt: 1,
            mx: "auto",
            borderRadius: 15,
            border: "none",
            boxShadow: "none",
            fontSize: 11,
            px: 3,
          }}
        >
          GET APPOINTMENT
        </Button>
      </Paper>

      {/* Modal */}
      <BookingModal
        date={date}
        booking={booking}
        modalOpen={modalOpen}
        handleModalClose={handleModalClose}
      ></BookingModal>
    </Grid>
  );
};

export default Booking;
