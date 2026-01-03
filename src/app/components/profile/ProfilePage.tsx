"use client";
import React, { useState, useEffect } from "react";
// import mui components
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Theme, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
// import Profile Page Components
import SectionHeader from "@/global/section_header/sectionHeader";
import CardTop from "./Card_Top/cardTop";
import CardBottom from "./Card_Bottom/cardBottom";

const ProfilePage = () => {
  const theme: Theme = useTheme();
  const extraSmallDev = useMediaQuery("(max-width:350px)");
  const [showProfile, setShowProfile] = useState(false);
  useEffect(() => {
    setShowProfile(true);
  }, []);

  return (
    showProfile && (
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
          <SectionHeader currentPage="Profile" />
          <Box
            sx={{
              backgroundColor: theme.palette.background.paper,
            }}
          >
            <CardTop />
            <CardBottom />
          </Box>
        </Container>
      </Box>
    )
  );
};

export default ProfilePage;
