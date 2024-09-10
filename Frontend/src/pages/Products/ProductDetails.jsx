import CustomProductDetails from "../../Shared/Components/CustomProductDetails/CustomProductDetails";
import ResponsiveAppBar from "../../Shared/Components/HeaderComponent/Header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSelectedProducts } from "./state/productActions";

const ProductDetials = () => {
  const dispatch = useDispatch();
  const { loading, status, data } = useSelector(
    (state) => state.getSelectedProductSlice
  );
  const { id } = useParams();
  console.log("before use effect");
  
  useEffect(() => {
    if (id && status === "success" && data) {
      console.log("inside use effect");
      dispatch(getSelectedProducts(id));
      console.log(data,"data in product details");
      
    }
  }, [id, dispatch, status, data.rating]);
  console.log("after use effect");
  
  return (
    <div>
      <ResponsiveAppBar />

      <CustomProductDetails
        price={parseInt(data.price)}
        description={data.description}
        title={data.title}
        // ratingVal={
        //   data.rating ? parseInt(data.rating.toString().split(".")[0]) : 0
        // }
        img={data.images ? data.images[0] : ""}
        // precisionRatingVal={`0.+${parseInt(
        //   data.rating.toString().split(".")[1]?.charAt(0) || 0
        // )}`}
      />
    </div>
  );
};
export default ProductDetials;
