import { Box, Button, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import CustomTextField from "../CustomTextField/CustomTextField";
import CustomPriceDetails from "../PriceDetails/CustomPriceDetails";
import { useDispatch } from "react-redux";
import { saveAddress } from "./Features/addressSlice";

const formFields = [
  [{ id: "fullName", label: "Full name" }],
  [
    { id: "email", label: "Enter your Email Address" },
    { id: "contactInfo", label: "Enter your contact information" },
  ],
  [
    { id: "city", label: "City" },
    { id: "pincode", label: "Pincode" },
  ],
  [{ id: "address", label: "Address" }],
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
        <CustomTextField {...field} name={field.id} />
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
const AddressOne = ({ onAddAddress }) => {
  const dispatch = useDispatch();
  const [forms, setForms] = useState([formFields]);
  // eslint-disable-next-line no-unused-vars
  const [submittedAddresses, setSubmittedAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState(null);
  const addNewForm = () => {
    if (formFields.length <= 1) {
      setForms([...forms, formFields]);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    // Collect form data
    const form = event.target;
    const formData = new FormData(form);
    const newAddedAddress = {
      addressType: "Home", // You might want to add a field for this in your form
      customerName: formData.get("fullName"),
      customerAddress: formData.get("address"),
      city: formData.get("city"),
    };
    const newAddress = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      contactInfo: JSON.parse(formData.get("contactInfo")),
      city: formData.get("city"),
      pincode: JSON.parse(formData.get("pincode")),
      address: formData.get("address"),
    };
    console.log(typeof newAddress.contactInfo, "type of contact of");

    const userToken = localStorage.getItem("token");
    if (newAddress && userToken) {
      const data = {
        userToken: userToken,
        newAddress: newAddress,
      };
      dispatch(saveAddress(data));
    }

    let finalAns = [];
    finalAns.push(newAddedAddress);
    // Add the new address to the submitted addresses
    setNewAddress(finalAns);
    // setSubmittedAddresses([...submittedAddresses, newAddress]);

    // Reset the form
    event.target.reset();
  };

  // The functional form is generally safer when the new state depends on the previous state. It ensures that you’re working with the most recent state, even if multiple state updates are queued.
  useEffect(() => {
    if (newAddress) {
      console.log(newAddress, "form given json");
      setSubmittedAddresses((prevAddresses) => [...prevAddresses, newAddress]);
    }
    // console.log(submittedAddresses, "submitted addresses");
    onAddAddress(newAddress);
  }, [newAddress]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        minHeight: "100%",
        overflow: "auto",
        alignItems: "flex-start",
        marginLeft: "30px",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        style={{
          width: "50%",
          padding: "20px",
          maxHeight: "100%",
          overflow: "auto",
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
            style={{ marginTop: "15px" }}
            variant="h6"
            fontSize="x-large"
            fontWeight="bold"
            gutterBottom
          >
            Shipping Information
          </Typography>

          <Tooltip placement="left" title="Add New Address">
            <IconButton onClick={addNewForm} aria-label="add to shopping cart">
              <ControlPointIcon
                style={{ fontSize: "35px", color: "#1b2833" }}
              />
            </IconButton>
          </Tooltip>
        </div>
        <Divider
          style={{
            marginTop: "10px",
          }}
          flexItem
        />
        {forms.length <= 1
          ? forms.map((fields, formIndex) => (
              <React.Fragment key={formIndex}>
                {fields.map((row, index) => (
                  <FieldRow key={index} fields={row} />
                ))}
              </React.Fragment>
            ))
          : JSON.stringify()}
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
          height: "600px",
          overflow: "hidden",
        }}
      >
        {/* <Divider style={{
          marginRight:'40px'
        }} orientation="vertical" flexItem /> */}
        {/* <Divider
          style={{
            marginRight: "20px",
          }}
          orientation="vertical"
          flexItem
        /> */}
        <CustomPriceDetails />
        {/* <img
          src={test6}
          alt="SignUp Page"
          style={{ maxWidth: "100%", maxHeight: "600px", objectFit: "cover" }}
        /> */}
      </div>
    </div>
  );
};
AddressOne.propTypes = {
  onAddAddress: PropTypes.func.isRequired,
};
export default AddressOne;
