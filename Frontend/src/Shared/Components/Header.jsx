import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartCheckoutSharpIcon from "@mui/icons-material/ShoppingCartCheckoutSharp";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import "../Styles/HeaderStyle.css";
const pages = ["Products", "Blog", "About Us", "Contact Us"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const icons = [
  {
    component: SearchSharpIcon,
    title: "Search",
    alt: "search",
    style: { marginRight: "20px", color: "white" },
  },
  {
    component: FavoriteIcon,
    title: "Wishlist",
    alt: "wishlist",
    style: { marginRight: "20px", color: "white" },
  },
  {
    component: ShoppingCartCheckoutSharpIcon,
    title: "Checkout",
    alt: "checkout",
    style: { marginRight: "20px", color: "white" },
  },
  { component: Avatar, title: "Settings", alt: "Remy Sharp", style: {} }, // Avatar for Settings
];
// const iconData = [
//   { Icon: FavoriteIcon, alt: "wishlist" },
//   { Icon: SearchSharpIcon, alt: "search" },
//   { Icon: ShoppingCartCheckoutSharpIcon, alt: "checkout" },
//   { Icon: Avatar, alt: "Remy Sharp", src: "/static/images/avatar/2.jpg" },
// ];

// const NavIconButton = ({ Icon, alt, onClick, src }) => (
//   <IconButton onClick={onClick} sx={{ p: 0 }}>
//     {Icon === Avatar ? <Avatar alt={alt} src={src} /> : <Icon alt={alt} />}
//   </IconButton>
// );
const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const userName = useSelector((state) => state.signInVal.user.userName || "");

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);
  console.log(userName);

  return (
    <AppBar style={{ backgroundColor: "#005685" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LocalMallIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {userName}
            {/* Hi */}
          </Typography>

          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          {/* <Typography
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
            LOGO {userName}
          </Typography>

          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box>
            <IconButton sx={{ p: 0 }}>
              <div style={{ marginTop: "10px" }}>
                <Tooltip title="Search">
                  <SearchSharpIcon
                    style={{ marginRight: "20px", color: "white" }}
                  />
                </Tooltip>
                <Tooltip title="Wishlist">
                  <FavoriteIcon
                    style={{ marginRight: "20px", color: "white" }}
                  />
                </Tooltip>
                <Tooltip title="Checkout">
                  <ShoppingCartCheckoutSharpIcon
                    style={{ marginRight: "20px", color: "white" }}
                  />
                </Tooltip>
              </div>
              <Tooltip title="Settings">
                <Avatar onClick={handleOpenUserMenu} alt="User Avatar" />
              </Tooltip>
            </IconButton>
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
              <Link
                to={settings.path}
                style={{ textDecoration: "none", color: "black" }}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting.name}</Typography>
                  </MenuItem>
                ))}
              </Link>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
