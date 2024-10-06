import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Homepage from "../pages/Homepage/Homepage";
import MenProducts from "../pages/Products/MenProducts";
import FemaleProducts from "../pages/Products/WomenProducts";
import SelectedMaleProductDetails from "../pages/Products/selectedMaleProductDetails";
import SelectedFemaleProductDetails from "../pages/Products/selectedFemaleProductDetails";
import Checkout from "../pages/Checkout/Checkout";
import Wishlist from "../pages/Wishlist/Wishlist";

const getTokenExpirationTime = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    if (payload.exp) {
      return payload.exp * 1000;
    }
  } catch (error) {
    console.error("Error parsing token:", error);
  }

  return null;
};

const isTokenValid = () => {
  const expirationTime = getTokenExpirationTime();
  return expirationTime ? expirationTime > Date.now() : false;
};

const PrivateRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(isTokenValid());
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      const isValid = isTokenValid();
      setIsAuthenticated(isValid);

      if (!isValid) {
        localStorage.removeItem("token");
        navigate("/auth/SignIn");
      }
    };

    checkAuth(); // Check immediately on component mount

    const expirationTime = getTokenExpirationTime();
    if (expirationTime) {
      const timeUntilExpiration = expirationTime - Date.now();
      if (timeUntilExpiration > 0) {
        // Set a timeout to check auth when the token is about to expire
        const timerId = setTimeout(checkAuth, timeUntilExpiration);
        return () => clearTimeout(timerId);
      }
    }
  }, [navigate]);

  if (!isAuthenticated) {
    return <Navigate to="/auth/SignIn" replace />;
  }

  return (
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
  );
};

export default PrivateRoute;
