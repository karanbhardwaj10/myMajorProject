import { Typography, Grid, Checkbox, Tooltip } from "@mui/material";
import PropTypes from "prop-types";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import "./Style.css";
const CustomAddressTwo = ({
  label,
  addressType,
  customerName,
  customerAddress,
  ...props
}) => (
  <div>
    <Grid
      border="1px solid grey"
      borderRadius="5px"
      minHeight="90px"
      marginLeft="50px"
      width="48%"
      container
      alignItems="center"
    >
      <Grid item xs>
        <Grid container alignItems="center">
          <Checkbox
            icon={<TripOriginIcon />}
            style={{ marginLeft: "15px" }}
            {...label}
            sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
          />
          <Grid item marginLeft={"15px"}>
            <Typography marginBottom={"8px"} fontWeight="bold" {...props}>
              {customerName} ({addressType})
            </Typography>
            <Typography color="grey" {...props}>
              {customerAddress}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Tooltip title="Check Delivery status for this address">
          <div
            style={{ marginRight: "50px", marginTop: "10px" }}
            className="bounce"
          >
            <LocalShippingIcon />
          </div>
        </Tooltip>
      </Grid>
    </Grid>
  </div>
);
CustomAddressTwo.propTypes = {
  label: PropTypes.string,
  addressType: PropTypes.string.isRequired,
  customerName: PropTypes.string.isRequired,
  customerAddress: PropTypes.string.isRequired,
};
export default CustomAddressTwo;
