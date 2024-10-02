const initialProductVal = {
    loading: false,
    error: null,
    data: {
      title: "",
      description: "",
      price: "",
      image: "",
      id: "",
    },
    rating: 0,
    status: "",
  };
  
  const getSelectedFemaleProductReducer = (state = initialProductVal, action) => {
    switch (action.type) {
      case "FETCH_DATA_REQUEST":
        return { ...state, loading: true, error: null };
      case "FETCH_DATA_SUCCESS":
        console.log(action.payload.data, "action payload data from 1 product");
        return {
          ...state,
          data: action.payload.data,
          rating: action.payload.rating,
          loading: false,
          status: "success",
        };
      case "FETCH_DATA_FAILURE":
        return {
          ...state,
          error: action.payload,
          loading: false,
          status: "failure",
        };
      default:
        return state;
    }
  };
  
  export default getSelectedFemaleProductReducer;
  
  // import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
  // import { getSelectedMaleProduct } from "../state/menProductActions";
  
  // const initialProductVal = {
  //   loading: false,
  //   error: null,
  //   singleProductData: {
  //     title: "",
  //     description: "",
  //     price: "",
  //     image: "",
  //     id: "",
  //     rating: {},
  //   },
  //   status: "",
  // };
  
  // export const selectedProduct = createAsyncThunk(
  //     "selectedProduct",
  //     async (productId, { rejectWithValue }) => {
  //       try {
  //         const response = await getSelectedMaleProduct(productId);
  //         console.log(response, "Response from createAsyncThunk");
  
  //         return response.data;  // Return only the product data
  //       } catch (error) {
  //         return rejectWithValue(error.message);  // Handle the error properly
  //       }
  //     }
  //   );
  // // export const getSelectedMaleProductlice = createSlice({
  // //   name: "getSelectedMaleProductlice",
  // //   initialState: initialProductVal,
  // //   reducers: {},
  // //   extraReducers: (builder) => {
  // //     builder
  // //       .addCase(selectedProduct.pending, (state) => {
  // //         state.loading = true;
  // //       })
  // //       .addCase(selectedProduct.fulfilled, (state, action) => {
  // //         state.loading = false;
  // //         state.singleProductData = action.payload.data;
  // //         state.status = action.payload.status;
  // //         console.log(action.payload, "state all data from fullfilled single product slice");
  // //       })
  // //       .addCase(selectedProduct.rejected, (state, action) => {
  // //         state.loading = false;
  // //         state.status = "rejected";
  // //         state.error = action.payload || "Something went wrong";
  // //       });
  // //   },
  // // });
  // const getSelectedFemaleProductReducer = (state = initialProductVal, action) => {
  //     switch (action.type) {
  //       case 'FETCH_DATA_REQUEST':
  //         return { ...state, loading: true, error: null };
  //       case 'FETCH_DATA_SUCCESS':
  //         console.log(action.payload,"action payload data from 1 product");
  
  //         return { ...state, singleProductData: action.payload, loading: false };
  
  //       case 'FETCH_DATA_FAILURE':
  //         return { ...state, error: action.payload, loading: false };
  //       default:
  //         return state;
  //     }
  
  //   };
  
  // export default getSelectedFemaleProductReducer.reducer;
  // // export const getSelectedProductReducerActions = getSelectedFemaleProductReducer.actions;
  