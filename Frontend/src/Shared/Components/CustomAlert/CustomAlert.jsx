import Alert from "@mui/material/Alert";
import { Button, Typography } from "@mui/material";
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/system";

const CustomAlert = ({ alertMessage, severity, variant ,handleAlertClose}) => {
  // const [statusVal, setStatusVal] = useState(" ");
  // const statusVal = useSelector(
  //   (state) => state.signInVal.status || "status not found"
  // );
  // setStatusVal(
  //   useSelector((state) => state.signInVal.status || "status not found")
  // );
  // function handleAlertClose(statusVal) {
  //   console.log(statusVal);
  // }
  
  return (
    <Box >
      <Alert
        style={{
          height: "45px",
          width: "450px",
        }}
        // success / info / warning / error
        severity={severity}
        variant={variant}
        action={
          <Button
            color="inherit"
            variant="icon"
            size="small"
            onClick={handleAlertClose}
          >
            <CloseIcon />
          </Button>
        }
      >
        <Typography sx={{ fontFamily: "poppins" }}>{alertMessage}</Typography>
      </Alert>
    </Box>
  );
};
CustomAlert.propTypes = {
  alertMessage: PropTypes.string,
  severity: PropTypes.string,
  variant: PropTypes.string,
  handleAlertClose:PropTypes.func
};

export default CustomAlert;
