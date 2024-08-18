import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import PropTypes from "prop-types";
import { Button, Box } from "@mui/material";
import useKeyDown from "./hooks/useKeyDown";
const CustomPopup = ({ onClose, heading, content }) => {
  //  custom hook to handle the Escape key press
  useKeyDown(onClose);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        inset: "0",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        backdropFilter: "blur(1px)", // Blur effect
      }}
    >
      <Card
        style={{
          height: "80%",
          width: "40%",
          //   border: "1px solid black",
          borderRadius: "5px",
        }}
      >
        <CardContent>
          <Typography
            sx={{ display: "flex", fontSize: 20, justifyContent: "center" , fontFamily: "poppins",fontWeight:'bold'}}
            color="text.secondary"
            gutterBottom
          >
            {heading}
           
          </Typography>
          <Box alignItems={'center'} display={'flex'} border={"1px solid black"} height={"28rem"} borderRadius={"5px"} overflow={'auto'} >
            <Typography
              sx={{ display: "flex", fontSize: 14, justifyContent: "center" }}
              color="text.secondary"
              gutterBottom
            >
              {content}
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Button
              style={{
                border: "1px solid blue",
                color: "white",
                backgroundColor: "#005685",
                display: "flex",
                width: "50%",
                fontFamily: "poppins",
                marginTop: "10px",
              }}
              onClick={onClose}
            >
              Close
            </Button>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};
CustomPopup.propTypes = {
  heading: PropTypes.string,
  content:PropTypes.string,
  onClose: PropTypes.func,
};
export default CustomPopup;
