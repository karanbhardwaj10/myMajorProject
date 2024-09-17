/* eslint-disable no-unused-vars */
import CustomProductDetails from "../../Shared/Components/CustomProductDetails/CustomProductDetails";
import ResponsiveAppBar from "../../Shared/Components/HeaderComponent/Header";
import { useEffect } from "react";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSelectedProducts } from "./state/productActions";
import TermsAndConditions from "../../Shared/Components/TermsAndConditionsProducts/TermsAndConditions";

const ProductDetials = () => {
  const dispatch = useDispatch();
  const { loading, status, data } = useSelector(
    (state) => state.getSelectedProductSlice
  );
  const { id } = useParams();
  console.log("before use effect");

  useEffect(() => {
    // const prodId=localStorage.getItem('productId');
    if (id) {
      dispatch(getSelectedProducts(id)); 
    }
  
  }, [id]);
  return (
    <Box>
      <ResponsiveAppBar />

      <CustomProductDetails
        price={parseInt(data.price)}
        description={data.description}
        title={data.title}
        // ratingVal={
        //   data.rating ? parseInt(data.rating.toString().split(".")[0]) : 0
        // }
        discountedPercentage={JSON.stringify(data.discountPercentage)}
        img={data.images ? data.images[0] : ""}
        // precisionRatingVal={`0.+${parseInt(
        //   data.rating.toString().split(".")[1]?.charAt(0) || 0
        // )}`}
      />
      <TermsAndConditions />
    </Box>
  );
};
export default ProductDetials;
