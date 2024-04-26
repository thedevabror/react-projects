import React from "react";
import { Link } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import { HiOutlineUser } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { Drawer } from "@mui/material";
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

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

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
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
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setMobileMoreAnchorEl(null)
    setOpen(newOpen);

  };

  // const DrawerList = (
  //   <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
  //     <List>
  //       {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
  //         <ListItem key={text} disablePadding>
  //           <ListItemButton>
  //             <ListItemIcon>
  //               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //             </ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //     <Divider />
  //     <List>
  //       {['All mail', 'Trash', 'Spam'].map((text, index) => (
  //         <ListItem key={text} disablePadding>
  //           <ListItemButton>
  //             <ListItemIcon>
  //               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //             </ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //   </Box>
  // );

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";

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
      
      <button className="flex items-center hover:bg-third rounded-md m-2 px-2 text-[19px]" onClick={toggleDrawer(true)}>
              <BsCart2 className="text-[24px]" />
              <div className="p-3 rounded-2xl">
                <button>Savat</button>
              </div>
            </button>

      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1, boxShadow: "none", bgcolor: "transparent" }}>
      <AppBar
        position="static"
        className="px- lg:px-32"
        sx={{ bgcolor: "transparent", boxShadow: "none" }}
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
            <Link to={"/"}>Trendify</Link>
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
            <button className="flex items-center hover:bg-third rounded-md m-2 px-2 text-[19px]" onClick={toggleDrawer(true)}>
              <BsCart2 className="text-[24px]" />
              <div className="p-3 rounded-2xl">
                <button>Savat</button>
              </div>
            </button>
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
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)} className="w-[300px]">
        <div className="w-[300px]">
        <h1 className="product-heading text-center py-10">Your cart</h1>

        </div>
      </Drawer>
    </Box>
  );
};

export default Header;
