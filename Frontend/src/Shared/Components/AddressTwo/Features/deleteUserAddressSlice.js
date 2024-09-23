
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteUserAddress } from "../State/deleteAddress";
const getAllAddress = {
  loading: false,
  deleteAddressStatusCode: undefined,
};

export const deleteAddress = createAsyncThunk(
  "deleteAddress",
  async (userAddressId, { rejectWithValue }) => {
    try {
      console.log(userAddressId, "data from dipatch");

      const response = await deleteUserAddress(userAddressId);
      console.log(response, "response after request in async thunk delete address");
      if (response.errStatusCode) {
        console.log(response, "respose after error");

        return {
          // userName: data.userName,
          status: response.errStatusCode,
          //   allData: response,
        };
      }
      return {
        // userName: data.userName,
        status: response.status,
        allUseraddressData: response.data,
        // Any other relevant data
      };
    } catch (error) {
      console.log(error, "async thunk error");
      return rejectWithValue(error.message);
    }
  }
);
export const deleteAddressSlice = createSlice({
  name: "deleteAddressSlice",
  initialState: getAllAddress,
  reducers: {
    resetAddress: (state) => {
      state = "";
      console.log(state, "after reset state val");
      // Reset status to an empty string
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteAddress.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteAddress.fulfilled, (state, action) => {
        state.loading = false;
        console.log("inside fullfilled delete address");
        state.deleteAddressStatusCode = action.payload.status;
        console.log(
            state.deleteAddressStatusCode,
          "state.delete user address"
        );
      })
      .addCase(deleteAddress.rejected, (state, action) => {
        state.loading = false;
        state = action.payload.status;
      });
  },
});

export default deleteAddressSlice.reducer;
export const { resetStatus } = deleteAddressSlice.actions;
