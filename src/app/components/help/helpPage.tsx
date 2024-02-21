"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
// Mui Components
import { Theme, useTheme, styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
// Section Header
import SectionHeader from "@/global/section_header/sectionHeader";
// Help Data
import { helpData } from "@/data/help/helpData";
// Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";

// Card Customization
const Item = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  backgroundColor: theme.palette.background.paper,
  padding: "20px",
  height: "100%",
}));

const HelpPage = () => {
  const extraSmallDev = useMediaQuery("(max-width:350px)");
  const theme: Theme = useTheme();
  const [showHelp, setShowHelp] = useState(false);
  useEffect(() => {
    setShowHelp(true);
  }, []);
  return (
    showHelp && (
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
          <SectionHeader currentPage="Help" />
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontSize: "20px",
                  [theme.breakpoints.up("sm")]: {
                    fontSize: "25px",
                  },
                  fontFamily: "Syne",
                  fontWeight: 600,
                  textTransform: "capitalize",
                  mb: 1,
                }}
              >
                help documentation
              </Typography>
              <Box
                sx={{
                  fontFamily: "Syne",
                  textTransform: "capitalize",
                  fontSize: "14px",
                  maxWidth: "500px",
                  mx: "auto",
                  [theme.breakpoints.up("sm")]: {
                    maxWidth: "550px",
                    fontSize: "15px",
                  },
                  textAlign: "center",
                  mb: 5,
                  color: theme.palette.text.secondary,
                }}
              >
                <p style={{ margin: 0 }}>
                  {`quick answers to questions you may have. can't find what you're
                looking for? check out our `}
                  <span
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                    full documentation
                  </span>
                </p>
              </Box>
            </Box>
            <Grid container spacing={1.5}>
              {helpData.map((card, indx) => {
                return (
                  <Grid item xs={12} sm={6} lg={4} xl={3} key={indx}>
                    <Item>
                      <card.icon />
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Syne",
                          textTransform: "capitalize",
                          fontSize: "15px",
                          [theme.breakpoints.up("sm")]: {
                            fontSize: "18px",
                          },
                          fontWeight: 600,
                          mb: 1,
                        }}
                      >
                        {card.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: "Syne",
                          maxWidth: "500px",
                          mx: "auto",
                          textTransform: "capitalize",
                          fontSize: "13px",
                          color: theme.palette.text.secondary,
                        }}
                      >
                        {card.demonistration}
                      </Typography>
                    </Item>
                  </Grid>
                );
              })}
            </Grid>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mt: 5,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontSize: "20px",
                  [theme.breakpoints.up("sm")]: {
                    fontSize: "25px",
                  },
                  fontFamily: "Syne",
                  fontWeight: 600,
                  textTransform: "capitalize",
                  mb: 1,
                }}
              >
                still have a question?
              </Typography>
              <Typography
                variant="body1"
                component="p"
                sx={{
                  fontFamily: "Syne",
                  textTransform: "capitalize",
                  fontSize: "14px",
                  maxWidth: "350px",
                  mx: "auto",
                  [theme.breakpoints.up("sm")]: {
                    maxWidth: "550px",
                    fontSize: "15px",
                  },
                  textAlign: "center",
                  mb: 1.5,
                  color: theme.palette.text.secondary,
                }}
              >
                if you can not find answer to your questions in our help
                documentation, you can always contact us, we will answer to you
                shortly.
              </Typography>
              <Box
                sx={{
                  width: "180px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Link href="">
                  <FacebookIcon
                    fontSize="small"
                    sx={{
                      color: theme.palette.text.primary,
                    }}
                  />
                </Link>
                <Link href="">
                  <InstagramIcon
                    fontSize="small"
                    sx={{
                      color: theme.palette.text.primary,
                    }}
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/ahmed-khalil-4541bb219/"
                  target="_blank"
                >
                  <LinkedInIcon
                    fontSize="small"
                    sx={{
                      color: theme.palette.text.primary,
                    }}
                  />
                </Link>
                <Link href="https://github.com/Ahmedadelkhalil" target="_blank">
                  <GitHubIcon
                    fontSize="small"
                    sx={{
                      color: theme.palette.text.primary,
                    }}
                  />
                </Link>
                <Link href="">
                  <XIcon
                    fontSize="small"
                    sx={{
                      color: theme.palette.text.primary,
                    }}
                  />
                </Link>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    )
  );
};

export default HelpPage;
