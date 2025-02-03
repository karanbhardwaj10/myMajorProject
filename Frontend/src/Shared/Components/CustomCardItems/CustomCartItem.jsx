import {
  Box,
  Card,
  Checkbox,
  Input,
  Button,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import WhereToVoteIcon from "@mui/icons-material/WhereToVote";
import { useState } from "react";

const CustomCartItem = ({
  description,
  images,
  price,
}) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      marginTop={5}
    >
      <Card sx={{ width: "92%", height: "15rem" }}>
        <Box display="flex" alignItems="center" height="100%">
          {/* Checkbox */}
          <Box width={"5%"} display={"flex"} alignItems={"center"}>
            <Checkbox defaultChecked size="large" />
          </Box>

          {/* Image Section */}
          <Box width={"20%"} display={"flex"} justifyContent={"center"}>
            <img
              style={{
                maxHeight: "200px",
                width: "auto",
              }}
              src={images}
              alt="product img"
            />
          </Box>

          {/* Description Section */}
          <Box
            width={"60%"}
            display="flex"
            flexDirection="column"
            justifyContent="start"
            paddingLeft={2}
          >
            {/* Product Description */}
            <Typography
              marginTop={2}
              fontWeight={"400"}
              lineHeight={"23px"}
              fontStyle={"normal"}
              fontFamily={"sans-serif"}
              fontSize={"15px"}
              color={"#0f1111"}
            >
              {description}
            </Typography>

            {/* Stock Availability */}
            <Typography marginTop={"5px"}>
              Stock Availability
              <Button sx={{ paddingLeft: "0px" }}>
                <WhereToVoteIcon htmlColor="green" />
              </Button>
            </Typography>

            {/* Delivery Availability */}
            <Typography marginTop={"5px"}>
              Delivery Availability
              <Button sx={{ paddingLeft: "0px" }}>
                <WhereToVoteIcon htmlColor="green" />
              </Button>
            </Typography>

            {/* Quantity Section */}
            <Box display="flex" alignItems="center" marginTop={2}>
              <RemoveIcon
                sx={{ marginRight: 1 }}
                onClick={() => {
                  setQuantity(quantity === 0 ? 0 : quantity - 1);
                }}
              />
              <Input
                id="outlined-basic"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                  width: "40px",
                  height: "30px",
                  "& .MuiInputBase-input": {
                    textAlign: "center",
                  },
                }}
              />
              <AddIcon
                sx={{ marginLeft: 1 }}
                onClick={() => {
                  setQuantity(quantity + 1);
                }}
              />
            </Box>
          </Box>

          {/* Price Section */}
          <Box
            width={"15%"}
            display="flex"
            justifyContent="center"
            alignItems="center"
            height={"100%"}
          >
            <Typography
              fontWeight="bold"
              fontFamily={"poppins"}
              fontSize={"20px"}
            >
              ₹ {price}
            </Typography>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

CustomCartItem.propTypes = {
  description: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discountedPrice: PropTypes.number,
  discountedPercentage: PropTypes.string,
  handleAddToCart: PropTypes.func,
};

export default CustomCartItem;
