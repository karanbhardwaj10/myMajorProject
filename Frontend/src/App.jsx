import { BrowserRouter as Router } from "react-router-dom";
import MyRoutes from "../Routes";

function App() {
  return (
    <>
      <Router>
        <MyRoutes />
      </Router>
    </>
  );
}

export default App;
