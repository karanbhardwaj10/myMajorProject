import { useRoutes } from "react-router-dom";
import SignIn from "./src/pages/SIGNIN/SignIn";
import SignUp from "./src/pages/SignUp/SignUp";
import Homepage from "./src/pages/Homepage/Homepage";
import MenProducts from "./src/pages/Products/MenProducts";
import ProductDetials from "./src/pages/Products/ProductDetails";
import Checkout from "./src/pages/Checkout/Checkout";
import Wishlist from "./src/pages/Wishlist/Wishlist";

const MyRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Homepage /> },
    { path: "/SignUp", element: <SignUp /> },
    { path: "/SignIn", element: <SignIn /> },
    { path: "/men", element: <MenProducts /> },
    { path: "/product/:id/:title", element: <ProductDetials /> },
    { path: "/Checkout", element: <Checkout /> },
    { path: "/Wishlist", element: <Wishlist /> },
    
  ]);
  return element;
};
export default MyRoutes;
