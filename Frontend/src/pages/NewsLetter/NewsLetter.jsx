import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import backgroundImage from "../../assets/backgroundImageForNewsLetter.jpg";

const NewsLetter = () => {
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
                  <Button variant="contained" color="primary">
                    Send Me Updates
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </div>
      </Box>
    </div>
  );
};
export default NewsLetter;
