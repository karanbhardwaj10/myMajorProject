import axios from "axios";

export const saveUserAddress = async (data) => {
  try {
    console.log(data, "data from actions given to it by slice");
    const headers = {
      Authorization: `Bearer ${data.userToken}`,
    };
    const response = await axios.post(
      "http://localhost:4000/addAddress",
      data.newAddress,
      { headers: headers }
    );
    console.log(response, "actions response");
    return response;
  } catch (error) {
    console.log(error);

    if (error.response) {
      // Extracting the status and error message from the response
      const resErrorObj = {
        errStatusCode: error.response.status,
        errMessage: error.response.data || error.message,
      };
      console.log(
        resErrorObj.errStatusCode,
        " err status code for address",
        resErrorObj,
        "res error obj"
      );
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
