import {
  Box,
  Grid,
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
      alignItems={"cneter"}
      width={'58rem'}
      marginTop={5}
      height={"15rem"}
      marginLeft={2}
    >
      <Card>
        <Grid item container spacing={2} columns={18}>
          <Grid item xs={1}>
            <Box height={"13rem"} display={"flex"} alignItems={"center"}>
              <Checkbox defaultChecked size="large" />
            </Box>
          </Grid>
          <Grid item xs={5}>
            <Box marginTop={"5px"}>
              <img
                style={{
                  // border: "1px solid black",
                  maxHeight: "200px",
                  width: "auto",
                }}
                src={Product}
                alt="product img"
              />
            </Box>
          </Grid>
          <Grid item xs={10}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="start"
              height="100%"
            >
              {productDescription.map((typoRow) => {
                return (
                  <div key={typoRow[0].id}>
                    {typoRow[0].id === "deliveryAvailability" ||
                    typoRow[0].id === "stockAvailability" ? (
                      <Typography marginTop={'5px'}>
                        {typoRow[0].value}
                        <Button sx={{paddingLeft:'0px'}}>
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
                );
              })}
              <Box
                marginRight={5}
                display={"flex"}
                justifyContent={"start"}
                alignItems={"start"}
              >
                {/* <Button
                size="small"
                  onClick={() => {
                    quantity === 0 ? setQuantity(0) : setQuantity(quantity - 1);
                  }}
                > */}
                <RemoveIcon
                  sx={{ margin: "6px 6px 6px 0px" }}
                  onClick={() => {
                    quantity === 0 ? setQuantity(0) : setQuantity(quantity - 1);
                  }}
                />
                {/* </Button> */}
                <Input
                  id="outlined-basic"
                  label="Qty."
                  variant="outlined"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& .MuiInputBase-input": {
                      textAlign: "center",
                      fontWeight:'bold',
                      fontFamily:'sans',
                      // color:'#005685' // Centers the text horizontally
                    },
                    height: "30px",
                    width: "40px", // Adjust the height as needed
                  }}
                  //   InputProps={{
                  //     sx: ,
                  //   }}
                  value={quantity}
                  onChange={async (e) => {
                    setQuantity(e.target.value);
                    console.log(quantity, "qty");
                  }}
                />
                {/* <Button
                  onClick={() => {
                    setQuantity(quantity + 1);
                  }}
                > */}
                <AddIcon
                  sx={{ margin: "6px" }}
                  onClick={() => {
                    setQuantity(quantity + 1);
                  }}
                />
                {/* </Button> */}
              </Box>
              {/* You can add more product details here */}
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box
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
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};
export default CustomCartItem;
