import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../state/productActions";

const initialProductVal = {
  loading: false,
  productData: {
    title: "",
    description: "",
    price: "",
    image: "",
    id: "",
    rating: {},
  },
  status: "",
  alldata: {},
};

export const getProducts = createAsyncThunk(
  "getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllProducts();

      return { data: response.data.products, status: response.status }; // Ensure only the data is returned
    } catch (error) {
      return rejectWithValue(error.message); // Properly handle the error
    }
  }
);
export const productSlice = createSlice({
  name: "productSlice",
  initialState: initialProductVal,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.productData = action.payload.data;
        state.status = action.payload.status;
        console.log(action.payload, "state all data from fullfilled");
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.status = "rejected";
        state.error = action.payload || "Something went wrong";
      });
  },
});

export default productSlice.reducer;
export const { resetStatus } = productSlice.actions;
