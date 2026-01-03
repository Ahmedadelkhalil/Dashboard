"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Theme, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  const theme: Theme = useTheme();
  const extraSmallDev = useMediaQuery("(max-width:350px)");
  return (
    <Box
      sx={{
        ml: extraSmallDev ? 0 : "25px",
        [theme.breakpoints.up("sm")]: {
          ml: extraSmallDev ? 0 : "30px",
        },
        "@media (min-width: 1024px)": {
          ml: 0,
        },
        py: "60px",
        width: "100%",
        height: "100vh",
        backgroundColor: theme.palette.background.default,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        src="/images/error/404.svg"
        alt="Error-image"
        width={200}
        height={200}
      />
      <Typography
        component="p"
        sx={{
          my: 2,
          fontFamily: "Syne",
          fontSize: "12px",
          color: theme.palette.text.primary,
          [theme.breakpoints.up("sm")]: {
            fontSize: "15px",
          },
        }}
      >
        {`We Couldn't Find The Page You're Looking For`}
      </Typography>
      <Link href="/">
        <Button
          size={extraSmallDev ? "small" : "medium"}
          variant="contained"
          sx={{
            fontFamily: "Syne",
          }}
        >
          Dashboard
        </Button>
      </Link>
    </Box>
  );
};

export default NotFound;
