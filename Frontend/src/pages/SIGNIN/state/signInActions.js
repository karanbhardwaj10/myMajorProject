import axios from "axios";

// import signInServices from "../services/signInServices";

export const getSignedInUser = async (userVal) => {
  console.log("inside signIn action");

  try {
    const response = await axios.post("http://localhost:4000/signIn", userVal);
    console.log("request done");
    return response;
  } catch (error) {
    if (error.response) {
      // Extracting the status and error message from the response
      const resErrorObj = {
        errStatusCode: error.response.status,
        errMessage: error.response.data?.message || error.message,
      };
      console.log(resErrorObj.errStatusCode, "status code", "22");
      return resErrorObj;
    } else {
      console.log("Network or unexpected error", error.message);
      return {
        errStatusCode: null,
        errMessage: error.message || "An unexpected error occurred",
      };
    }
  }
};
// const signInActions = {
//   async getSignedInUser(userVal) {
//     return await signInServices.getSignedInUser(userVal);
//   },
// };
// export default signInActions;
