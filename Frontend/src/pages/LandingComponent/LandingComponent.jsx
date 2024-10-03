import { Box, Button, Typography } from "@mui/material";
import Stack from "@mui/joy/Stack";
// import backgroundImageForNewsLetter from "../../assets/backgroundImageForNewsLetter.jpg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import PercentIcon from "@mui/icons-material/Percent";
const LandingComponent = () => {
  function handleShopNowClick(){
    setTimeout(() => {
      var elmntToView = document.getElementById("ProductsTypes");
      console.log(elmntToView, "element to view");
      if (elmntToView) {
        elmntToView.scrollIntoView();
      }
    }, 100);
  }
  return (
    <Box
      sx={{
        backgroundColor: "#f5f8fa",
      }}
      display={"flex"}
      textAlign={"start"}
      justifyContent={"start"}
      height={"100%"}
      width={"100%"}
    >
      <Stack  sx={{ ml: "5rem", mt: "5rem", mb: "5rem" }} spacing={2}>
        <Box
          width={"50%"}
        //   border={"2px solid black"}
          borderRadius={"15px"}
          sx={{ backgroundColor: "white" }}
        >
          <Button fullWidth sx={{ color: "black" ,display:'flex',justifyContent:'start' , borderRadius:'15px' }}>
            <PercentIcon />
            <Typography  variant="h6" fontWeight={'bold'}>Enjoy 50% OFF in Our Summer Super Sale!</Typography>
          </Button>
        </Box>
        <Box width={"60%"}>
          <Typography variant="h2">
            Step into Fashion at Your Ultimate Style Destination!
          </Typography>
        </Box>
        <Box width={"50%"}>
          <Typography variant="h6" color={"grey"}>
            Explore a World of Fashion Possibilities with Exclusive Discounts -
            Dive into Your Ultimate Style Destination and Elevate Your Wardrobe
            Today!
          </Typography>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          width={"10%"}
        //   border={"2px solid black"}
          borderRadius={"15px"}
          sx={{ backgroundColor: "white" }}
        >
          <Button fullWidth sx={{borderRadius:'12px'}} onClick={handleShopNowClick}>
            Shop Now <ArrowRightAltIcon />
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};
export default LandingComponent;
