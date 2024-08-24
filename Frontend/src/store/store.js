// created store
import { configureStore } from "@reduxjs/toolkit";
// import userSignInReducer from "../features/sigInSlice";
// import resetStatus  from "../features/sigInSlice";
import signInReducer from "../features/sigInSlice";
// import  getUser  from "../features/sigInSlice";
export const store = configureStore({
  reducer: {
    signInVal: signInReducer,
  },
});
