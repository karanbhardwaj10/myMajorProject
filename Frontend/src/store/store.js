import { configureStore } from "@reduxjs/toolkit";
import signInReducer from "../pages/SIGNIN/features/sigInSlice";
import signUpReducer from "../pages/SignUp/features/signUpSlice";
import productReducer from "../pages/Products/features/productSlice";
import getSelectedProductReducer from "../pages/Products/features/getProductSlice";

export const store = configureStore({
  reducer: {
    signInSliceVal: signInReducer,
    signUpSliceVal: signUpReducer,
    productSlice: productReducer,
    getSelectedProductSlice: getSelectedProductReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
    }),
});