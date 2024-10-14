import {
  Box,
  Button,
  Typography,
  Autocomplete,
  TextField,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import  from "@mui/material/Tooltip";
// import ControlPointIcon from "@mui/icons-material/ControlPoint";
import CustomTextField from "../CustomTextField/CustomTextField";
// import CustomPriceDetails from "../PriceDetails/CustomPriceDetails";
import { useDispatch, useSelector } from "react-redux";
import { saveAddress } from "./Features/addressSlice";
import { getAddress } from "./Features/getAddressSlice";

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

const addressType = [
  { id: "Home", label: "Home", name: "Home" },
  { id: "Office", label: "Office", name: "Office" },
  { id: "Other", label: "Other", name: "Other" },
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
  const [addressTypeVal, setAddressType] = useState(null);
  const { addressStatusCode } = useSelector((state) => state.addressSlice);
  const [forms, setForms] = useState([formFields]);
  // eslint-disable-next-line no-unused-vars
  const [submittedAddresses, setSubmittedAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState(null);
  // const [newUserAddress, setnewUserAddress] = useState(null);
  // const [getUserToken,setToken]=useState(null);
  const addNewForm = () => {
    if (formFields.length <= 1) {
      setForms([...forms, formFields]);
    }
  };

  // async function getAddressCall() {
  //   const userToken = localStorage.getItem("token");
  //   if(userToken){

  //     await getUserAddress(userToken);
  //   }
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    // Collect form data
    const form = event.target;
    const formData = new FormData(form);
    // const newAddedAddress = {
    //   addressType: "Home", // You might want to add a field for this in your form
    //   customerName: formData.get("fullName"),
    //   customerAddress: formData.get("address"),
    //   city: formData.get("city"),
    // };
    const newAddressVal = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      contactInfo: JSON.parse(formData.get("contactInfo")),
      city: formData.get("city"),
      pincode: JSON.parse(formData.get("pincode")),
      address: formData.get("address"),
      addressType: addressTypeVal,
    };
    console.log(newAddressVal, "full new address info");
    setNewAddress(newAddressVal);
    //const userToken = localStorage.getItem("token");
    // if (newAddress && userToken) {
    //   const data = {
    //     userToken: userToken,
    //     newAddress: newAddress,
    //   };

    //   dispatch(saveAddress(data));

    //   dispatch(getAddress(userToken));
    //   // window.location.reload();
    // }

    // let finalAns = [];
    // finalAns.push(newAddedAddress);
    // // Add the new address to the submitted addresses
    // setNewAddress(finalAns);
    // setSubmittedAddresses([...submittedAddresses, newAddress]);

    // Reset the form

    event.target.reset();
  };
  useEffect(() => {
    if (newAddress || addressStatusCode === 200) {
      const data = {
        userToken: localStorage.getItem("token"),
        newAddress: newAddress,
      };

      dispatch(saveAddress(data));

      dispatch(getAddress(localStorage.getItem("token")));
      setNewAddress(null)
      // window.location.reload();
    }
  }, [addressStatusCode,newAddress, dispatch]);
  // The functional form is generally safer when the new state depends on the previous state. It ensures that you’re working with the most recent state, even if multiple state updates are queued.
  // useEffect(() => {
  //   if (newAddress) {
  //     console.log(addressStatusCode, "address status code");
  //     console.log(newAddress, "form given json");
  //     setSubmittedAddresses((prevAddresses) => [...prevAddresses, newAddress]);
  //   }
  //   // console.log(submittedAddresses, "submitted addresses");
  //   onAddAddress(newAddress);
  // }, [newAddress]);

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

          {/* <Tooltip placement="left" title="Add New Address"> */}
          {/* <IconButton onClick={addNewForm} aria-label="add to shopping cart">
              <ControlPointIcon
                style={{ fontSize: "35px", color: "#1b2833" }}
              />
            </IconButton> */}
          <Autocomplete
            onChange={(event, newAddressType) =>
              setAddressType(newAddressType ? newAddressType.label : null)
            }
            style={{ marginRight: "5px", width: "180px" }}
            disablePortal
            id="AddressType"
            options={addressType}
            renderInput={(params) => (
              <TextField {...params} label="AddressType" />
            )}
          />
          {/* </Tooltip> */}
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
    </div>
  );
};
// AddressOne.propTypes = {
//   onAddAddress: PropTypes.func.isRequired,
// };
export default AddressOne;
