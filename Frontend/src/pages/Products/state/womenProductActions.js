import axios from "axios";

export const getAllWomenProducts = async (pageVal) => {
  console.log("inside women product product action");

  try {
    console.log(pageVal, "action");

    const response = await axios.get(
      `http://localhost:4000/femaleProducts?page=${pageVal}`
    );
    console.log("request done", response);
    return response;
  } catch (error) {
    return error.message;
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

export const getSelectedFemaleProduct = (productId) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const response = await axios.get(
        `http://localhost:4000/singleFemaleProduct?productId=${productId}`
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

