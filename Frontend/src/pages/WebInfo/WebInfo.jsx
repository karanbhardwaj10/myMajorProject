import { Grid, Typography } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ReplayIcon from "@mui/icons-material/Replay";
import PinDropIcon from "@mui/icons-material/PinDrop";
const WebInfo = () => {
  return (
    <>
      <Grid>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "10px",

              marginBottom: "50px",
            }}
          >
            <Grid item xs={3}>
              <Typography
                align="center"
                color={"grey"}
                variant="h5"
                gutterBottom
              >
                <LockIcon style={{color:'black'}} />
              </Typography>
              <Typography
                align="center"
                color={"grey"}
                variant="h5"
                gutterBottom
                fontWeight="bold"
                fontStyle="italic"
                style={{color:'black'}}
              >
                Secure Payments
              </Typography>
              <Typography
                align="center"
                paragraph="true"
                color={"grey"}
                variant="h7"
                gutterBottom
              >
                Shop with confidence knowing that your transactions are
                safeguarded.
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography
                align="center"
                color={"grey"}
                variant="h5"
                gutterBottom
              >
                <LocalShippingIcon  style={{color:'black'}} />
              </Typography>
              <Typography
                align="center"
                color={"grey"}
                variant="h5"
                gutterBottom
                fontWeight="bold"
                fontStyle="italic"
                style={{color:'black'}}
              >
                Free Shipping
              </Typography>
              <Typography
                align="center"
                color={"grey"}
                variant="h7"
                gutterBottom
                paragraph="true"
              >
                Shopping with no extra charges – savor the liberty of
                complimentary shipping on every order.
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography
                align="center"
                color={"grey"}
                variant="h5"
                gutterBottom
              >
                <ReplayIcon  style={{color:'black'}} />
              </Typography>
              <Typography
                align="center"
                color={"grey"}
                variant="h5"
                gutterBottom
                  fontWeight='bold'
                 fontStyle='italic'
                 style={{color:'black'}}
              >
                Easy Returns
              </Typography>
              <Typography
                align="center"
                color={"grey"}
                variant="h7"
                gutterBottom
                paragraph="true"
              >
                With our hassle-free Easy Returns, changing your mind has never
                been more convenient.
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography
                align="center"
                color={"grey"}
                variant="h5"
                gutterBottom
              >
                <PinDropIcon  style={{color:'black'}} />
              </Typography>
              <Typography
                align="center"
                color={"grey"}
                variant="h5"
                gutterBottom
                fontWeight="bold"
                fontStyle="italic"
                style={{color:'black'}}
              >
                Order Tracking
              </Typography>
              <Typography
                align="center"
                color={"grey"}
                variant="h7"
                gutterBottom
                paragraph="true"
              >
                Stay in the loop with our Order Tracking feature - from checkout
                to your doorstep.
              </Typography>
            </Grid>
          </div>
        </div>
      </Grid>
    </>
  );
};
export default WebInfo;
