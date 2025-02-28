/* eslint-disable no-unused-vars */
import CustomProductDetails from "../../Shared/Components/CustomProductDetails/CustomProductDetails";
import ResponsiveAppBar from "../../Shared/Components/HeaderComponent/Header";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSelectedMaleProduct } from "./state/menProductActions";
import TermsAndConditions from "../../Shared/Components/TermsAndConditionsProducts/TermsAndConditions";
import Footer from "../../Shared/Components/FooterComponent/Footer";

const SelectedMaleProductDetails = () => {
  const dispatch = useDispatch();
  const { loading, status, data } = useSelector(
    (state) => state.getSelectedMaleProductlice
  );
  const { id } = useParams();
  console.log("before use effect");
  const [maleProductDescriptoon, setMaleProductDescriptoon] = useState({});
  function getPriceOfProduct(size) {
    console.log("add to cart clicked", size, data.id);
    localStorage.setItem("productIds",[]);
    const getlength=localStorage.getItem("productIds");
    console.log(getlength.length);
    
    setMaleProductDescriptoon({
      price: data.discounted_price,
      sizeSelected: size,
    });
  }
  useEffect(() => {
    // const prodId=localStorage.getItem('productId');
    if (id) {
      dispatch(getSelectedMaleProduct(id));
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
      <Box marginTop={4}>

      <Footer/>
      </Box>
    </Box>
  );
};
export default SelectedMaleProductDetails;
