import CustomProductView from "../../Shared/Components/customProductView/CustomProductView";
import { Grid, Container, Box } from "@mui/material";
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
      isProduct: true,
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
  console.log(products[1].imgVal);
  return (
    <Container  style={{ marginLeft: "250px" }}>
      {/* <h1>Product Type</h1> */}
      <Grid  container spacing={15} marginTop={2}>
        {products.map((product, index) => (
          <Grid
            display={"flex"}
            justifyContent={"start"}
            // flexDirection={"column"}
            style={{ padding: "0px" }}
            item
            xs={12}
            sm={7}
            md={6}
            lg={4}
            key={index}
          >
            <Box>
              <Link
                to={product.path}
                style={{ textDecoration: "none", color: "black" }}
              >
                <CustomProductView
                  discountPercentage={product.discountPercentage}
                  title={product.title}
                  imgVal={product.imgVal}
                  price={product.price}
                  isProduct={product.isProduct}
                />
              </Link>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default ProductType;
