import CustomCartItem from "../../Shared/Components/CustomCardItems/CustomCartItem";
import CustomPriceDetails from "../../Shared/Components/PriceDetails/CustomPriceDetails";
import Footer from "../../Shared/Components/FooterComponent/Footer";
import ResponsiveAppBar from "../../Shared/Components/HeaderComponent/Header";
import { Box} from "@mui/material";

const Wishlist = () => {
  return (
    <Box>
      <ResponsiveAppBar />
      <Box display={"flex"} justifyContent={"space-between"} height={"100vh"}>
        <Box >

        <CustomCartItem />
        </Box>

        <Box  marginTop={"40px"} marginRight={"50px"}>
          <CustomPriceDetails />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};
export default Wishlist;
