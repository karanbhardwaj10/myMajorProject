import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./Routes/PrivateRoutes";
import AuthRoutes from "./Routes/AuthRoute";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
// import Breadcrumnbs from "./Shared/Components/Breadcrumbs";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/auth/*" element={<AuthRoutes />} />

        {/* Protected routes */}
        <Route path="/*" element={<PrivateRoute />} />

        {/* Page not found route */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
