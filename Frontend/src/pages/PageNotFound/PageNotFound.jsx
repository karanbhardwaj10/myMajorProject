import { Box, Typography, Button } from "@mui/material";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const PageNotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography
        variant="h1"
        sx={{ fontSize: "96px", fontWeight: "bold", color: "#FF6F61" }}
      >
        404
      </Typography>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Oops! Page not found.
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        The page you are looking for does not exist.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleGoHome}>
        Go to Homepage
      </Button>
    </Box>
  );
};

export default PageNotFound;
