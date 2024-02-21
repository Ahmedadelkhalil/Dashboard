"use client";
import React, { useState, useEffect, useMemo, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
// Mui Components
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
// Icons
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SettingsIcon from "@mui/icons-material/Settings";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import HelpIcon from "@mui/icons-material/Help";
// Redux Toolkit
import { asyncToggleSideMenuBar } from "@/Redux/slices/sideBarMenuSlice";
import { IRootState, useAppDispatch } from "@/Redux/store"; // custom hook
import { useSelector } from "react-redux";

const drawerWidth = 240;
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create(["width", "transform"], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create(["width", "transform"], {
    easing: theme.transitions.easing.easeIn,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: "56px",
  [theme.breakpoints.up("sm")]: {
    width: "64px",
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const SidebarMenu = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [showSideBar, setShowSideBar] = useState(false);
  useEffect(() => {
    setShowSideBar(true);
  }, []);
  const sideBarMediaQuery = useMediaQuery("(min-width:1024px)");
  const extraSmallDev = useMediaQuery("(max-width:350px)");
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const isSideBarMenuOpen = useSelector(
    (state: IRootState) => state.sideBarMenu.isOpen
  );
  const [open, setOpen] = React.useState(isSideBarMenuOpen);
  useEffect(() => {
    if (isSideBarMenuOpen) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, []);
  useMemo(() => {
    if (isSideBarMenuOpen) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [isSideBarMenuOpen]);
  useLayoutEffect(() => {
    function checking() {
      if (sideBarMediaQuery) {
        setOpen(true);
      } else {
        if (isSideBarMenuOpen) {
          setOpen(true);
        } else {
          setOpen(false);
        }
      }
    }
    window.addEventListener("resize", checking);
    checking();
    return () => removeEventListener("resize", checking);
  }, [sideBarMediaQuery, isSideBarMenuOpen]);
  function checking() {
    if (sideBarMediaQuery) {
      setOpen(true);
    } else {
      if (isSideBarMenuOpen) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    }
  }
  useEffect(() => {
    checking();
  }, []);

  const pages = [
    {
      page: "Dashboard",
      path: "/",
      icon: <DashboardIcon />,
    },
    {
      page: "Calendar",
      path: "/calendar",
      icon: <CalendarMonthIcon />,
    },
    {
      page: "Profile",
      path: "/profile",
      icon: <AccountBoxIcon />,
    },
    {
      page: "Tasks",
      path: "/tasks",
      icon: <DriveFileRenameOutlineIcon />,
    },
    {
      page: "Notifications",
      path: "/notifications",
      icon: <NotificationsActiveIcon />,
    },
    {
      page: "Settings",
      path: "/settings",
      icon: <SettingsIcon />,
    },
    {
      page: "Help",
      path: "/help",
      icon: <HelpIcon />,
    },
  ];

  return (
    showSideBar && (
      <Box className="sideMenuBar_container">
        <Drawer
          variant="permanent"
          ModalProps={{
            keepMounted: true,
          }}
          open={open}
          PaperProps={{
            sx: {
              backgroundColor: theme.palette.background.sideBarMenu,
              color: "#fff",
              transform: open
                ? "translateX(0)"
                : extraSmallDev
                ? "translateX(-100%)"
                : "translateX(0)",
            },
          }}
        >
          <DrawerHeader>
            {sideBarMediaQuery ? (
              ""
            ) : (
              <IconButton>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon
                    sx={{
                      color: "#fff",
                    }}
                    onClick={() => dispatch(asyncToggleSideMenuBar())}
                  />
                ) : (
                  <ChevronLeftIcon
                    sx={{
                      color: "#fff",
                    }}
                    onClick={() => dispatch(asyncToggleSideMenuBar())}
                  />
                )}
              </IconButton>
            )}
          </DrawerHeader>
          <Divider />
          <List>
            {pages.slice(0, 4).map((page, indx) => (
              <ListItem
                key={indx}
                disablePadding
                sx={{
                  display: "block",
                  backgroundColor:
                    pathname === page.path ? "rgb(49 61 74 / 1)" : "",
                }}
                title={`${page.page}`}
                onClick={() => {
                  router.push(page.path);
                  if (isSideBarMenuOpen) {
                    dispatch(asyncToggleSideMenuBar());
                  }
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      color: "#fff",
                    }}
                  >
                    {page.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={page.page}
                    sx={{
                      opacity: open ? 1 : 0,
                      ".css-10hburv-MuiTypography-root": {
                        fontFamily: "syne",
                        fontWeight: "600",
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {pages.slice(4).map((page, indx) => (
              <ListItem
                key={indx}
                disablePadding
                sx={{
                  display: "block",
                  backgroundColor:
                    pathname === page.path ? "rgb(49 61 74 / 1)" : "",
                }}
                title={`${page.page}`}
                onClick={() => {
                  router.push(page.path);
                  if (isSideBarMenuOpen) {
                    dispatch(asyncToggleSideMenuBar());
                  }
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      color: "#fff",
                    }}
                  >
                    {page.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={page.page}
                    sx={{
                      opacity: open ? 1 : 0,
                      ".css-10hburv-MuiTypography-root": {
                        fontFamily: "syne",
                        fontWeight: "600",
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
    )
  );
};

export default SidebarMenu;
