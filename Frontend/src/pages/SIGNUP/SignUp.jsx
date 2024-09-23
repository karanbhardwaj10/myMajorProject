import { Box, TextField, Button, Checkbox, Typography,Autocomplete } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
// import Autocomplete from "@mui/material/Autocomplete";
import signUpImage from "../../assets/SignUpPageImg.jpg";
import Grid from "@mui/material/Grid";
import { signUpFields, Occupation, gender } from "./state/signUpVars";
import CustomTextField from "../../Shared/Components/CustomTextField/CustomTextField";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newUser } from "./features/signUpSlice";
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
      <div key={field.id} style={{ flex: 1, marginRight: "10px" }}>
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
function SignupForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [userSignUpVal, setUserSignUpVal] = useState({});
  const [occupationVal, setOccupation] = useState(null);
  const [genderVal, setGender] = useState(null);
  const [checked, setChecked] = useState(false);
  const status = useSelector((state) => state.signUpSliceVal.status);
  const allData = useSelector((state) => state.signUpSliceVal.allData);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const signUpFrom = new FormData(event.target);
    const requestBody = {
      firstName: signUpFrom.get("firstName"),
      lastName: signUpFrom.get("lastName"),
      Email: signUpFrom.get("Email"),
      userName: signUpFrom.get("userName"),
      passWord: signUpFrom.get("passWord"),
      occupation: occupationVal,
      gender: genderVal,
    };
    // setUserSignUpVal(requestBody);
    if (checked === true) {
      dispatch(newUser(requestBody));
    }
  };
  useEffect(() => {
    if (status && status === 201) {
      localStorage.setItem("token", allData.allData.token);
      navigate("/");
    }
  }, [status]);
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
              <div style={{ width: "45rem" }}>
                {signUpFields.map((row, index) => (
                  <FieldRow key={`row-${index}`} fields={row} />
                ))}
              </div>
              <div style={{ display: "flex", marginTop: "10px" }}>
                <Autocomplete
                  onChange={(event, newOccupationVal) =>
                    setOccupation(
                      newOccupationVal ? newOccupationVal.label : null
                    )
                  }
                  fullWidth
                  style={{ marginRight: "5px" }}
                  disablePortal
                  id="Occupation"
                  options={Occupation}
                  renderInput={(params) => (
                    <TextField {...params} label="Occupation" />
                  )}
                />
                <Autocomplete
                  style={{ marginLeft: "5px", marginRight: "10px" }}
                  onChange={(event, newGenderVal) =>
                    setGender(newGenderVal ? newGenderVal.label : null)
                  }
                  fullWidth
                  disablePortal
                  id="gender"
                  options={gender}
                  renderInput={(params) => (
                    <TextField {...params} label="Gender" />
                  )}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                }}
              >
                <Checkbox
                  style={{
                    marginTop: "5px",
                    marginBottom: "5px",
                  }}
                  checked={checked}
                  onChange={(event, checkedVal) => setChecked(checkedVal)}
                />
                <Typography
                  style={{
                    marginLeft: "5px",
                    marginTop: "10px",
                    marginBottom: "5px",
                  }}
                  variant="h6"
                >
                  Sign up to create your account
                </Typography>
              </div>
              <div>
                <Button
                  style={{
                    width: "98%",
                    marginTop: "10px",
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
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <img
          src={signUpImage}
          alt="SignUp Page"
          style={{
            marginLeft: "100px",
            width: "600px",
            height: "500px",
          }}
        />
      </div>
    </div>
  );
}

export default SignupForm;
