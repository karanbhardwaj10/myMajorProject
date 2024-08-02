import { Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

const CustomPriceDetails = () => {
  const priceFields = [
    { title: "Total MRP" },
    { title: "Discounted on MRP" },
    { title: "Coupon Discount" },
    { title: "Shipping Fee" },
  ];
  const priceFieldsVal = [
    { price: "₹ 2589" },
    { price: "₹ -1430" },
    { price: "₹ -179" },
    { price: "Free" },
  ];
  return (
    <Box width={500} border={"1px solid grey"} padding={2}>
      <Typography variant="h5" fontWeight={"bold"}>
        Price Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          {priceFields.map((titlefields, index) => (
            <Typography
              color={"grey"}
              fontFamily={"poppins"}
              padding={2}
              key={index}
            >
              {titlefields.title}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={3}>
          {priceFieldsVal.map((priceFields, index) => (
            <Typography padding={2} key={index}>
              {priceFields.price}
            </Typography>
          ))}
        </Grid>
        {/* Grid better approach because it provides more control over each coloumn */}
        <Box padding={2} width="100%">
          <Divider orientation="horizontal" flexItem />
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography fontWeight={"bold"} variant="h6" padding={2}>
              Total Amount
            </Typography>
            <Typography padding={2} fontWeight={"bold"} marginRight={2}>
              ₹ 3759
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Button
        style={{
          width: "90%",
          marginLeft: "10px",
          backgroundColor: "#1b2833","&:hover": { backgroundColor: "#2c3e50" },
        }}
        type="submit"
        variant="contained"
      >
        Confirm Payment
      </Button>
    </Box>
  );
};
export default CustomPriceDetails;
// import { Box, Typography, Button, Grid, Divider } from "@mui/material";

// const CustomPriceDetails = () => {
//   const priceDetails = [
//     { title: "Total MRP", price: "₹ 2589" },
//     { title: "Discounted on MRP", price: "₹ -1430" },
//     { title: "Coupon Discount", price: "₹ -179" },
//     { title: "Shipping Fee", price: "Free" },
//   ];

//   const totalAmount = "₹ 3759";

//   return (
//     <Box width={500} border="1px solid grey" padding={2}>
//       <Typography variant="h5" fontWeight="bold" gutterBottom>
//         Price Details
//       </Typography>
//       <Grid container spacing={2}>
//         {priceDetails.map(({ title, price }, index) => (
//           <Grid item container key={index}>
//             <Grid item xs={9}>
//               <Typography color="grey" fontFamily="poppins">
//                 {title}
//               </Typography>
//             </Grid>
//             <Grid item xs={3}>
//               <Typography>{price}</Typography>
//             </Grid>
//           </Grid>
//         ))}
//         <Grid item xs={12}>
//           <Divider />
//           <Box display="flex" justifyContent="space-between" mt={2}>
//             <Typography fontWeight="bold" variant="h6">
//               Total Amount
//             </Typography>
//             <Typography fontWeight="bold">{totalAmount}</Typography>
//           </Box>
//         </Grid>
//       </Grid>
//       <Button
//         fullWidth
//         sx={{
//           mt: 2,
//           backgroundColor: "#1b2833",
//           "&:hover": { backgroundColor: "#2c3e50" },
//         }}
//         variant="contained"
//       >
//         Confirm Payment
//       </Button>
//     </Box>
//   );
// };

// export default CustomPriceDetails;