import { Routes, Route, Navigate } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Homepage from "../pages/Homepage/Homepage";
import MenProducts from "../pages/Products/MenProducts";
import FemaleProducts from "../pages/Products/WomenProducts";
import SelectedMaleProductDetails from "../pages/Products/selectedMaleProductDetails";
import SelectedFemaleProductDetails from "../pages/Products/selectedFemaleProductDetails";
import Checkout from "../pages/Checkout/Checkout";
import Wishlist from "../pages/Wishlist/Wishlist";

const PrivateRoute = () => {
  let isAuthenticated = false;
  const userToken = localStorage.getItem("token");

  if (userToken) {
    try {
      //   jwt.verify(userToken, "SECr3t");
      isAuthenticated = true;
    } catch (error) {
      console.error("Token verification failed:", error);
      localStorage.removeItem("token"); // Clear the token if verification fails
    }
  } else {
    console.warn("No token found in local storage.");
  }

  return isAuthenticated ? (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/men" element={<MenProducts />} />
      <Route path="/women" element={<FemaleProducts />} />
      <Route
        path="/menProduct/:id/:title"
        element={<SelectedMaleProductDetails />}
      />
      <Route
        path="/womenProduct/:id/:title"
        element={<SelectedFemaleProductDetails />}
      />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  ) : (
    <Navigate to="/auth/SignIn" />
  );
};

export default PrivateRoute;
