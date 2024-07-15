import Navbar from "../../Shared/Components/Header";
import Footer from "../../Shared/Components/Footer";
import QnA from "../QnA/QnA";
import AddressDetails from "../Address/AddressDetails";

const Homepage = () => {
  return (
    <>
    <div style={{
      display:'flex',
      flexDirection:'column',
      minHeight:'100vh',
      width:'100%',
      
      justifyContent:'space-between'
    }}>

      <Navbar />
      <div style={{ flex: 1, overflow: 'auto' }}>
        <AddressDetails />
        <QnA />
      </div>
      <Footer />
    </div>
    </>
  );
};
export default Homepage;