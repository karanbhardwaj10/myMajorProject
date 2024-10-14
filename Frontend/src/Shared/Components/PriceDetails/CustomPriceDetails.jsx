import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Alert,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { useState } from "react";

const CustomPriceDetails = () => {
  const [open, setOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const priceFields = [
    { title: "Total MRP" },
    { title: "Discounted on MRP" },
    { title: "Coupon Discount" },
    { title: "Shipping Fee" },
  ];

  const priceFieldsVal = [
    { price: "₹ 2589" },
    { price: "₹ -1430" },
    { price: "₹ -179" },
    { price: "Free" },
  ];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirmPayment = () => {
    setOpen(false);
    setSnackbarOpen(true); // Trigger the Snackbar alert
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box width={500} border={"1px solid grey"} padding={2}>
      <Typography variant="h5" fontWeight={"bold"}>
        Price Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          {priceFields.map((titlefields, index) => (
            <Typography
              color={"grey"}
              fontFamily={"poppins"}
              padding={2}
              key={index}
            >
              {titlefields.title}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={3}>
          {priceFieldsVal.map((priceFields, index) => (
            <Typography padding={2} key={index}>
              {priceFields.price}
            </Typography>
          ))}
        </Grid>
        <Box padding={2} width="100%">
          <Divider orientation="horizontal" flexItem />
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography fontWeight={"bold"} variant="h6" padding={2}>
              Total Amount
            </Typography>
            <Typography padding={2} fontWeight={"bold"} marginRight={2}>
              ₹ 3759
            </Typography>
          </Box>
        </Box>
      </Grid>

      <Button
        style={{
          width: "90%",
          marginLeft: "10px",
          backgroundColor: "#1b2833",
        }}
        type="submit"
        variant="contained"
        onClick={handleClickOpen}
      >
        Confirm Payment
      </Button>

      {/* Dialog Component */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirm Payment</DialogTitle>
        <DialogContent>
          <Typography>Do you want to confirm the payment?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button onClick={handleConfirmPayment} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>

      {/* MUI Snackbar with Alert */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Payment Successful! Order Placed.
        </Alert>
      </Snackbar>
      </Box>
   
  );
};

export default CustomPriceDetails;
