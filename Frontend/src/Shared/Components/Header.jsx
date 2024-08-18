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
import AdbIcon from "@mui/icons-material/Adb";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartCheckoutSharpIcon from "@mui/icons-material/ShoppingCartCheckoutSharp";
import { useEffect } from "react";
import '../Styles/HeaderStyle.css'
const pages = ["Products", "Blog", "About Us", "Contact Us"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
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
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    window.onscroll = function () {
      myFunction();
    };

    function myFunction() {
      var winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("myBar").style.width = scrolled + "%";
    }
  }, []);
  return (
    <>
      <AppBar style={{ backgroundColor: "#005685" }} position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <LocalMallIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              // href="#app-bar-with-responsive-menu"
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
              CoolName+
            </Typography>

            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              // href="#app-bar-with-responsive-menu"
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
            <Box
              sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}
            >
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
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <div style={{ marginTop: "10px" }}>
                  <Tooltip title="Search">
                    <SearchSharpIcon
                      style={{ marginRight: "20px", color: "white" }}
                      alt="search"
                    />
                  </Tooltip>
                  <Tooltip title="Wishlist">
                    <FavoriteIcon
                      style={{ marginRight: "20px", color: "white" }}
                      alt="wishlist"
                    />
                  </Tooltip>
                  <Tooltip title="Checkout">
                    <ShoppingCartCheckoutSharpIcon
                      style={{ marginRight: "20px", color: "white" }}
                      alt="checkout"
                    />
                  </Tooltip>
                </div>
                <Tooltip title="Settings">
                  <Avatar alt="Remy Sharp" />
                </Tooltip>
              </IconButton>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      <div className="progress-container">
        <div className="progress-bar" id="myBar"></div>
      </div>
      </AppBar>
    </>
  );
}

export default ResponsiveAppBar;
