import { TextField, Typography } from "@mui/material";
import PropTypes from "prop-types";

const CustomTextField = ({ id, label, type = "text", ...props }) => (
  <div>
    <Typography variant="h6" gutterBottom>
      {label}
    </Typography>
    <TextField
      required
      id={id}
      label={label}
      type={type}
      variant="outlined"
      fullWidth
      {...props}
    />
  </div>
);
CustomTextField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  // Add any other props you want to validate
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  error: PropTypes.bool,
  helperText: PropTypes.string,
  disabled: PropTypes.bool,
  // ... any other props you commonly use
};

export default CustomTextField;
