import Navbar from "../../Shared/Components/Header";
import Footer from "../../Shared/Components/Footer";
import QnA from "../QnA/QnA";
const Homepage = () => {
  return (
    <>
    <div style={{
      display:'flex',
      flexDirection:'column',
      height:'100vh',
      width:'100%',
      justifyContent:'space-between'
    }}>

      <Navbar />
      <QnA/>
      <Footer />
    </div>
    </>
  );
};
export default Homepage;