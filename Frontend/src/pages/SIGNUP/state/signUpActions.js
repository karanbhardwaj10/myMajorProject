import axios from "axios";

export const getSignedUpUser = async (userVal) => {
    try {
      const response = await axios.post('http://localhost:4000/signUp', userVal);
      return response;
    }catch (error) {
      console.log(error);
      
    if (error.response) {
      // Extracting the status and error message from the response
      const resErrorObj = {
        errStatusCode: error.response.status,
        errMessage: error.response.data || error.message,
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