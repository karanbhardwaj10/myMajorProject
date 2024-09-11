import { Grid, Typography, Box } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ReplayIcon from "@mui/icons-material/Replay";
import PinDropIcon from "@mui/icons-material/PinDrop";

const webInfoData = [
  {
    name: "Secure Payments",
    description:
      "Shop with confidence knowing that your transactions are safeguarded.",
    IconComponent: LockIcon,
    path: "/SignIn",
  },
  {
    name: "Free Shipping",
    description:
      "Shopping with no extra charges – savor the liberty of complimentary shipping on every order.",
    IconComponent: LocalShippingIcon,
    path: "/SignUp",
  },
  {
    name: "Easy Returns",
    description:
      "With our hassle-free Easy Returns, changing your mind has never been more convenient.",
    IconComponent: ReplayIcon,
  },
  {
    name: "Order Tracking",
    description:
      "Stay in the loop with our Order Tracking feature - from checkout to your doorstep.",
    IconComponent: PinDropIcon,
  },
];

const WebInfo = () => (
  <Grid container justifyContent="center" spacing={4} sx={{ mt: 3, mb: 6 }}>
    {webInfoData.map((item, index) => (
      <Grid item xs={12} sm={6} md={3} key={index}>
        <Box textAlign="center">
          <item.IconComponent style={{ color: "black", fontSize: 40 }} />
          <Typography
            variant="h5"
            gutterBottom
            fontWeight="bold"
            fontStyle="italic"
            color="textPrimary"
          >
            {item.name}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {item.description}
          </Typography>
        </Box>
      </Grid>
    ))}
  </Grid>
);

export default WebInfo;
