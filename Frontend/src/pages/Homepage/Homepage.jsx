import Navbar from "../../Shared/Components/HeaderComponent/Header";
import Footer from "../../Shared/Components/FooterComponent/Footer";
import QnA from "../QnA/QnA";
import ProductType from "../Products/ProductType";
import LandingComponent from "../LandingComponent/LandingComponent";
import NewsLetter from "../NewsLetter/NewsLetter";
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
        <LandingComponent />
        <ProductType />
        <WebInfo />
        <NewsLetter />
        <QnA />
        <Footer />
      </div>
    </>
  );
};
export default Homepage;
