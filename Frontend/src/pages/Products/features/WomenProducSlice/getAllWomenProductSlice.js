import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllWomenProducts } from "../../state/womenProductActions";

const initialProductVal = {
  loading: false,
  womenProductData: {
    title: "",
    description: "",
    price: "",
    image: "",
    id: "",
    brand: "",
    rating: "",
  },
  totalWomenProducts: undefined,
  status: "",
  alldata: {},
};

export const getAllFemaleProducts = createAsyncThunk(
  "getAllFemaleProducts",
  async (pageVal, { rejectWithValue }) => {
    console.log(pageVal, "from product slice pageval");
    try {
      const response = await getAllWomenProducts(pageVal);
console.log(response.data.totalProducts,"women total products");

      return {
        data: response.data.data,
        status: response.status,
        totalWomenProducts: response.data.totalProducts,
      }; // Ensure only the data is returned
      // return { data: response.data.products, status: response.status }; // Ensure only the data is returned
    } catch (error) {
      return rejectWithValue(error.message); // Properly handle the error
    }
  }
);
export const womenProductSlice = createSlice({
  name: "womenProductSlice",
  initialState: initialProductVal,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllFemaleProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllFemaleProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.womenProductData = action.payload.data;
        state.status = action.payload.status;
        state.totalWomenProducts = action.payload.totalWomenProducts;
        console.log(
          state.totalWomenProducts,
          "state all data from fullfilled women products"
        );
        console.log(state.status, "state all data from fullfilled");
      })
      .addCase(getAllFemaleProducts.rejected, (state, action) => {
        state.loading = false;
        state.status = "rejected";
        state.error = action.payload || "Something went wrong";
      });
  },
});

export default womenProductSlice.reducer;
export const { resetStatus } = womenProductSlice.actions;
