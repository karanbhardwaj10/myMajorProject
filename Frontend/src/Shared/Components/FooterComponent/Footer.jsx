import  { useState } from "react";
import Grid from "@mui/material/Grid";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import IconButton from "@mui/material/IconButton";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Typography, Tooltip, Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  const [openDialog, setOpenDialog] = useState({ open: false, content: "", title: "" });

  const sections = {
    Company: ["About", "Privacy Policy", "Terms & Conditions", "Partners", "Contact"],
    Resources: ["Blog", "Tools", "Support"],
    Product: ["Home", "Career", "Teams"],
  };

  const socialMedia = [
    { name: "Instagram", IconComponent: InstagramIcon, tooltip: "Instagram", path: "/SignIn" },
    { name: "X", IconComponent: XIcon, tooltip: "X", path: "/SignUp" },
    { name: "LinkedIn", IconComponent: LinkedInIcon, tooltip: "LinkedIn", path: "https://www.linkedin.com/in/karan-bhardwaj-265103151/" },
  ];

  const handleOpenDialog = (title, content) => {
    setOpenDialog({ open: true, title, content });
  };

  const handleCloseDialog = () => {
    setOpenDialog({ open: false, content: "", title: "" });
  };

  return (
    <Box height={"100%"}>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <Grid item xs={6}>
          <Box
            sx={{
              backgroundColor: "#005685",
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "20px",
            }}
          >
            <Box>
              <Box sx={{ marginBottom: "20px", width: "80%" }}>
                <Typography color="white" variant="subtitle1" display="flex" alignItems="center">
                  <LocalMallIcon sx={{ marginRight: "8px" }} /> FashionStreet
                </Typography>
              </Box>
              <Box sx={{ width: "80%" }}>
                <Typography variant="h6" color="white">
                  Style Flows Here: Your Ultimate Fashion Destination! Explore Trendsetting Collections, Shop the Latest Looks, and Let Your Fashion Flow with Us!
                </Typography>
              </Box>
              <Box sx={{ marginTop: "20px", width: "80%" }}>
                <Typography color="white" variant="subtitle1" display="flex" alignItems="center">
                  <EmailOutlinedIcon sx={{ marginRight: "8px" }} />
                  karan.bhardwaj.7917@gmail.com
                </Typography>
              </Box>
            </Box>
            <Box sx={{ width: "80%" }}>
              <Typography color="white" variant="body2">© 2024 All rights reserved.</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: "#005685",
              height: "100%",
              width: "94%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "20px",
              overflow: "hidden",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
              {Object.entries(sections).map(([sectionTitle, items], sectionIndex) => (
                <Box key={sectionIndex} sx={{ width: "30%" }}>
                  <Typography variant="h6" color="white" sx={{ marginBottom: "10px" }}>
                    {sectionTitle}
                  </Typography>
                  {items.map((item, itemIndex) => (
                    <Typography
                      color="white"
                      key={itemIndex}
                      sx={{ marginBottom: "5px", cursor: "pointer" }}
                      onClick={() =>
                        handleOpenDialog(
                          item,
                          `This is the ${item} section and it's coming soon. Thank you for your patience!`
                        )
                      }
                    >
                      {item}
                    </Typography>
                  ))}
                </Box>
              ))}
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
              <Typography color="white">© 2024 All rights reserved.</Typography>
              <Box>
                {socialMedia.map(({ name, IconComponent, tooltip, path }) => (
                  <IconButton key={name}>
                    <Tooltip title={tooltip}>
                      <Link to={path} style={{ textDecoration: "none", color: "black" }}>
                        <IconComponent style={{ color: "white" }} />
                      </Link>
                    </Tooltip>
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Dialog Component */}
      <Dialog open={openDialog.open} onClose={handleCloseDialog}>
        <DialogTitle>{openDialog.title}</DialogTitle>
        <DialogContent>{openDialog.content}</DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Footer;
