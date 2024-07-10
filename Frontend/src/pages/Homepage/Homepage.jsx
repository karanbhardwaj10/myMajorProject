import Navbar from "../../Shared/Components/Header";
import Footer from "../../Shared/Components/Footer";
const Homepage = () => {
  return (
    <>
    <div style={{
      display:'flex',
      flexDirection:'column',
      height:'100vh',
      width:'100vw',
      justifyContent:'space-between'
    }}>

      <Navbar />
      <Footer />
    </div>
    </>
  );
};
export default Homepage;