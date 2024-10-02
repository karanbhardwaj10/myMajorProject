import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFemaleProducts } from "./features/WomenProducSlice/getAllWomenProductSlice";
import { Button, Box, Pagination } from "@mui/material";
import CustomProductView from "../../Shared/Components/CustomProductView/CustomProductView";
import { useNavigate } from "react-router-dom";
import ResponsiveAppBar from "../../Shared/Components/HeaderComponent/Header";
import { getSelectedFemaleProduct } from "./state/womenProductActions";

const FemaleProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const handlePage = (page) => {
    setPage(page);
    console.log(page, "page value");
    dispatch(getAllFemaleProducts(page));
  };
  const {  totalWomenProducts, status, womenProductData } = useSelector(
    (state) => state.womenProductSlice
  );

  async function getProductDetials(id, title) {
    console.log(id, "getproduct details");
    dispatch(getSelectedFemaleProduct(id));
    localStorage.setItem("productId", id);
    navigate(`/product/${id}/${title}`);
  }
  useEffect(() => {
    console.log("Product state changed:", womenProductData, "staus", status);
    console.log("useEffect triggered. Page:", page, "Status:", status,'totalProducts',totalWomenProducts);
    if (status !== 200 && page) {
      dispatch(getAllFemaleProducts(page));
    }
  }, [status, page]);
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ResponsiveAppBar />

      <Box
        display={"flex"}
        width={"70%"}
        flexWrap={"wrap"}
        justifyContent="space-between"
        gap={1}
        marginTop={2}
      >
        {/* {!loading && JSON.stringify(womenProductData)} */}
        {womenProductData.length > 0 &&
          womenProductData.map(
            (
              {
                id,
                title,
                images,
                discounted_price,
                price,
                discountPercentage,
                brand,
             
              },
              
            ) => (
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
                    discountPercentage={JSON.stringify(discountPercentage)}
                    title={title}
                    brandName={brand}
                    //productRating={JSON.parse(rating.toFixed(1))}
                    //  productRating={JSON.stringify(rating.split('.')[1])}
                    discountedPrice={discounted_price}
                    imgVal={JSON.parse(images)[0]}
                    // discountedPrice={JSON.stringify(discountPercentage)}
                    price={JSON.stringify(price)}
                    isProduct={true}
                  />
                </Button>
              </Box>
            )
          )}
      </Box>
      <Box marginBottom={"20px"}>
        <Pagination
          onChange={(event, value) => handlePage(value)}
          count={totalWomenProducts}
        />
      </Box>
    </Box>
  );
};

export default FemaleProducts;
