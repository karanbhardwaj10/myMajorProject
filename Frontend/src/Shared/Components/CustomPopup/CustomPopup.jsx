import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import PropTypes from "prop-types";
import { Button } from "@mui/material";

const CustomPopup = ({onClose}) => {
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
    
        <Card   style={{
          height: "80%",
          width: "40%",
        //   border: "1px solid black",
        }}>
          <CardContent>
            <Typography
              sx={{ display:'flex', fontSize: 14, justifyContent:'center' }}
              color="text.secondary"
              gutterBottom
            >
             {/* {heading} */}
             Heading
            </Typography>
          </CardContent>
        <Button style={{border:'1px solid blue',}} onClick={onClose}>Close</Button>
        </Card>
     
    </div>
  );
};
CustomPopup.propTypes={
    heading:PropTypes.string
}
export default CustomPopup;
