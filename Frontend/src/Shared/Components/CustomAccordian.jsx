import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import PropTypes from "prop-types";
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import { Typography } from "@mui/material";

const CustomAccordian = ({ AccordionTitle, AccordianDetails }) => {
  // const disableSquare='false';
  return (
    <Accordion square={false}>
      <AccordionSummary
        expandIcon={<ExpandCircleDownOutlinedIcon htmlColor="#1b2833" />}
      >
        <Typography variant="h6" gutterBottom>{AccordionTitle}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography color={"grey"}  gutterBottom>{AccordianDetails}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

CustomAccordian.propTypes = {
  AccordionTitle: PropTypes.string.isRequired,
  AccordianDetails: PropTypes.string.isRequired
};

export default CustomAccordian;
