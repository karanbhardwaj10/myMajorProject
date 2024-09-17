
import { Box } from "@mui/material";
import CustomAddressTwo from "../../Shared/Components/AddressTwo/CustomAddressTwo";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
const AddressRow = ({ fields }) => (
  <div
    style={{
      display: "flex",
      marginBottom: "10px",
      marginTop: "10px",
    }}
  >
    {fields.map((field, index) => (
      <div
        key={index}
        style={{
          flex: field.fullWidth ? 1 : 2,
          // no margin right on the last element of the row
          marginRight: index !== fields.length - 1 ? "10px" : "0",
        }}
      >
        <CustomAddressTwo {...field} />
      </div>
    ))}
  </div>
);

AddressRow.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      addressType: PropTypes.string,
      customerName: PropTypes.string,
      customerAddress: PropTypes.string,
      fullWidth: PropTypes.bool,
      // Add any other field properties you expect
    })
  ).isRequired,
};

const AddressTwo = ({ sharedState }) => {
  // eslint-disable-next-line no-unused-vars
  const [newAddress, setNewAddress] = useState([]);
  // setNewAddress([...newAddress, sharedState]);
  useEffect(() => {
   
    if (sharedState) {
      setNewAddress(prevAddresses => {
        // Check if sharedState is already in the array
        if (!prevAddresses.includes(sharedState)) {
          return [...prevAddresses, sharedState];
        }
        return prevAddresses;
      });
    }
    console.log(sharedState,"shared state");
  }, [sharedState]);
  console.log(newAddress, "new address");
  return (
    <>
      <Box >
       
        {newAddress.map((row, index) => (
          <AddressRow fields={row} key={index} />
        ))}
      </Box>
    </>
  );
};
AddressTwo.propTypes = {
  // this was required
  sharedState: PropTypes.array,
};

export default AddressTwo;