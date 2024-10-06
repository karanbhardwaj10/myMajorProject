import axios from "axios";

// import signInServices from "../services/signInServices";

export const getAllMenProducts = async (pageVal) => {
  console.log("inside women product product action");

  try {
    console.log(pageVal, "action");
    console.log(localStorage.getItem("token"),"token for header");
    
    const response = await axios.get(
      `http://localhost:4000/menProducts?page=${pageVal}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log("request done", response);
    return response;
  } catch (error) {
    return error.message;
    // if (error.response) {
    //   // Extracting the status and error message from the response
    //   const resErrorObj = {
    //     errStatusCode: error.response.status,
    //     errMessage: error.response.data?.message || error.message,
    //   };
    //   console.log(resErrorObj.errStatusCode, "status code", "22");
    //   return resErrorObj;
    // } else {
    //   console.log("Network or unexpected error", error.message);
    //   return {
    //     errStatusCode: null,
    //     errMessage: error.message || "An unexpected error occurred",
    //   };
    // }
  }
};

export const fetchDataRequest = () => ({ type: "FETCH_DATA_REQUEST" });
export const fetchDataSuccess = (data) => ({
  type: "FETCH_DATA_SUCCESS",
  payload: data,
});
export const fetchDataFailure = (error) => ({
  type: "FETCH_DATA_FAILURE",
  payload: error,
});

export const getSelectedMaleProduct = (productId) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const response = await axios.get(
        `http://localhost:4000/singleMaleProduct?productId=${productId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response);

      dispatch(
        fetchDataSuccess({ data: response.data, status: response.status })
      );
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};
// export const getSelectedMaleProduct = async (productId) => {
//   console.log("inside product action of single prodct");

//   try {
//     const response = await axios.get(
//       `https://fakestoreapi.com/products/${productId}`
//     );
//     console.log("request done", response);
//     return response;
//   } catch (error) {
//     return error.message;
//   }
// };
