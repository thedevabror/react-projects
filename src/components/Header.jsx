import React from "react";
import { Link } from "react-router-dom";
import { Input } from "../utils";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { HiOutlineUser } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  // position: "absolute",
  // pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      // className="bg-[#000]"
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >
          <Link
            to={"/login"}
            className="flex items-center hover:bg-third rounded-md px-3 text-[19px]"
          >
            <HiOutlineUser className="text-[24px]" />
            <div className="p-3 rounded-2xl text-[20px]">
              <Link to={"/login"}>Kirish</Link>
            </div>
          </Link>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >
          <Link
            to={"/login"}
            className="flex items-center hover:bg-third rounded-md px-3 text-[19px]"
          >
            <IoMdHeartEmpty className="text-[24px]" />
            <div className="p-3 rounded-2xl">
              <Link to={"/login"}>Saralanganlar</Link>
            </div>
          </Link>
        </IconButton>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >
          <Link
            to={"/login"}
            className="flex items-center hover:bg-third rounded-md px-3 text-[19px]"
          >
            <BsCart2 className="text-[24px]" />
            <div className="p-3 rounded-2xl">
              <Link to={"/login"}>Savat</Link>
            </div>
          </Link>
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1, boxShadow: "none", bgcolor: "transparent" }}>
      <AppBar
        position="static"
        className="px- lg:px-32"
        sx={{ bgcolor: "transparent", boxShadow: "none"}}
      >
        <Toolbar className="bg-transparent px-20 text-secondary">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Trendify
          </Typography>
          <Box sx={{ width: "50%" }} className="rounded-md overflow-hidden">
            <Search className="flex items-center border">
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                className="w-[100%]"
              />
              <button className="py-2 px-6 bg-third rounded-tr-md rounded-br-md">
                <IoIosSearch className="text-[30px]" />
              </button>
            </Search>
          </Box>
          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Link
                to={"/login"}
                className="flex items-center hover:bg-third rounded-md m-2 px-2 text-[19px]"
              >
                <HiOutlineUser className="text-[24px]" />
                <div className="p-3 rounded-2xl text-[20px]">
                  <Link to={"/login"}>Kirish</Link>
                </div>
              </Link>
            
              <Link
                to={"/login"}
                className="flex items-center hover:bg-third rounded-md m-2 px-2 text-[19px]"
              >
                <IoMdHeartEmpty className="text-[24px]" />
                <div className="p-3 rounded-2xl">
                  <Link to={"/login"}>Saralanganlar</Link>
                </div>
              </Link>
              <Link
                to={"/login"}
                className="flex items-center hover:bg-third rounded-md m-2 px-2 text-[19px]"
              >
                <BsCart2 className="text-[24px]" />
                <div className="p-3 rounded-2xl">
                  <Link to={"/login"}>Savat</Link>
                </div>
              </Link>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};

export default Header;
