import { Grid } from "@mui/material";
import CustomAddressTwo from "../../Shared/Components/AddressTwo/CustomAddressTwo";
import PropTypes from "prop-types";


const addressFields = [
  [{
    addressType: "Home",
    customerName: "Karan",
    customerAddress: "B-2/194 Yamauna Vihar Delhi-110053",
  }],
];
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
const AddressTwo = () => {
  return (
    <>
      <Grid  >
        {addressFields.map((row, index) => ( 
          <AddressRow    fields={row} key={index} />
        ))}
      </Grid>
    </>
  );
};
export default AddressTwo;
