import { BrowserRouter as Router } from "react-router-dom";
import MyRoutes from "../Routes";
import Breadcrumnbs from "./Shared/Components/Breadcrumbs";

function App() {
  return (
    <>
      <Router>
        <MyRoutes />
        <Breadcrumnbs/>
      </Router>
    </>
  );
}

export default App;
