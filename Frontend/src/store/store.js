import { configureStore } from "@reduxjs/toolkit";
import signInReducer from "../pages/SIGNIN/features/sigInSlice";
import signUpReducer from "../pages/SignUp/features/signUpSlice";
import addressReducer from "../Shared/Components/AddAddressOne/Features/addressSlice";
import menProductReducer from "../pages/Products/features/MenProductSlice/getAllMensProductSlice";
import getSelectedMaleProductReducer from "../pages/Products/features/MenProductSlice/getSelectedMensProductSlice";
import femaleProductReducer from "../pages/Products/features/WomenProducSlice/getAllWomenProductSlice";
import getAllUserAddressReducer from "../Shared/Components/AddAddressOne/Features/getAddressSlice";
import deleteUserAddressReducer from "../Shared/Components/AddressTwo/Features/deleteUserAddressSlice";
import getSelectedFemaleProductReducer from "../pages/Products/features/WomenProducSlice/getSelectedWomenProductSlice";
export const store = configureStore({
  reducer: {
    signInSliceVal: signInReducer,
    signUpSliceVal: signUpReducer,
    getAddressSlice: getAllUserAddressReducer,
    addressSlice: addressReducer,
    deleteAddressSlice: deleteUserAddressReducer,
    maleProductSlice: menProductReducer,
    womenProductSlice: femaleProductReducer,
    getSelectedMaleProductlice: getSelectedMaleProductReducer,
    getSelectedFemaleProductSlice: getSelectedFemaleProductReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
    }),
});
