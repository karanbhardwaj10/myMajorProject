import axios from "axios";

export const deleteUserAddress = async (userAddressId) => {
  try {
    // console.log(userToken, "data from actions given to it by slice get address");
    // const headers = {
    //   Authorization: `Bearer ${userToken}`,
    // };
    // console.log(headers,"headers from get address");

    const response = await axios.delete(
      `http://localhost:4000/deleteUserAddress/${userAddressId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(response, "actions response from delete address");
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
        " err status code for delete address",
        resErrorObj,
        "res error obj delete address"
      );
      return resErrorObj;
    } else {
      console.log("Network or unexpected error delete address", error.message);
      return {
        errStatusCode: null,
        errMessage: error.message || "An unexpected error occurred",
      };
    }
  }
};
