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
  imgWidth,
  //boxHeight,
  // brandName,
  isProduct,
}) => {
  const commonCardProps = {
    img: imgVal,
    discountPercentage,
    imgHeight: imgHeight,
    imgWidth: imgWidth,
    //boxHeight:boxHeight
  };

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
        < Box>
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
                H&M
              </Typography>
              <Typography
                marginLeft={"5px"}
                fontSize={"20px"}
                color={"black"}
                fontWeight={"bold"}
                fontFamily={"poppins"}
              >
                4.8
              </Typography>
            </Box>
            <Box display="flex" justifyContent="start">
              <Typography fontWeight={"bold"} fontSize={"20px"}>
                {price}
              </Typography>
              <Typography fontSize={"20px"} color={"grey"} marginLeft={"5px"}>
                DiscountedPrice
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
  imgHeight:PropTypes.number,
  imgWidth:PropTypes.number,
  discountPercentage: PropTypes.string,
  brandName: PropTypes.string,
  isProduct: PropTypes.bool,
};
export default CustomProductView;
