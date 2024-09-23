import AddressOne from "../../Shared/Components/AddAddressOne/AddressOne";
import AddressTwo from "./AddressTwo";
// import { useState } from "react";
import { Box } from "@mui/material";
import CustomPriceDetails from "../../Shared/Components/PriceDetails/CustomPriceDetails";
const AddressDetails = () => {
  // const [sharedState, setSharedState] = useState([]);

  // const handleStateChange = (newState) => {
  //   setSharedState(newState);
  //   console.log(newState, "address detail component");
  // };
  return (
    <Box display={"flex"} flexDirection={"column"} >
      {/* <AddressTwo sharedState={sharedState} /> */}
      {/* <AddressOne onAddAddress={handleStateChange} /> */}
      <Box display={"flex"} flexDirection={"row"} width={'100%'}>
        <Box  display={"flex"} flexDirection={"column"} sx={{mt:4}}>
        <AddressTwo />
        {/* <AddressOne /> */}
        </Box>
        <Box
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            height: "600px",
            overflow: "hidden",
          }}
        >
          <CustomPriceDetails />
        </Box>
      </Box>
      <Box >
        <AddressOne />
      </Box>
    </Box>
  );
};
export default AddressDetails;
