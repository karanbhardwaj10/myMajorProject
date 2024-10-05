import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,

} from "@mui/material";
import { useState } from "react";
import backgroundImage from "../../assets/backgroundImageForNewsLetter.jpg";

const NewsLetter = () => {
  const [open, setOpen] = useState(false);
  // const handleDeleteIconOpen = () => {
  //   setOpen(true);
  // };
  const handleSendUpdatesOkClick = () => {
    setOpen(false);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        minHeight: "100vh",
        overflow: "hidden",
        alignItems: "center",
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "0px -300px",
        backgroundRepeat: "cover",
        backgroundSize: "cover",
      }}
    >
      <Box
        style={{
          width: "50%",
          padding: "20px",
          maxHeight: "100vh",
        }}
        noValidate
        autoComplete="off"
      >
        <Typography
          fontWeight="bold"
          style={{ color: "grey", marginBottom: "30px" }}
          variant="h6"
          gutterBottom
        >
          Our NewsLetter
        </Typography>
        <Typography
          fontWeight="bold"
          fontFamily="san-serif"
          style={{ marginBottom: "30px" }}
          variant="h3"
          // align="center"
          gutterBottom
        >
          Subscribe to Our Newsletter For Updates on Our Latest Collection
        </Typography>
        <Typography
          fontWeight="bold"
          style={{ color: "grey" }}
          variant="h7"
          align="center"
          gutterBottom
        >
          Get 20% off on your first order just by subscribing to our newsletter
        </Typography>
        <div
          style={{
            display: "flex",
            border: "2px solid black",
            borderRadius: "8px",
            backgroundColor: "white",
            justifyContent: "center",
            marginTop: "50px",
            marginBottom: "20px",
            fontSize: "20px",
            color: "#f0f0f0",
          }}
        >
          <TextField
            fullWidth
            id="outlined-basic"
            label="Enter your Email here "
            variant="filled"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button variant="contained" color="primary" onClick={()=>setOpen(true)}>
                    Send Me Updates
                  </Button>
                </InputAdornment>
              ),
            }}
          />
          <Dialog
            open={open}
            // onClose={handleDeleteDialogClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              <Typography fontFamily={'poppins'} fontSize={'25px'} fontWeight={'bold'} >Welcome to the Fashion Street Family</Typography>
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <Typography fontFamily={'poppins'}>

                Welcome to the fashion street family , you have subscribed to our news letter that means , we will be sending you updates regarding our latest collection 
                <br/> Happy Shopping :D
                </Typography>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button variant="contained" onClick={handleSendUpdatesOkClick}>
               Close
              </Button>
              {/* <Button
                variant="contained"
                sx={{ backgroundColor: "red" }}
                //onClick={handleDeleteDialogCloseYesClick}
                autoFocus
              >
                Yes
              </Button> */}
            </DialogActions>
          </Dialog>
        </div>
      </Box>
    </div>
  );
};
export default NewsLetter;
