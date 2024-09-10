import CustomProductView from "../../Shared/Components/CustomProductView/CustomProductView";
import { Container, Box } from "@mui/material";
import test8 from "../../assets/test8.jpg";
import test11 from "../../assets/test11.jpg";
import test12 from "../../assets/test12.jpg";
import { Link } from "react-router-dom";

const ProductType = () => {
  const products = [
    {
      title: "M e n",
      imgVal: test8,
      price: "Rs. " + 1999 + "*",
      path: "/men",
      discountPercentage: "Heavy Discounts",
      // isProduct: false,
    },
    {
      title: "W o m e n",
      imgVal: test11,
      price: "Rs. " + 2999 + "*",
      path: "/women",
      discountPercentage: "Heavy Discounts",
    },
    {
      title: "Coming Soon",
      imgVal: test12,
      price: "Rs. " + 3999 + "*",
      path: "/coming-soon",
      discountPercentage: "Heavy Discounts",
    },
  ];
  return (
    <Container
    id="ProductsTypes"
      maxWidth="xl"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        display={"flex"}
        flexDirection={"row"}
        width={"88%"}
        height={"640px"}
        justifyContent={"space-around"}
        alignItems={"start"}
      >
        {products.map((product, index) => (
          <Box key={index}>
            <Link
              to={product.path}
              style={{ textDecoration: "none", color: "black" }}
            >
              <CustomProductView
              imgHeight={550}
              imgWidth={390}
                discountPercentage={product.discountPercentage}
                title={product.title}
                imgVal={product.imgVal}
                price={product.price}
                isProduct={product.isProduct}
              />
            </Link>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default ProductType;
