import { useRoutes } from "react-router-dom";
import SignIn from "../pages/SIGNIN/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Homepage from "../pages/Homepage/Homepage";
import MenProducts from "../pages/Products/MenProducts";
import FemaleProducts from "../pages/Products/WomenProducts";
import SelectedMaleProductDetails from "../pages/Products/selectedMaleProductDetails"
import SelectedFemaleProductDetails from "../pages/Products/selectedFemaleProductDetails";
import Checkout from "../pages/Checkout/Checkout";
import Wishlist from "../pages/Wishlist/Wishlist";

const MyRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Homepage /> },
    { path: "/SignUp", element: <SignUp /> },
    { path: "/SignIn", element: <SignIn /> },
    { path: "/men", element: <MenProducts /> },
    { path: "/women", element: <FemaleProducts /> },
    { path: "/menProduct/:id/:title", element: <SelectedMaleProductDetails /> },
    { path: "/womenProduct/:id/:title", element: <SelectedFemaleProductDetails /> },
    { path: "/Checkout", element: <Checkout /> },
    { path: "/Wishlist", element: <Wishlist /> },
    
  ]);
  return element;
};
export default MyRoutes;
