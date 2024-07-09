// import * from 'react';
import {
  Box,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
// import TextField from '@mui/material/TextField';
import Autocomplete from "@mui/material/Autocomplete";
import signUpImage from "../../assets/SignUpPageImg.jpg";
// import test4 from "../../assets/test4.jpg";
import Grid from "@mui/material/Grid";

const Occupation = [
  { label: "IT" },
  { label: "Business" },
  { label: "Student" },
  { label: "NA" },
];
const gender = [{ label: "Male" }, { label: "Female" }, { label: "Other" }];
function MyForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        minHeight: "90vh",
        overflow: "hidden",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          "& .MuiTextField-root": { m: 1, width: "350px" },
        }}
        style={{ width: "50%" }}
        noValidate
        autoComplete="off"
      >
        <Grid container spacing={2}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginLeft: "50px",
            }}
          >
            <Grid item xs={12}>
              <Typography
                style={{ marginLeft: "8px" }}
                variant="h4"
                gutterBottom
              >
                Sign up to create your account
              </Typography>
              <div>
                <TextField
                  required
                  id="firstname"
                  label="First Name"
                  variant="outlined"
                />
                <TextField
                  required
                  id="lastname"
                  label="Last Name"
                  variant="outlined"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  minwidth: "100%",
                }}
              >
                <TextField
                  required
                  id="email"
                  label="Email"
                  type="email"
                  variant="outlined"
                  style={{
                    width: "100%",
                    marginLeft: "8px",
                  }}
                />
              </div>
              <div>
                <TextField
                  required
                  id="username"
                  label="username"
                  type="username"
                  variant="outlined"
                />
                <TextField
                  required
                  id="password"
                  label="password"
                  type="password"
                  variant="outlined"
                />
              </div>
              <div style={{ display: "flex", marginTop: "10px" }}>
                <Autocomplete
                  disablePortal
                  id="Occupation"
                  options={Occupation}
                  renderInput={(params) => (
                    <TextField {...params} label="Occupation" />
                  )}
                />
                <Autocomplete
                  disablePortal
                  id="Age"
                  options={gender}
                  renderInput={(params) => (
                    <TextField {...params} label="Age" />
                  )}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                }}
              >
                <FormControlLabel
                  control={<Checkbox />}
                  label="I agree to the terms and conditions"
                  style={{
                    display: "flex",
                    width: "100%",
                    marginLeft: "1px",
                    marginBottom: "5px",
                  }}
                />
              </div>
              <div>
                <Button
                  style={{
                    width: "98%",
                    marginLeft: "8px",
                    backgroundColor: "#1b2833",
                  }}
                  type="submit"
                  variant="contained"
                >
                  Submit
                </Button>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                  fontSize: "20px",
                  fontFamily: "sans-serif",
                }}
              >
                Already Have an account ? <Link to="/signIn">SignIn</Link>
              </div>
            </Grid>
          </div>
        </Grid>
      </Box>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "end",
          // overflow: "hidden",
        }}
      >
        <img
          src={signUpImage}
          alt="SignUp Page"
          style={{
            marginLeft: "100px",
            width: "600px",
            height: "500px",
            // objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
}

export default MyForm;
