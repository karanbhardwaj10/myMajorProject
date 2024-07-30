import { useRoutes } from "react-router-dom";
import SignIn from "./src/pages/SIGNIN/SignIn";
import SignUp from "./src/pages/SignUp/SignUp";
import Homepage from "./src/pages/Homepage/Homepage";
import MenProducts from "./src/pages/Products/MenProducts";

const MyRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Homepage /> },
    { path: "/SignUp", element: <SignUp /> },
    { path: "/SignIn", element: <SignIn /> },
    { path: "/men", element: <MenProducts /> },
    // { path: "/women", element: <WomenProducts /> },
    // { path: "/coming-soon", element: <ComingSoon /> },
  ]);
  return element;
};
export default MyRoutes;
