import { useRoutes } from "react-router-dom";
import SignIn from "./src/pages/SIGNIN/SignIn";
import SignUp from "./src/pages/SIGNUP/SignUp";
import Homepage from "./src/pages/Homepage/Homepage";

const MyRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Homepage /> },
    { path: "/SignUp", element: <SignUp /> },
    { path: "/SignIn", element: <SignIn /> },
  ]);
  return element;
};
export default MyRoutes;
