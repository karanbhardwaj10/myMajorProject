import { Box, Button, Typography } from "@mui/material";
import PropTypes from "prop-types";
import GoogleIcon from "@mui/icons-material/Google";
import IconButton from "@mui/material/IconButton";
// import SigninPageImg from "../../assets/SigninPageImg.jpg";
import test6 from "../../assets/test6.jpg";

import { Link } from "react-router-dom";
import CustomTextField from "../../Shared/Components/CustomTextField";

const formFields = [
  [{ id: "username", label: "Username" }],
  [{ id: "password", label: "Password", type: "password" }],
];
const FieldRow = ({ fields }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "10px",
      marginTop: "10px",
    }}
  >
    {fields.map((field) => (
      <div key={field.id} style={{ flex: field.fullWidth ? 1 : 2 }}>
        <CustomTextField {...field} />
      </div>
    ))}
  </div>
);
FieldRow.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.string,
      fullWidth: PropTypes.bool,
      // Add any other field properties you expect
    })
  ).isRequired,
};
const SignInForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        minHeight: "100vh",
        overflow: "hidden",
        alignItems: "center",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ "& .MuiTextField-root": { width: "100%" } }}
        style={{
          width: "50%",
          padding: "20px",
          //   overflowY: "auto",
          maxHeight: "100vh",
        }}
        noValidate
        autoComplete="off"
      >
        <Typography style={{ marginBottom: "50px" }} variant="h4" gutterBottom>
          SignIn to your account
        </Typography>

        {formFields.map((row, index) => (
          <FieldRow key={index} fields={row} />
        ))}
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            marginTop: "20px",
            marginBottom: "20px",
            fontSize: "20px",
           
          }}
        >
          <Link to="/signIn">Forgot Password ?</Link>
        </div>
        <Button
          style={{
            width: "100%",
            backgroundColor: "#1b2833",
            marginBottom: "15px",
          }}
          type="submit"
          variant="contained"
        >
          Signin
        </Button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            marginBottom: "20px",
            fontSize: "20px",
          }}
        >
          <Typography style={{marginTop:'8px'}}  gutterBottom>Don&apos;t have an account ?  <Link to="/signUp" style={{marginRight:'10px'}}>SignUp</Link> or Signin with google</Typography>

          <IconButton color="primary" aria-label="add to shopping cart">
            <GoogleIcon style={{ margin: "0px",padding:'0px' }} />
          </IconButton>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            marginBottom: "20px",
            fontSize: "20px",
            borderTop:'2px solid lightgrey'
          }}
        >
          <Typography style={{marginTop:'8px', marginRight:'25px', color:'gray'}}  gutterBottom>Terms & Conditions </Typography>

          <Typography style={{marginTop:'8px',color:'gray'}}  gutterBottom>Privacy Policy </Typography>

        </div>
      </Box>

      <div
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <img
          src={test6}
          alt="SignUp Page"
          style={{ maxWidth: "100%", maxHeight: "600px", objectFit: "cover" }}
        />
      </div>
    </div>
  );
};
export default SignInForm;
