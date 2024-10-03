import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  getLinearProgressUtilityClass,
} from "@mui/material";
import {
  LocalMall as LocalMallIcon,
  SearchSharp as SearchSharpIcon,
  Favorite as FavoriteIcon,
  ShoppingCartCheckoutSharp as ShoppingCartCheckoutSharpIcon,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./styles/HeaderStyle.css";

const pages = ["Products", "Blog", "About Us", "Contact Us"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const userName = useSelector(
    (state) => state.signInSliceVal.user.userName || ""
  );
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);
  function handleTitleClick() {
    console.log("inside the navigate");

    navigate("/");
  }
  function navigateToCheckout() {
    navigate("/Checkout");
  }
  function handleNavbarClick(event) {
    const targetId = event.target.id;
    console.log(targetId);

    if (targetId === "Products") {
      console.log("inside targetid if");
      navigate("/");
      setTimeout(() => {
        var elmntToView = document.getElementById("ProductsTypes");
        console.log(elmntToView, "element to view");
        if (elmntToView) {
          elmntToView.scrollIntoView();
        }
      }, 100); // Small delay (100ms) to ensure the component is rendered
    }
  }
  return (
    <AppBar position="static" sx={{ backgroundColor: "#005685" }}>
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          <Box display={"flex"} onClick={handleTitleClick}>
            <Button style={{ color: "white" }}>
              <LocalMallIcon
                sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              />
              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  mt: 0.5,
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                FashionStreet
              </Typography>
            </Button>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            {pages.map((page) => (
              <Button
                id={page}
                key={page}
                onClick={handleNavbarClick}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Tooltip title="Search">
              <IconButton sx={{ p: 0 }}>
                <SearchSharpIcon sx={{ marginRight: "20px", color: "white" }} />
              </IconButton>
            </Tooltip>

            <Tooltip title="Wishlist">
              <IconButton
                sx={{ p: 0 }}
                onClick={() => {
                  navigate("/Wishlist");
                }}
              >
                <FavoriteIcon sx={{ marginRight: "20px", color: "white" }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Checkout" onClick={navigateToCheckout}>
              <IconButton sx={{ p: 0 }}>
                <ShoppingCartCheckoutSharpIcon
                  sx={{ marginRight: "20px", color: "white" }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="Settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User Avatar" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, index) => (
                <MenuItem
                  key={`${setting}+${index}`}
                  onClick={handleCloseUserMenu}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
