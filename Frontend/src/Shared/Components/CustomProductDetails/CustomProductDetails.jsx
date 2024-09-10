// import fashionImage from "../../../assets/fashionImage.jpg";
import PropTypes from "prop-types";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";
import {
  Grid,
  Box,
  Button,
  Typography,
  Divider,
  IconButton,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Rating from "@mui/material/Rating";
import { getSelectedProducts } from "../../../pages/Products/state/productActions";
const CustomProductDetails = ({
  description,
  title,
  price,
  img,
  // precisionRatingVal,
  ratingVal,
  orderCount,
}) => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const { loading, status, singleProductData } = useSelector(
  //   (state) => state.getSelectedProductSlice
  // );
  // const { id } = useParams();
  // useEffect(() => {
  //   if (id) {
  //     console.log(singleProductData, "useeffect");
  //   }
  // }, [id, singleProductData]);
  // useEffect(() => {
  //   if (id) {
  //     console.log("inside customproductdetailsid");

  //     dispatch(getSelectedProducts(id));
  //     console.log("after dispatch");
  //   }
  // }, [id]);
  async function getSingledata() {
    const response = getSelectedProducts(1);
    console.log(response);
    // console.log(id, "this id is from params");
  }
  const sizeButtons = [
    { id: "xsSize", sizeName: "XS" },
    { id: "sSize", sizeName: "S" },
    { id: "mSize", sizeName: "M" },
    { id: "lSize", sizeName: "L" },
    { id: "xLSize", sizeName: "XL" },
    { id: "xxLSize", sizeName: "XXL" },
  ];
  return (
    <Box>
      <Grid
        container
        maxWidth="xxl"
        style={{ marginTop: "5rem" }}
        spacing={2}
        overflow={"hidden"}
      >
        <Grid
          item
          xs={5}
          // style={{ border: "2px solid black" }}
        >
          <Box
            width={"100%"}
            height={"600px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <img
              src={img}
              alt="SignUp Page"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            flexDirection={"column"}
            width={"100%"}
            height={"600px"}
            display={"flex"}
            justifyContent={"space-evenly"}
          >
            <Typography
              width={"900px"}
              display={"flex"}
              justifyContent={"start"}
              variant="h3"
              fontFamily={"ember"}
            >
              {title}
            </Typography>
            <Typography variant="h6" fontFamily={"ember"} color={"grey"}>
              {description}
            </Typography>
            <Box
              marginTop={"1rem"}
              display={"flex"}
              justifyContent={"space-evenly"}
              width={"35%"}
              margin={"10px 10px 10px 10px"}
            >
              <Typography variant="h5">₹ {price}</Typography>
              <Typography
                variant="h5"
                sx={{ textDecoration: "line-through", color: "grey" }}
              >
                ₹ {price}
              </Typography>
              <Typography variant="h5" color={"green"}>
                (58% Off)
              </Typography>
            </Box>
            <Typography variant="h5" style={{ marginLeft: "15px" }}>
              Select Size
            </Typography>
            <Divider />
            <Box
              display="flex"
              flexDirection="row"
              width="70%"
              justifyContent="start"
              gap={"30px"}
              margin={"10px 10px 10px 10px"}
            >
              {sizeButtons.map(({ id, sizeName }) => (
                <Button
                  key={id}
                  sx={{
                    border: "2px solid black",
                    borderRadius: "50%",
                    width: "50px", // Use a fixed width for consistency
                    height: "50px", // Increase height here
                    minWidth: "unset", // Prevents the button from expanding based on text length
                  }}
                >
                  {sizeName}
                </Button>
              ))}
            </Box>
            <Box display={"flex"}>
              <Rating
                name="half-rating"
                readOnly
                defaultValue={ratingVal}
                // precision={precisionRatingVal}
              />
              <Typography sx={{ ml: 2 }}>{orderCount}</Typography>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"space-evenly"}
              width={"60%"}
              gap={"30px"}
              margin={"10px 10px 10px 10px"}
            >
              <Button
                sx={{
                  display: "flex",
                  width: "90%",
                  border: "2px solid black",
                  color: "black",
                  backgroundColor: "#005685",
                  justifyContent: "center",
                  "&:hover":{backgroundColor:'#005685'}
                }}
              >
                <Box sx={{mt:'10px',mr:'5px'}} color={'white'}>
                  <AddShoppingCartIcon />
                </Box>
                <Typography color={'white'}>Add to cart</Typography>
              </Button>

              <Button
                sx={{
                  display: "flex",
                  width: "90%",
                  color: "black",
                  backgroundColor: "white",
                  border: "1px solid black",
                  justifyContent: "center",
                }}
              >
                <Box sx={{mt:'10px',mr:'5px'}} color="red">
                  <FavoriteBorderIcon />
                </Box>
                <Typography>Add to Wishlist</Typography>
              </Button>
            </Box>
            <Divider />
            <Typography onClick={getSingledata}>T&C</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
CustomProductDetails.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.number,
  precisionRatingVal: PropTypes.number,
  ratingVal: PropTypes.number,
  orderCount: PropTypes.string,
};

export default CustomProductDetails;
