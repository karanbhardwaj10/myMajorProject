import {
  Box,
  Card,
  Checkbox,
  Input,
  Button,
  Typography,
} from "@mui/material";
import Product from "./Product.jpg";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import WhereToVoteIcon from "@mui/icons-material/WhereToVote";
import { useState } from "react";
const CustomCartItem = () => {
  const [quantity, setQuantity] = useState(0);
  const productDescription = [
    [
      {
        id: "description",
        value: ` JBL Tune 770NC Wireless Over Ear ANC Headphones with Mic, Upto
                70 Hrs Playtime, Speedcharge, Google Fast Pair, Dual Pairing, BT
                5.3 LE Audio, Customize on Headphones App (Black)`,
      },
    ],
    [{ id: "stockAvailability", value: "InStock" }],
    [
      {
        id: "deliveryAvailability",
        value: "Can be delivered to your location ",
      },
    ],
  ];
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
              src={Product}
              alt="product img"
            />
          </Box>
          <Box
            width={"60%"}
            display="flex"
            flexDirection="column"
            justifyContent="start"
            paddingLeft={2}
          >
            {productDescription.map((typoRow) => (
              <div key={typoRow[0].id}>
                {typoRow[0].id === "deliveryAvailability" ||
                typoRow[0].id === "stockAvailability" ? (
                  <Typography marginTop={"5px"}>
                    {typoRow[0].value}
                    <Button sx={{ paddingLeft: "0px" }}>
                      <WhereToVoteIcon htmlColor="green" />
                    </Button>
                  </Typography>
                ) : (
                  <Typography
                    marginTop={2}
                    fontWeight={"400"}
                    lineHeight={"23px"}
                    fontStyle={"normal"}
                    fontFamily={"sans-serif"}
                    fontSize={"15px"}
                    color={"#0f1111"}
                  >
                    {typoRow[0].value}
                  </Typography>
                )}
              </div>
            ))}

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
              ₹ 7500
            </Typography>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default CustomCartItem;
