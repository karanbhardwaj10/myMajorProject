import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";

const CustomProductCard = ({
  img,
  discountPercentage,
  imgHeight,
  imgWidth,
  boxHeight
}) => (
  <Box height={boxHeight}position={"relative"} display={'flex'} justifyContent={"center"} marginLeft="1px" marginTop="1px">
    <img
      height={imgHeight}
      width={imgWidth}
      src={img}
      alt="product"
      style={{ borderRadius: "10px" }}
    />
    <Box
      position="absolute"
      display={"flex"}
    
      top={10}
      left={10}
      bgcolor="white"
      padding="4px 8px"
      borderRadius="4px"
    >
      <Typography
        variant="caption"
        fontWeight="bold"
        color="green"
        fontFamily="poppins"
      >
        {discountPercentage}%Off
      </Typography>
    </Box>
  </Box>
);

CustomProductCard.propTypes = {
  img: PropTypes.string,
  discountPercentage: PropTypes.string,
  imgHeight: PropTypes.number,
  imgWidth: PropTypes.number,
  boxHeight:PropTypes.number
};
export default CustomProductCard;
