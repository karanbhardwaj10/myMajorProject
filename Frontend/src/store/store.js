// created store
import { configureStore } from "@reduxjs/toolkit";
// import userSignInReducer from "../features/sigInSlice";
// import resetStatus  from "../features/sigInSlice";
import signInReducer from "../pages/SIGNIN/features/sigInSlice";
import signUpReducer from "../pages/SignUp/features/signUpSlice";
import addressReducer from "../Shared/Components/AddAddressOne/Features/addressSlice";
// import  getUser  from "../features/sigInSlice";
export const store = configureStore({
  reducer: {
    signInSliceVal: signInReducer,
    signUpSliceVal: signUpReducer,
    addressSlice: addressReducer,
  },
});
