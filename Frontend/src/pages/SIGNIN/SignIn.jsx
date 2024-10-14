import { Box, Button, Typography, Snackbar, Alert } from "@mui/material";
import PropTypes from "prop-types";
import GoogleIcon from "@mui/icons-material/Google";
import IconButton from "@mui/material/IconButton";
import test6 from "../../assets/test6.jpg";
import { Link, useNavigate } from "react-router-dom";
import CustomTextField from "../../Shared/Components/CustomTextField/CustomTextField";
import CustomPopup from "../../Shared/Components/CustomPopup/CustomPopup";
import { useState, useEffect } from "react";
import { termsAndConditions } from "./state/signInVars";
import Tooltip from "@mui/material/Tooltip";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./features/sigInSlice";
const formFields = [
  [{ id: "username", label: "Username", name: "username" }],
  [{ id: "password", label: "Password", type: "password", name: "password" }],
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
    })
  ).isRequired,
};
const SignInForm = () => {
  const navigate = useNavigate();
  const [userSigninVal, setUserSigninVal] = useState({});
  const dispatch = useDispatch();
  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false); // state to show Snackbar

  const userNameVal = useSelector(
    (state) => state.signInSliceVal.user.userName || "username not found"
  );

  const status = useSelector(
    (state) => state.signInSliceVal.status || "status not found"
  );
  const alldata = useSelector(
    (state) => state.signInSliceVal.allData || "all data not found"
  );

  useEffect(() => {
    if (status === 200) {
      localStorage.setItem("token", alldata.token);
      navigate("/");
    } else if (status === 404) {
      // Show snackbar for unsuccessful login attempts
      setShowSnackbar(true);
    }
  }, [status, navigate, alldata]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userName = formData.get("username");
    const passWord = formData.get("password");

    setUserSigninVal({
      userName,
      passWord,
    });

    // Trigger the sign-in action immediately on form submission
    dispatch(getUser({ userName, passWord }));
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") return;
    setShowSnackbar(false);
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
          <Tooltip placement="left-start" title="Coming Soon 😃">
            <Link to="/signIn">Forgot Password ?</Link>
          </Tooltip>
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
          <Typography style={{ marginTop: "8px" }} gutterBottom>
            Don&apos;t have an account?{" "}
            <Link to="/auth/signUp" style={{ marginRight: "10px" }}>
              SignUp
            </Link>{" "}
            or Signin with google
          </Typography>

          <IconButton color="primary" aria-label="google-signin">
            <Tooltip placement="right-start" title="Coming Soon 😃">
              <GoogleIcon />
            </Tooltip>
          </IconButton>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            marginBottom: "20px",
            fontSize: "20px",
            borderTop: "2px solid lightgrey",
            
          }}
        >
          <Typography
            style={{ marginTop: "8px", marginRight: "25px", color: "gray" }}
            gutterBottom
            onClick={() => setTermsModalOpen(true)}
          >
            Terms & Conditions
          </Typography>

          {termsModalOpen && (
            <CustomPopup
              content={termsAndConditions}
              heading={"Terms & Conditions"}
              onClose={() => setTermsModalOpen(false)}
            />
          )}

          <Typography
            style={{ marginTop: "8px", color: "gray" }}
            gutterBottom
            onClick={() => setPrivacyModalOpen(true)}
          >
            Privacy Policy
          </Typography>

          {privacyModalOpen && (
            <CustomPopup
              content={termsAndConditions}
              heading={"Privacy Policy"}
              onClose={() => setPrivacyModalOpen(false)}
            />
          )}
        </div>

        {/* Snackbar to show error messages */}
        <Snackbar
          open={showSnackbar}
          autoHideDuration={4000}
          onClose={handleSnackbarClose}
        >
          <Alert
            onClose={handleSnackbarClose}
            severity="error"
            variant="filled"
          >
            Sign-in failed. Please check your username and password.
          </Alert>
        </Snackbar>
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
          style={{
            maxWidth: "100%",
            maxHeight: "600px",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default SignInForm;
