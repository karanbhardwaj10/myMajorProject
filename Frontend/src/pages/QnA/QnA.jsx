import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import CustomAccordian from "../../Shared/Components/CustomAccordian";
import { Stack } from "@mui/material";
import QnAData from './State/QnAData'

const QnARow = ({ fields }) => (
    <Stack spacing={2}>
    {fields.map((field, index) => (
      <CustomAccordian
        key={index}
        AccordionTitle={field.AccordionTitle}
        AccordianDetails={field.AccordianDetails}
      />
    ))}
  </Stack>
);

QnARow.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      AccordionTitle: PropTypes.string.isRequired,
      AccordianDetails: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const QnA = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "0px",
        padding: "0px",
        backgroundColor: "#f5f8fa",
      }}
    >
      <div
        style={{
          width: "50%",
          marginTop: "10px",
          marginBottom: "50px",
        }}
      >
        <Typography
          align="center"
          color={"grey"}
          variant="h5"
          gutterBottom
        >
          FAQ
        </Typography>

        <Typography
          style={{ marginBottom: "50px" }}
          variant="h4"
          gutterBottom
          fontFamily={"sans-serif"}
          align="center"
        >
          See if we can answer your query here
        </Typography>

        <Box >
          <QnARow fields={QnAData} />
        </Box>
      </div>
    </div>
  );
};

export default QnA;
