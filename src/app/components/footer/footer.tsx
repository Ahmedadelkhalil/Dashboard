"use client";
import { useState, useEffect } from "react";
// MUI Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Theme, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
// Next Components
import Link from "next/link";

const Footer = () => {
  const theme: Theme = useTheme();
  const currentDate = new Date().getFullYear();
  const [showFooter, setShowFooter] = useState(false);
  // MEDIA-QUERY
  const extraSmallDev = useMediaQuery("(max-width:350px)");

  useEffect(() => {
    setShowFooter(true);
  }, []);

  return showFooter ? (
    <Box
      sx={{
        ml: extraSmallDev ? 0 : "56px",
        [theme.breakpoints.up("sm")]: {
          ml: extraSmallDev ? 0 : "64px",
        },
        "@media (min-width: 1024px)": {
          ml: 0,
        },
        textAlign: "center",
        py: 2,
        bgcolor: theme.palette.background.default,
      }}
    >
      <Typography
        variant="caption"
        component="span"
        sx={{ color: theme.palette.text.primary }}
      >
        {`© ${currentDate} `}
      </Typography>
      <Link
        href="https://github.com/Ahmedadelkhalil"
        target="_blank"
        style={{
          color: theme.palette.text.primary,
        }}
      >
        <Typography variant="caption" component="span">
          Ahmed Adel.
        </Typography>
      </Link>
    </Box>
  ) : null;
};

export default Footer;
