import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMaleProducts } from "./features/MenProductSlice/getAllMensProductSlice";
import { Button, Box, Pagination } from "@mui/material";
import CustomProductView from "../../Shared/Components/CustomProductView/CustomProductView";
import { useNavigate } from "react-router-dom";
import { getSelectedMaleProduct } from "./state/menProductActions";
import ResponsiveAppBar from "../../Shared/Components/HeaderComponent/Header";

const MenProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const handlePage = (page) => {
    setPage(page);
    console.log(page, "page value");
    dispatch(getAllMaleProducts(page));
  };
  const { loading, totalProducts, status, productData } = useSelector(
    (state) => state.maleProductSlice
  );

  async function getProductDetials(id, title) {
    console.log(id, "getproduct details");
    dispatch(getSelectedMaleProduct(id));
    localStorage.setItem("productId", id);
    navigate(`/product/${id}/${title}`);
  }
  useEffect(() => {
    console.log("Product state changed:", productData, "staus", status);
    console.log("useEffect triggered. Page:", page, "Status:", status);
    if (status !== 200 && page) {
      dispatch(getAllMaleProducts(page));
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
        {/* {!loading && JSON.stringify(productData)} */}
        {productData.length > 0 &&
          productData.map(
            (
              {
                id,
                title,
                images,
                discounted_price,
                price,
                discountPercentage,
                brand,
                rating,
              },
              index
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
          count={totalProducts}
        />
      </Box>
    </Box>
  );
};

export default MenProducts;
