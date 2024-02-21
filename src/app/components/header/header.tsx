"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// Mui Components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import useMediaQuery from "@mui/material/useMediaQuery";
import Divider from "@mui/material/Divider";
import { Theme, useTheme, styled } from "@mui/material/styles";
// Icons
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import MailIcon from "@mui/icons-material/Mail";
import HelpIcon from "@mui/icons-material/Help";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// Redux Toolkit
import { useAppDispatch, IRootState } from "@/Redux/store";
import { asyncToggleTheme } from "@/Redux/slices/themeSlice";
import { asyncToggleSideMenuBar } from "@/Redux/slices/sideBarMenuSlice";
import { useSelector } from "react-redux";

// SEARCH INPUT CUSTOMIZATION
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
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
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.text.secondary,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const Header = () => {
  // Handle Navigation
  const router = useRouter();
  // to avoid error due to hydration
  const [showHeader, setShowHeader] = useState<boolean>(false);
  useEffect(() => {
    setShowHeader(true);
  }, []);
  // Media Query for control App bar appearance
  const searchMediaQuery = useMediaQuery("(min-width:700px)");
  const appbarPositionFixedMediaQuery = useMediaQuery("(min-width:1024px)");
  // Theming
  const theme: Theme = useTheme();
  const dispatch = useAppDispatch();
  const isDarkMode = useSelector((state: IRootState) => state.theme.darkMode);
  // Additional Menu to show Once Clicking the Right Arrow
  const [moreAnchorEl, setMoreAnchorEl] = React.useState<null | HTMLElement>(
    null
  );
  const isMobileMenuOpen = Boolean(moreAnchorEl);
  const handleAdditionalMenuClose = () => {
    setMoreAnchorEl(null);
  };
  const handleAdditionalMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMoreAnchorEl(event.currentTarget);
  };
  const renderAdditionalMenu = (
    <Menu
      anchorEl={moreAnchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      keepMounted
      open={isMobileMenuOpen}
      onClose={handleAdditionalMenuClose}
      PaperProps={{
        elevation: 0,
        sx: {
          width: "230px",
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          "&::before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
    >
      <MenuItem
        onClick={() => {
          handleAdditionalMenuClose();
          router.push("/profile");
        }}
      >
        <Avatar
          sx={{
            color: "text.primary",
          }}
        />
        Profile
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleAdditionalMenuClose();
          router.push("/tasks");
        }}
      >
        <DriveFileRenameOutlineIcon
          sx={{
            mr: "10px",
            color: "text.primary",
          }}
        />{" "}
        My Tasks
      </MenuItem>
      <Divider />
      <MenuItem
        onClick={() => {
          handleAdditionalMenuClose();
          router.push("/calendar");
        }}
      >
        <ListItemIcon>
          <CalendarMonthIcon
            fontSize="small"
            sx={{
              color: "text.primary",
            }}
          />
        </ListItemIcon>
        Calendar
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleAdditionalMenuClose();
          router.push("/help");
        }}
      >
        <ListItemIcon>
          <HelpIcon
            fontSize="small"
            sx={{
              color: "text.primary",
            }}
          />
        </ListItemIcon>
        Help
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleAdditionalMenuClose();
          router.push("/settings");
        }}
      >
        <ListItemIcon>
          <Settings
            fontSize="small"
            sx={{
              color: "text.primary",
            }}
          />
        </ListItemIcon>
        Settings
      </MenuItem>
      <MenuItem onClick={handleAdditionalMenuClose}>
        <ListItemIcon>
          <Logout
            fontSize="small"
            sx={{
              color: "text.primary",
            }}
          />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );

  return (
    showHeader && (
      <Box sx={{ display: "flex" }}>
        <AppBar
          position="fixed"
          sx={{
            bgcolor: "background.paper",
            zIndex: 10000,
            [theme.breakpoints.up("sm")]: {
              zIndex: 1000,
            },
            [theme.breakpoints.up("md")]: {
              zIndex: appbarPositionFixedMediaQuery ? 10000 : 1000,
            },
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              aria-label="open drawer"
              sx={{
                mr: 2,
                border: 1,
                borderColor: "background.default",
                borderRadius: 0,
                p: 1,
                "@media (min-width: 1024px)": {
                  display: "none",
                },
              }}
              onClick={() => dispatch(asyncToggleSideMenuBar())}
            >
              <MenuIcon
                sx={{
                  color: "text.primary",
                }}
              />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                display: "block",
                color: "text.primary",
                ml: 2,
                fontFamily: "Oswald",
                fontWeight: "500",
              }}
            >
              Ahmed Adel
            </Typography>
            {searchMediaQuery && (
              <Search>
                <SearchIconWrapper>
                  <SearchIcon
                    sx={{
                      color: "text.secondary",
                    }}
                  />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            )}
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: "flex" }}>
              <IconButton
                size="large"
                aria-label="toggle mode"
                sx={{
                  color: "text.primary",
                  "&:hover": { backgroundColor: "transparent" },
                }}
                onClick={() => dispatch(asyncToggleTheme())}
              >
                {isDarkMode ? <Brightness4Icon /> : <Brightness7Icon />}
              </IconButton>
              <IconButton
                size="large"
                aria-label="notifications"
                sx={{
                  color: "text.primary",
                  "&:hover": { backgroundColor: "transparent" },
                }}
                onClick={() => router.push("/notifications")}
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsActiveIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="mails"
                color="inherit"
                sx={{
                  color: "text.primary",
                  "&:hover": { backgroundColor: "transparent" },
                }}
              >
                <Badge badgeContent={5} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                onClick={handleAdditionalMenuOpen}
                sx={{
                  color: "text.primary",
                  "&:hover": { backgroundColor: "transparent" },
                }}
              >
                <AccountCircle />
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="arrow"
                aria-haspopup="true"
                onClick={handleAdditionalMenuOpen}
                sx={{
                  color: "text.primary",
                  "&:hover": { backgroundColor: "transparent" },
                }}
              >
                {isMobileMenuOpen ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderAdditionalMenu}
      </Box>
    )
  );
};

export default Header;
