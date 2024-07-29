import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
const CustomProductView = ({ title, img, price }) => (
  <Box my={4}>
    <Grid  marginLeft={0}  height={550} width={450}>
      <Box height={400} marginLeft={"1px"} marginTop={"1px"} width={390}>
        <img
          height={550}
          width={390}
          src={img}
          alt="Hi"
          style={{ borderRadius: "10px"   }}
        />
      </Box>
      <Box display="flex" justifyContent="center">
        <Typography fontSize={"50px"} fontFamily={"poppins"}>
          {" "}
          {title}
        </Typography>
      </Box>
      <Box marginLeft={"10px"}>
        <Typography fontSize={"25px"}> {price}</Typography>
      </Box>
    </Grid>
  </Box>
);
CustomProductView.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.number,
};
export default CustomProductView;
