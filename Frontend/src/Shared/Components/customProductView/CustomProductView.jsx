import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import CustomProductCard from "../CustomProductCard/CustomProductCard";
import "../../Styles/ProductTypeStyle.css";

const CustomProductView = ({
  title,
  imgVal,
  price,
  discountPercentage,
  imgHeight,
  discountedPrice,
  imgWidth,
  //boxHeight,
   brandName,
  isProduct,
  productRating
}) => {
  const commonCardProps = {
    img: imgVal,
    discountPercentage,
    imgHeight: imgHeight,
    imgWidth: imgWidth,
    //boxHeight:boxHeight
  };
function calculateDiscountedPrice(price,discountPercentage){
  discountedPrice = price - (price * (discountPercentage / 100));
  return discountedPrice.toFixed(2);
}
  return (
    <Box my={4}>
      {!isProduct ? (
        <Grid className="zoomProductType">
          <CustomProductCard
            boxHeight={400}
            img={imgVal}
            discountPercentage={discountPercentage}
            imgHeight={imgHeight}
            imgWidth={imgWidth}
          />

          <Box display="flex" position={"relative"} justifyContent="center">
            <Typography
              marginRight={5}
              fontSize={"50px"}
              fontFamily={"poppins"}
            >
              {title}
            </Typography>
          </Box>
        </Grid>
      ) : (
        <Box>
          <Grid height={350} width={290}>
            <CustomProductCard {...commonCardProps} />
          </Grid>
          <Box>
            <Box display="flex" justifyContent="start">
              <Typography fontSize={"30px"} fontFamily={"poppins"}>
                {title}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="start">
              <Typography
                fontSize={"20px"}
                color={"grey"}
                fontWeight={"bold"}
                fontFamily={"poppins"}
              >
                {brandName}
              </Typography>
              <Typography
                marginLeft={"5px"}
                fontSize={"20px"}
                color={"black"}
                fontWeight={"bold"}
                fontFamily={"poppins"}
              >
                {productRating}
              </Typography>
              
            </Box>
            <Box display="flex" justifyContent="start">
              <Typography fontWeight={"bold"} fontSize={"20px"}>
              ₹  {calculateDiscountedPrice(price,discountPercentage)}
              </Typography>
              <Typography
                fontSize={"20px"}
                color={"grey"}
                marginLeft={"5px"}
                sx={{ textDecoration: "line-through" }}
              >
               ₹   {price}
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};
CustomProductView.propTypes = {
  title: PropTypes.string,
  imgVal: PropTypes.string,
  price: PropTypes.string,
  // boxHeight:PropTypes.number,
  imgHeight: PropTypes.number,
  discountedPrice: PropTypes.string,
  imgWidth: PropTypes.number,
  discountPercentage: PropTypes.string,
  brandName: PropTypes.string,
  isProduct: PropTypes.bool,
  productRating:PropTypes.string,
};
export default CustomProductView;
