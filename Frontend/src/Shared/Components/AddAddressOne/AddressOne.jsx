import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import PropTypes from "prop-types";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
// import test6 from "../../../assets/test6.jpg";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import CustomTextField from "../CustomTextField";

const formFields = [
  [{ id: "Name", label: "Full name" }],
  [
    { id: "Email", label: "Enter your Email Address" },
    { id: "Phone Number", label: "Enter your contact information" },
  ],
  [
    { id: "City", label: "City" },
    { id: "Pincode", label: "Pincode" },
  ],
  [{ id: "Address", label: "Address" }],
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
    {fields.map((field, index) => (
      <div
        key={field.id}
        style={{
          flex: field.fullWidth ? 1 : 2,
          // no margin right on the last element of the row
          marginRight: index !== fields.length - 1 ? "10px" : "0",
        }}
      >
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
const AddressOne = () => {
  const [forms, setForms] = useState([formFields]);

  const addNewForm = () => {
    setForms([...forms, formFields]);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        minHeight: "100%",
        overflow: "auto",
        alignItems: "flex-start",
        marginLeft:'30px'
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
       
        style={{
          width: "50%",
          padding: "20px",
          maxHeight: "100%",
          overflow:'auto'
        }}
        noValidate
        autoComplete="off"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            style={{marginTop:'15px'}}
            variant="h6"
            fontSize="x-large"
            fontWeight="bold"
            gutterBottom
          >
            Shipping Information
          </Typography>

          <Tooltip  placement="left"  title="Add New Address">
          <IconButton onClick={addNewForm}  aria-label="add to shopping cart">
            <ControlPointIcon style={{ fontSize: "35px",color: "#1b2833" }} />
          </IconButton>
          </Tooltip>
        </div>
        <Divider
          style={{
            marginTop: "10px",
          }}
          flexItem
        />

        {/* {formFields.map((row, index) => (
          <FieldRow key={index} fields={row} />
        ))} */}
          {forms.map((fields, formIndex) => (
            <React.Fragment key={formIndex}>
              {fields.map((row, index) => (
                <FieldRow key={index} fields={row} />
              ))}
            </React.Fragment>
          ))}
        <Button
          style={{
            width: "100%",
            backgroundColor: "#1b2833",
            marginBottom: "15px",
          }}
          type="submit"
          variant="contained"
        >
          Add Address
        </Button>
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
        {/* <Divider style={{
          marginRight:'40px'
        }} orientation="vertical" flexItem /> */}
        <Divider
          style={{
            marginRight: "40px",
          }}
          orientation="vertical"
          flexItem
        >
          LEFT
        </Divider>
        {/* <img
          src={test6}
          alt="SignUp Page"
          style={{ maxWidth: "100%", maxHeight: "600px", objectFit: "cover" }}
        /> */}
      </div>
    </div>
  );
};
export default AddressOne;
