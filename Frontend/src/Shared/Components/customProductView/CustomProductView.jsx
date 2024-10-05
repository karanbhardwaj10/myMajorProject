import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { Typography, Rating } from "@mui/material";
import Grid from "@mui/material/Grid2";
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
  brandName,
  isProduct,
  productRating,
}) => {
  const commonCardProps = {
    img: imgVal,
    discountPercentage,
    imgHeight: imgHeight,
    imgWidth: imgWidth,
  };

  return (
    <Box my={4} position="relative">
      {!isProduct ? (
        <Grid
          container
          className="zoomProductType"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid xs={12} sm={8} md={6} lg={4} position="relative">
            <CustomProductCard {...commonCardProps} boxHeight={540} />
            <Box
              position="absolute"
              bottom={0}
              left={0}
              right={0}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                fontSize={{ xs: "24px", sm: "40px", md: "50px" }}
                fontFamily="poppins"
                color="black"
                textAlign="center"
              >
                {title}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      ) : (
        <Grid container direction="column" alignItems="start" spacing={2}>
          <Grid>
            <CustomProductCard {...commonCardProps} />
          </Grid>
          <Grid>
            <Typography
              fontSize={{ xs: "18px", sm: "24px", md: "20px" }}
              fontFamily={"poppins"}
            >
              {title}
            </Typography>
          </Grid>
          <Grid>
            <Box display="flex" alignItems="center" marginLeft={"5px"}>
              <Typography
                fontSize={{ xs: "14px", sm: "18px", md: "20px" }}
                color="grey"
                fontWeight="bold"
                fontFamily="poppins"
              >
                {brandName}
              </Typography>
              <Rating
                max={1}
                name="read-only"
                readOnly
                value={productRating}
                sx={{ ml: 2, mt: "3px" }}
              />
              <Typography
                fontSize={{ xs: "14px", sm: "18px", md: "20px" }}
                color="black"
                fontWeight="bold"
                fontFamily="poppins"
                ml={1}
              >
                {productRating}
              </Typography>
            </Box>
          </Grid>
          <Grid>
            <Box display="flex" alignItems="center">
              <Typography
                fontWeight="bold"
                fontSize={{ xs: "16px", sm: "18px", md: "20px" }}
              >
                ₹ {discountedPrice}
              </Typography>
              <Typography
                fontSize={{ xs: "14px", sm: "18px", md: "20px" }}
                color="grey"
                ml={1}
                sx={{ textDecoration: "line-through" }}
              >
                ₹ {price}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

CustomProductView.propTypes = {
  title: PropTypes.string,
  imgVal: PropTypes.string,
  price: PropTypes.string,
  imgHeight: PropTypes.number,
  discountedPrice: PropTypes.number,
  imgWidth: PropTypes.number,
  discountPercentage: PropTypes.string,
  brandName: PropTypes.string,
  isProduct: PropTypes.bool,
  productRating: PropTypes.number,
};

export default CustomProductView;
