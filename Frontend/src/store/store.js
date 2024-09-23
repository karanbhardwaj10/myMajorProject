import { configureStore } from "@reduxjs/toolkit";
import signInReducer from "../pages/SIGNIN/features/sigInSlice";
import signUpReducer from "../pages/SignUp/features/signUpSlice";
import addressReducer from "../Shared/Components/AddAddressOne/Features/addressSlice";
import productReducer from "../pages/Products/features/productSlice";
import getSelectedProductReducer from "../pages/Products/features/getProductSlice";
import getAllUserAddressReducer from "../Shared/Components/AddAddressOne/Features/getAddressSlice"
import deleteUserAddressReducer from "../Shared/Components/AddressTwo/Features/deleteUserAddressSlice"
export const store = configureStore({
  reducer: {
    signInSliceVal: signInReducer,
    signUpSliceVal: signUpReducer,
    getAddressSlice:getAllUserAddressReducer,
    addressSlice: addressReducer,
    deleteAddressSlice:deleteUserAddressReducer,
    productSlice: productReducer,
    getSelectedProductSlice: getSelectedProductReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
    }),
});