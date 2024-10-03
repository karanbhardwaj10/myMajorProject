/* eslint-disable no-unused-vars */
import CustomProductDetails from "../../Shared/Components/CustomProductDetails/CustomProductDetails";
import ResponsiveAppBar from "../../Shared/Components/HeaderComponent/Header";
import { useEffect } from "react";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { getSelectedMaleProduct } from "./state/menProductActions";
import TermsAndConditions from "../../Shared/Components/TermsAndConditionsProducts/TermsAndConditions";
import { getSelectedFemaleProduct } from "./state/womenProductActions";

const SelectedFemaleProductDetails = () => {
  const dispatch = useDispatch();
  const { loading, status, data } = useSelector(
    (state) => state.getSelectedMaleProductlice
  );
  const { id } = useParams();
  console.log("before use effect");
  function getPriceOfProduct(size) {
    console.log("add to cart clicked",size,data.discounted_price);
    
  }
  useEffect(() => {
    // const prodId=localStorage.getItem('productId');
    if (id) {
      dispatch(getSelectedFemaleProduct(id));
    }
    if (data.length !== 0) {
      console.log(data.price, "daata after != condition");

      //  const rating= parseInt(data.rating.toString().split(".")[0])
      //  console.log(rating,"useEffect ratinf");
    }
  }, [id, status]);
  return (
    <Box>
      <ResponsiveAppBar />

      <CustomProductDetails
        price={parseInt(data.price)}
        description={data.description}
        title={data.title}
        discountedPrice={data.discounted_price}
        handleAddToCart={getPriceOfProduct}
        // ratingVal={
        //   status ===200 || data.rating ? parseInt(data.rating.toString().split(".")[0]) : 0
        // }
        discountedPercentage={JSON.stringify(data.discountPercentage)}
        img={data.images ? JSON.parse(data.images)[0] : ""}
        // precisionRatingVal={`0.+${parseInt(
        //   status ===200 || data.rating.toString().split(".")[1]?.charAt(0) || 0
        // )}`}
      />
      <TermsAndConditions />
    </Box>
  );
};
export default SelectedFemaleProductDetails;
