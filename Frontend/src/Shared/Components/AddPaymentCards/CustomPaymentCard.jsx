import { Box, Button, Typography } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import CustomTextField from "../CustomTextField/CustomTextField";

const paymentFormFields = [
  [{ id: "Name", label: "Card Holder name" }],
  [{ id: "Email", label: "Card Number" }],
  [
    { id: "City", label: "Expiry Date" },
    { id: "Address", label: "CVV" }
  ],

];
const PaymentFields = ({ fields }) => (
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
PaymentFields.propTypes = {
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
const CustomPaymentCard = () => {
  const [card, setCard] = useState([paymentFormFields]);
  // eslint-disable-next-line no-unused-vars
  const [submittedAddresses, setSubmittedAddresses] = useState([]);
  const [newCard, setNewCard] = useState(null);
  const addNewForm = () => {
    if (paymentFormFields.length <= 1) {
      setCard([...card, paymentFormFields]);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const newAddedAddress = {
    //   addressType: "Home",
      customerName: formData.get("Name"),
      customerAddress: formData.get("Address"),
      city: formData.get("City"),
    };
    let finalAns = [];
    finalAns.push(newAddedAddress);

    setNewCard(finalAns);
    event.target.reset();
  };
  useEffect(() => {
    if (newCard) {
      console.log(newCard, "new cardform given json");
      setSubmittedAddresses((prevAddresses) => [...prevAddresses, newCard]);
    }
  }, [newCard]);
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
            Card Information
          </Typography>

          <Tooltip placement="left" title="Add New Card">
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
        {card.length <= 1
          ? card.map((fields, cardIndex) => (
              <React.Fragment key={cardIndex}>
                {fields.map((row, index) => (
                  <PaymentFields key={index} fields={row} />
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
          Add Card
        </Button>
      </Box>
    </div>
  );
};
export default CustomPaymentCard;
