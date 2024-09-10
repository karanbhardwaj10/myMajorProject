import CustomCartItem from "../../Shared/Components/CustomCardItems/CustomCartItem";
import CustomPriceDetails from "../../Shared/Components/PriceDetails/CustomPriceDetails";
import Footer from "../../Shared/Components/FooterComponent/Footer";
import ResponsiveAppBar from "../../Shared/Components/HeaderComponent/Header";
import { Box, Typography, Button } from "@mui/material";

const Wishlist = () => {
  return (
    <Box>
      <ResponsiveAppBar />
      <Box display={"flex"} justifyContent={"space-between"} height={"100vh"}>
        <Box marginTop={'15px'}>

        <CustomCartItem />
        </Box>

        <Box marginLeft={"20px"} marginTop={"50px"} marginRight={"10px"}>
          <CustomPriceDetails />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};
export default Wishlist;
