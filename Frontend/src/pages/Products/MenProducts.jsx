import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./features/productSlice";
import { Button, Box, Typography } from "@mui/material";
import CustomProductView from "../../Shared/Components/CustomProductView/CustomProductView";
import { useNavigate } from "react-router-dom";
import { getSelectedProducts } from "./state/productActions";

const MenProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, status, productData } = useSelector(
    (state) => state.productSlice
  );

  async function getProductDetials(id, title) {
    console.log(id, "getproduct details");
    dispatch(getSelectedProducts(id));
    navigate(`/product/${id}/${title}`);
  }
  useEffect(() => {
    console.log("Product state changed:", productData, "staus", status);
    if (status !== 200) {
      dispatch(getProducts());
    }
  }, [loading, status, productData, dispatch]);
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>Men Products Page</h2>

      <Box
        display={"flex"}
        width={"70%"}
        flexWrap={"wrap"}
        justifyContent="space-between"
        gap={1}
        marginTop={2}
      >
        {/* {!loading && JSON.stringify(productData)} */}
        {productData.length > 0 &&
          productData.map(({ id, title, images, price }, index) => (
            <Box
              key={id}
              flexBasis="calc(25% - 16px)" // Each item will take 25% width minus the gap
              display="flex"
              justifyContent="center"
              onClick={() => {
                getProductDetials(id, title);
              }}
            >
              <Button>
                <CustomProductView
                  imgHeight={350}
                  imgWidth={320}
                  discountPercentage={"50% Off"}
                  title={title}
                  imgVal={images[0]}
                  price={JSON.stringify(price)}
                  isProduct={true}
                />
              </Button>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default MenProducts;
