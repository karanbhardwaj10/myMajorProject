import Navbar from "../../Shared/Components/Header";
import Footer from "../../Shared/Components/Footer";
import QnA from "../QnA/QnA";
import WebInfo from "../WebInfo/WebInfo";
const Homepage = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Navbar />
        <WebInfo />
        <QnA />
        <Footer />
      </div>
    </>
  );
};
export default Homepage;
