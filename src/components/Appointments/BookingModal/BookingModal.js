import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 5,
  borderRadius: 1,
  p: 4,
};

const BookingModal = ({ modalOpen, handleModalClose, booking, date }) => {
  const { name, time } = booking;
  const handleBookingSubmit = (e) => {
    alert("submitting");
    handleModalClose();
    e.preventDefault();
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modalOpen}
        onClose={handleModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modalOpen}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              sx={{ mb: 2, textAlign: "center", color: "info.main" }}
              variant="h6"
              component="h2"
            >
              {name}
            </Typography>
            <form onSubmit={handleBookingSubmit}>
              <TextField
                disabled
                sx={{ my: 1, width: "100%" }}
                id="outlined-size-small"
                defaultValue={time}
                size="small"
              />
              <TextField
                sx={{ my: 1, width: "100%" }}
                id="outlined-size-small"
                defaultValue="Your Name"
                size="small"
              />
              <TextField
                sx={{ my: 1, width: "100%" }}
                type="email"
                id="outlined-size-small"
                defaultValue="Your Email"
                size="small"
              />
              <TextField
                sx={{ my: 1, width: "100%" }}
                id="outlined-size-small"
                defaultValue="Phone Number"
                size="small"
              />
              <TextField
                disabled
                sx={{ my: 1, width: "100%" }}
                id="outlined-size-small"
                defaultValue={date.toDateString()}
                size="small"
              />
              <Button
                type="submit"
                size="small"
                variant="contained"
                sx={{
                  backgroundColor: "info.main",
                  display: "block",
                  mt: 2,
                  mx: "auto",
                  borderRadius: 1,
                  border: "none",
                  boxShadow: "none",
                  fontSize: 11,
                  px: 3,
                }}
              >
                SEND
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default BookingModal;
