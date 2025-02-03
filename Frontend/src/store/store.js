import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import signInReducer from "../pages/SIGNIN/features/sigInSlice";
import signUpReducer from "../pages/SignUp/features/signUpSlice";
import addressReducer from "../Shared/Components/AddAddressOne/Features/addressSlice";
import menProductReducer from "../pages/Products/features/MenProductSlice/getAllMensProductSlice";
import getSelectedMaleProductReducer from "../pages/Products/features/MenProductSlice/getSelectedMensProductSlice";
import femaleProductReducer from "../pages/Products/features/WomenProducSlice/getAllWomenProductSlice";
import getAllUserAddressReducer from "../Shared/Components/AddAddressOne/Features/getAddressSlice";
import deleteUserAddressReducer from "../Shared/Components/AddressTwo/Features/deleteUserAddressSlice";
import getSelectedFemaleProductReducer from "../pages/Products/features/WomenProducSlice/getSelectedWomenProductSlice";

// Redux Persist configuration
const persistConfig = {
  key: 'productData',
  storage,
  whitelist: ['getSelectedMaleProductlice', 'getSelectedFemaleProductSlice'], // Only persist these slices
};

// Combine reducers into a single root reducer
const rootReducer = combineReducers({
  signInSliceVal: signInReducer,
  signUpSliceVal: signUpReducer,
  getAddressSlice: getAllUserAddressReducer,
  addressSlice: addressReducer,
  deleteAddressSlice: deleteUserAddressReducer,
  maleProductSlice: menProductReducer,
  womenProductSlice: femaleProductReducer,
  getSelectedMaleProductlice: getSelectedMaleProductReducer,
  getSelectedFemaleProductSlice: getSelectedFemaleProductReducer,
});

// Create a persisted reducer with persistConfig and rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: false,
    }),
});

// Export the persistor
export const persistor = persistStore(store);
