import Navbar from "../../Shared/Components/HeaderComponent/Header";
import Footer from "../../Shared/Components/FooterComponent/Footer";
import QnA from "../QnA/QnA";
import ProductType from "../Products/ProductType";
import LandingComponent from "../LandingComponent/LandingComponent";
import NewsLetter from "../NewsLetter/NewsLetter";
import WebInfo from "../WebInfo/WebInfo";
import { Box } from "@mui/material";
import InfiniteCarousel from "../../Shared/Components/infiniteCarousel/InfiniteCarousel";
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
        <Box marginTop={'50'} marginBottom={'50'} height={'500px'}>
          <InfiniteCarousel />
        </Box>
        <WebInfo />
        <NewsLetter />
        <QnA />
        <Footer />
      </div>
    </>
  );
};
export default Homepage;

