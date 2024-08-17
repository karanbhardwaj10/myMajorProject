import Alert from "@mui/material/Alert";
import { Button, Typography } from "@mui/material";
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";

const CustomAlert = ({ alertMessage, severity, variant }) => {
  return (
    <Alert
      // success / info / warning / error
      severity={severity}
      variant={variant}
      action={
        <Button color="inherit" variant="icon" size="small">
          <CloseIcon />
        </Button>
      }
    >
      <Typography sx={{ fontFamily: "poppins" }}>{alertMessage}</Typography>
    </Alert>
  );
};
CustomAlert.propTypes = {
  alertMessage: PropTypes.string,
  severity: PropTypes.string,
  variant: PropTypes.string,
};

export default CustomAlert;
