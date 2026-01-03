"use client";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Theme, duration, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Container from "@mui/material/Container";
import SectionHeader from "@/global/section_header/sectionHeader";
import NotifyCard from "./notifyCard";
// Auto Animate
import { useAutoAnimate } from "@formkit/auto-animate/react";

const NotificationsPage = () => {
  const theme: Theme = useTheme();
  const extraSmallDev = useMediaQuery("(max-width:350px)");
  const [showNotifications, setShowNotifications] = useState(false);
  const [parent] = useAutoAnimate({ duration: 250 });
  useEffect(() => {
    setShowNotifications(true);
  }, []);
  return (
    showNotifications && (
      <Box
        sx={{
          ml: extraSmallDev ? 0 : "56px",
          [theme.breakpoints.up("sm")]: {
            ml: extraSmallDev ? 0 : "64px",
          },
          "@media (min-width: 1024px)": {
            ml: 0,
          },
          py: "60px",
          backgroundColor: "background.default",
          minHeight: "100vh",
          color: "text.primary",
        }}
      >
        <Container maxWidth="xl">
          <SectionHeader currentPage="Notifications" />
          <Box ref={parent}>
            <NotifyCard />
          </Box>
        </Container>
      </Box>
    )
  );
};

export default NotificationsPage;
