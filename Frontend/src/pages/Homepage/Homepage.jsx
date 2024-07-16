import Navbar from "../../Shared/Components/Header";
import Footer from "../../Shared/Components/Footer";
import QnA from "../QnA/QnA";
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
        <div style={{ margin: '20px 0' }}>
        <InfiniteCarousel />
      </div>
        <QnA />
        <Footer />
      </div>
    </>
  );
};
export default Homepage;
