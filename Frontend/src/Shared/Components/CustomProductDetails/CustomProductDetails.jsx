import PropTypes from "prop-types";
import { Box, Button, Typography, Divider } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import Rating from "@mui/material/Rating";

const CustomProductDetails = ({
  description,
  title,
  price,
  img,
  // ratingVal,
  // orderCount,
  discountedPrice,
  //discountedPercentage,
}) => {
  // async function getSingledata() {
  //   const response = getSelectedMaleProduct(1);
  //   console.log(response);
  // }

  function calculateDiscountPercentage(originalPrice, discountedPrice) {
    const discountPercentage =
      ((originalPrice - discountedPrice) / originalPrice) * 100;
    return discountPercentage.toFixed(2); // Return the percentage with 2 decimal places
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
    <>
      <Box
        display="flex"
        flexDirection="column"
        marginTop="3rem"
        padding="16px 16px 16px 0px"
      >
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          marginBottom="2rem"
        >
          {/* Product Image */}
          <Box
            width={{ xs: "100%", md: "40%" }}
            height={{ xs: "300px", md: "600px" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <img
              src={img}
              alt="Product"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "cover",
              }}
            />
          </Box>

          {/* Product Details */}
          <Box
            width={{ xs: "80%", md: "50%" }}
            padding="16px"
            display="flex"
            flexDirection="column"
            justifyContent="space-evenly"
          >
            <Typography variant="h3" fontFamily="ember">
              {title}
            </Typography>
            <Typography variant="h6" fontFamily="ember" color="grey">
              {description}
            </Typography>

            {/* Price Section */}
            <Box
              display="flex"
              // justifyContent="space-between"
              margin={"10px"}
              marginTop="1rem"
              width={{ xs: "100%", md: "45%" }}
            >
              <Typography variant="h5" sx={{ mr: 2 }}>
                ₹ {discountedPrice}
              </Typography>

              <Typography
                variant="h5"
                sx={{ textDecoration: "line-through", color: "grey", mr: 2 }}
              >
                ₹{price}
              </Typography>

              <Typography variant="h5" color="green">
                {calculateDiscountPercentage(price, discountedPrice)}% Off
              </Typography>
            </Box>

            {/* Size Selection */}
            <Typography variant="h5" marginTop="1rem">
              Select Size
            </Typography>
            <Divider />
            <Box
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              justifyContent="start"
              gap="10px"
              margin="10px 0"
            >
              {sizeButtons.map(({ id, sizeName }) => (
                <Button
                  key={id}
                  sx={{
                    border: "2px solid black",
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    minWidth: "unset",
                  }}
                >
                  {sizeName}
                </Button>
              ))}
            </Box>

            {/* Rating and Order Count */}
            {/* <Box margin={"10px"} display="flex" alignItems="center">
              <Rating name="read-only" readOnly value={ratingVal} />
              <Typography sx={{ ml: 2 }}>{orderCount}</Typography>
            </Box> */}

            {/* Action Buttons */}
            <Box
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              justifyContent="space-between"
              gap="10px"
              marginTop="1rem"
            >
              <Button
                sx={{
                  display: "flex",
                  width: "100%",
                  border: "2px solid black",
                  color: "black",
                  backgroundColor: "#005685",
                  "&:hover": { backgroundColor: "#005685" },
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AddShoppingCartIcon sx={{ color: "white", mr: 1 }} />
                <Typography color="white">Add to cart</Typography>
              </Button>

              <Button
                sx={{
                  display: "flex",
                  width: "100%",
                  color: "black",
                  backgroundColor: "white",
                  border: "1px solid black",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FavoriteBorderIcon sx={{ color: "red", mr: 1 }} />
                <Typography>Add to Wishlist</Typography>
              </Button>
            </Box>

            <Divider sx={{ marginTop: "1rem" }} />
            <Typography
              // onClick={getSingledata}
              sx={{ cursor: "pointer", marginTop: "1rem" }}
            >
              T&C
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

CustomProductDetails.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.number,
  ratingVal: PropTypes.number,
  orderCount: PropTypes.string,
  discountedPrice: PropTypes.number,
  discountedPercentage: PropTypes.string,
};

export default CustomProductDetails;
