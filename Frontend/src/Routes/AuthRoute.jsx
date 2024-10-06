import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "../pages/SIGNIN/SignIn";
import SignUp from "../pages/SignUp/SignUp";

const AuthRoutes = () => {
  const isAuthenticated = localStorage.getItem("token") !== null;

  return isAuthenticated ? (
    <Navigate to="/" />
  ) : (
    <Routes>
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/SignIn" element={<SignIn />} />
      {/* If no match is found, redirect to SignIn */}
      <Route path="*" element={<Navigate to="/SignIn" />} />
    </Routes>
  );
};

export default AuthRoutes;
