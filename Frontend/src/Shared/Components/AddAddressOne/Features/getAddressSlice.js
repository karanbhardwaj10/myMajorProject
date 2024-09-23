
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserAddress } from "../state/getUserAddressAction";
const getAllAddress = {
  loading: false,
  fullName: "",
  email: "",
  address: "",
  allUseraddressData:undefined,
  getAddressStatusCode: undefined,
};

export const getAddress = createAsyncThunk(
  "getAddress",
  async (data, { rejectWithValue }) => {
    try {
      console.log(data, "data from dipatch");

      const response = await getUserAddress(data);
      console.log(response, "response after request in async thunk get address");
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
export const getAddressSlice = createSlice({
  name: "getAddressSlice",
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
      .addCase(getAddress.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAddress.fulfilled, (state, action) => {
        state.loading = false;
        console.log("inside fullfilled get address");
        state.allUseraddressData = action.payload.allUseraddressData;
        // state.email = action.payload.status; // Assuming you want to store the status code
        // state.contactInfo = action.payload;
        // state.city = action.payload;
        // state.pincode = action.payload;
        // state.address = action.payload;
        state.getAddressStatusCode = action.payload.status;
        console.log(
            state.allUseraddressData,
          "state.allUseraddressData"
        );
      })
      .addCase(getAddress.rejected, (state, action) => {
        state.loading = false;
        state = action.payload.status;
      });
  },
});

export default getAddressSlice.reducer;
export const { resetStatus } = getAddressSlice.actions;
