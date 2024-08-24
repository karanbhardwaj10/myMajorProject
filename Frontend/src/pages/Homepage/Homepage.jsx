import Navbar from "../../Shared/Components/Header";
import Footer from "../../Shared/Components/Footer";
import QnA from "../QnA/QnA";
import ProductType from "../Products/ProductType";
import CustomCartItem from "../../Shared/Components/CustomCardItems/CustomCartItem";

import NewsLetter from "../NewsLetter/NewsLetter";
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
        <CustomCartItem />
        <ProductType />
        <QnA />
        <NewsLetter/>
      <Footer />
      </div>
    </>
  );
};
export default Homepage;
