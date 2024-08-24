import Navbar from "../../Shared/Components/Header";
import Footer from "../../Shared/Components/Footer";
import QnA from "../QnA/QnA";
import ProductType from "../Products/ProductType";
import CustomCartItem from "../../Shared/Components/CustomCardItems/CustomCartItem";

import NewsLetter from "../NewsLetter/NewsLetter";
import WebInfo from "../WebInfo/WebInfo";
import AddressDetails from "../Address/AddressDetails";
import CustomPaymentCard from "../../Shared/Components/AddPaymentCards/CustomPaymentCard";

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
        <WebInfo />
        <NewsLetter />
        <QnA />
        <Footer />
      </div>
    </>
  );
};
export default Homepage;
