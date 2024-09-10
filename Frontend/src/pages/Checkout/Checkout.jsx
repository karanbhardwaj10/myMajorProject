import Footer from "../../Shared/Components/FooterComponent/Footer";
import ResponsiveAppBar from "../../Shared/Components/HeaderComponent/Header";
import AddressDetails from "../Address/AddressDetails";

const Checkout = () => {
  return (
    <>
      <ResponsiveAppBar />
      <AddressDetails />
      <Footer />
    </>
  );
};
export default Checkout;
