import CustomProductView from "../../Shared/Components/CustomProductView";
import { Grid, Container } from "@mui/material";
import test8 from "../../assets/test8.jpg";
import test11 from "../../assets/test11.jpg";
import test12 from "../../assets/test12.jpg";
import "./ProductTypeStyle.css";
const ProductType = () => {
  const products = [
    { title: "M e n", img: test8, price: "Rs" + 1999 + "*" },
    { title: "W o m e n", img: test11, price: 2499 },
    { title: "Coming Soon", img: test12, price: 1799 },
  ];
  return (
    <Container>
      {/* <h1>Product Type</h1> */}
      <Grid  container spacing={10}>
        {products.map((product, index) => (
          <Grid
            display={"flex"}
            justifyContent={"space-between"}
            className="zoomProductType"
            item
            xs={12}
            sm={7}
            md={6}
            lg={4}
            key={index}
          >
            <CustomProductView
              title={product.title}
              img={product.img}
              //   price={product.price}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default ProductType;
