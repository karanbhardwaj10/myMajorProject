import { saveUserAddress } from "../state/addAddressAction";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialAddressVal = {
  loading: false,
  fullName: "",
  email: "",
  contactInfo: undefined,
  city: "",
  pincode: undefined,
  address: "",
};

export const saveAddress = createAsyncThunk(
  "saveAddress",
  async (data, { rejectWithValue }) => {
    try {
      const response = await saveUserAddress(data);
      console.log(response, "response after request in async thunk");
      if (response.errStatusCode) {
        console.log(response, "respose after error");

        return {
          // userName: data.userName,
          status: response.errStatusCode,
          allData: response,
        };
      }
      return {
        userName: data.userName,
        status: response.status,
        allData: response.data,
        // Any other relevant data
      }
    } catch (error) {
      console.log(error, "async thunk error");
      return rejectWithValue(error.message);
    }
  }
);
export const addressSlice = createSlice({
  name: "addressSlice",
  initialState: initialAddressVal,
  reducers: {
    resetAddress: (state) => {
      state = "";
      console.log(state, "after reset state val");
      // Reset status to an empty string
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveAddress.pending, (state) => {
        state.loading = true;
      })
      .addCase(saveAddress.fulfilled, (state, action) => {
        state.loading = false;
        console.log("inside fullfilled");
        state.fullName = action.payload;
        state.email = action.payload.status; // Assuming you want to store the status code
        state.contactInfo = action.payload;
        state.city=action.payload;
        state.pincode=action.payload;
        state.address=action.payload;
        console.log(action.payload, "status value from state form create slice");
      })
      .addCase(saveAddress.rejected, (state, action) => {
        state.loading = false;
        state = action.payload.status;
      });
  },
});

export default addressSlice.reducer;
export const { resetStatus } = addressSlice.actions;
