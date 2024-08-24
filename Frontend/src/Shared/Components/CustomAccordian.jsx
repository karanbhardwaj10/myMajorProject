import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import PropTypes from "prop-types";
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import { Typography } from "@mui/material";

const CustomAccordian = ({ AccordionTitle, AccordianDetails  }) => {
  return (
    <Accordion style={{borderRadius:'5px'}}>
      <AccordionSummary 
      // style={{borderRadius:'10px'}}
        expandIcon={<ExpandCircleDownOutlinedIcon htmlColor="#1b2833" />}
      >
        <Typography variant="h6" fontFamily={'poppins'} gutterBottom>{AccordionTitle}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography color={"grey"}   gutterBottom>{AccordianDetails}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

CustomAccordian.propTypes = {
  AccordionTitle: PropTypes.string.isRequired,
  AccordianDetails: PropTypes.string.isRequired
};

export default CustomAccordian;
