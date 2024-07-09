import { useRoutes } from "react-router-dom";
import SignIn from "./src/pages/SIGNIN/SignIn";
import SignUp from "./src/pages/SIGNUP/SignUp";
// import SignIn from "./src/pages/SIGNIN/SignIn";

const MyRoutes = () => {
  let element = useRoutes([
    { path: "/SignUp", element: <SignUp /> },
    { path: "/SignIn", element: <SignIn /> },
  ]);
  return element;
};
export default MyRoutes;
