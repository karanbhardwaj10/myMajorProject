import Navbar from "../../Shared/Components/Header";
import Footer from "../../Shared/Components/Footer";
import QnA from "../QnA/QnA";
import AddressDetails from "../Address/AddressDetails";
import CustomPaymentCard from "../../Shared/Components/AddPaymentCards/CustomPaymentCard";

const Homepage = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          width: "100%",

          justifyContent: "space-between",
        }}
      >
        <Navbar />
        <div style={{ flex: 1, overflow: "auto" }}>
          <CustomPaymentCard />
          <AddressDetails />
          <QnA />
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Homepage;
