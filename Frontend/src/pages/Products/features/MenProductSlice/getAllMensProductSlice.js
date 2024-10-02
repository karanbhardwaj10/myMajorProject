import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllMenProducts } from "../../state/menProductActions";

const initialProductVal = {
  loading: false,
  productData: {
    title: "",
    description: "",
    price: "",
    image: "",
    id: "",
    brand: "",
    rating: "",
  },
  totalProducts: undefined,
  status: "",
  alldata: {},
};

export const getAllMaleProducts = createAsyncThunk(
  "getAllMaleProducts",
  async (pageVal, { rejectWithValue }) => {
    console.log(pageVal, "from product slice pageval");
    try {
      const response = await getAllMenProducts(pageVal);

      return {
        data: response.data.data,
        status: response.status,
        totalProducts: response.data.totalProducts,
      }; // Ensure only the data is returned
      // return { data: response.data.products, status: response.status }; // Ensure only the data is returned
    } catch (error) {
      return rejectWithValue(error.message); // Properly handle the error
    }
  }
);
export const maleProductSlice = createSlice({
  name: "maleProductSlice",
  initialState: initialProductVal,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllMaleProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllMaleProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.productData = action.payload.data;
        state.status = action.payload.status;
        state.totalProducts = action.payload.totalProducts;
        console.log(
          action.payload.totalProducts,
          "state all data from fullfilled"
        );
        console.log(state.status, "state all data from fullfilled");
      })
      .addCase(getAllMaleProducts.rejected, (state, action) => {
        state.loading = false;
        state.status = "rejected";
        state.error = action.payload || "Something went wrong";
      });
  },
});

export default maleProductSlice.reducer;
export const { resetStatus } = maleProductSlice.actions;
