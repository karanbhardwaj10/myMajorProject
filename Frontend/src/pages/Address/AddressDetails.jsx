import AddressOne from "../../Shared/Components/AddAddressOne/AddressOne";
import AddressTwo from "./AddressTwo";
import { useState } from "react";
const AddressDetails = () => {
  const [sharedState, setSharedState] = useState([]);

  const handleStateChange = (newState) => {
    setSharedState(newState);
    console.log(newState, "address detail component");
  };
  return (
    <>
      <AddressTwo sharedState={sharedState} />
      <AddressOne onAddAddress={handleStateChange} />
    </>
  );
};
export default AddressDetails;
