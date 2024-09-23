import { Box } from "@mui/material";
import CustomAddressTwo from "../../Shared/Components/AddressTwo/CustomAddressTwo";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAddress } from "../../Shared/Components/AddAddressOne/Features/getAddressSlice.js";

const AddressRow = ({ fields, userAddressId }) => (
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
          // no margin right on the last element of the row
          marginRight: index !== fields.length - 1 ? "10px" : "0",
        }}
      >
        <CustomAddressTwo userAddressId={userAddressId} {...field} />
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
  const dispatch = useDispatch();

  const { loading, getAddressStatusCode, allUseraddressData } = useSelector(
    (state) => state.getAddressSlice
  );

  const [newAddress, setNewAddress] = useState([]);
  // const handleDelete = (id) => {
  //   console.log("Deleting address with ID:", id);
  //   // Call your delete web service here
  //   dispatch(deleteAddress(id));  // Assuming deleteAddress is an action that calls the API
  // };
  useEffect(() => {
    console.log("inside address2 use effect");

    const userToken = localStorage.getItem("token");
    console.log("user token set");

    dispatch(getAddress(userToken));
    
  }, [dispatch]);

  useEffect(() => {
    if (getAddressStatusCode === 200 && allUseraddressData) {
      console.log("Received all addresses:", allUseraddressData.data);
      
      setNewAddress(allUseraddressData.data);
      // Setting fetched addresses
    }
  }, [getAddressStatusCode, allUseraddressData]);

  return (
    <Box>
      {getAddressStatusCode === 200 && newAddress.length > 0 ? (
        newAddress.map((row, index) => (
          <AddressRow
            fields={[
              {
                // label: row.fullName,
                addressType: row.addressType,
                customerName: row.fullName,
                customerAddress: `${row.address}, ${row.city} - ${row.pincode}`,
              },
            ]}
            key={row._id}
            userAddressId={row._id}
            // onDelete={handleDelete}
          />
        ))
      ) : (
        <Box
          height={"500px"}
          width={"700px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <p>No addresses found</p>
        </Box>
      )}
    </Box>
  );
};
AddressTwo.propTypes = {
  // this was required
  sharedState: PropTypes.array,
};

export default AddressTwo;
// const AddressTwo = ({ sharedState }) => {
//   const dispatch = useDispatch();
//   const { loading, getAddressStatusCode, allUseraddressData } = useSelector(
//     (state) => state.getAddressSlice
//   );

//   // eslint-disable-next-line no-unused-vars
//   const [newAddress, setNewAddress] = useState([]);
//   // setNewAddress([...newAddress, sharedState]);
//   // useEffect(() => {

//   //   if (sharedState) {
//   //     setNewAddress(prevAddresses => {
//   //       // Check if sharedState is already in the array
//   //       if (!prevAddresses.includes(sharedState)) {
//   //         return [...prevAddresses, sharedState];
//   //       }
//   //       return prevAddresses;
//   //     });
//   //   }
//   //   console.log(sharedState,"shared state");
//   // }, [sharedState]);

//   useEffect(() => {
//     console.log("inside address2 use effect");

//     const userToken = localStorage.getItem("token");
//     console.log("user token set");

//     dispatch(getAddress(userToken));
//     if (getAddressStatusCode === 200) {
//       console.log("getting all the address");

//       console.log(typeof allUseraddressData,'all the address from address 2');
//       console.log(allUseraddressData.data,'all the address from address 2');
//     }
//   }, [getAddressStatusCode]);

//   console.log(newAddress, "new address");
//   return (
//     <>
//       <Box>
//         { getAddressStatusCode ===200 ? allUseraddressData.map((row, index) => (
//           <AddressRow fields={[
//               {
//                 label: row.fullName,
//                 addressType: row.addressType,
//                 customerName: row.fullName,
//                 customerAddress: `${row.address}, ${row.city} - ${row.pincode}`,
//                 fullWidth: true, // Adjust based on UI needs
//               },
//             ]} key={index} />
//         )) : <></> }
//         {/* {newAddress.map((row, index) => (
//           <AddressRow fields={row} key={index} />
//         ))} */}
//       </Box>
//     </>
//   );
// };
