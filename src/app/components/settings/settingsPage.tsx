"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
// Mui Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { Theme, useTheme } from "@mui/material/styles";
// Setting Page Data
import {
  PersonalInfoData,
  AddressInfoData,
} from "@/data/settings/settingsData";
// Icons
import BorderColorIcon from "@mui/icons-material/BorderColor";
// Section Header
import SectionHeader from "@/global/section_header/sectionHeader";

const SettingsPage = () => {
  const theme: Theme = useTheme();
  const extraSmallDev = useMediaQuery("(max-width:350px)");
  const smallDev = useMediaQuery("(max-width:400px)");
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const currentDate = new Date().getFullYear();
  useEffect(() => {
    setShowSettings(true);
  }, []);

  return (
    showSettings && (
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
          <SectionHeader currentPage="Settings" />
          <>
            <Typography
              variant="h6"
              sx={{
                mb: 3,
                fontFamily: "Syne",
                textTransform: "capitalize",
                fontWeight: 600,
              }}
            >
              my profile
            </Typography>
            {/* Basic Acc Info */}
            <Box
              sx={{
                display: "flex",
                flexDirection: smallDev ? "column" : "row",
                justifyContent: smallDev ? "center" : "space-between",
                alignItems: "center",
                backgroundColor: theme.palette.background.paper,
                p: 2,
                maxWidth: "1000px",
                mx: "auto",
                border: `1px solid ${theme.palette.text.secondary}`,
                borderRadius: "5px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: smallDev ? "column" : "row",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mr: smallDev ? 0 : 1.5,
                  }}
                >
                  <Image
                    src="/images/profile/profile-pic.png"
                    alt=""
                    width={matches ? 70 : 65}
                    height={matches ? 70 : 65}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    mt: smallDev ? 2 : 0,
                  }}
                >
                  <Typography
                    variant="body1"
                    component="span"
                    sx={{
                      fontFamily: "Syne",
                      fontSize: smallDev ? "20px" : "18px",
                      fontWeight: 600,
                      [theme.breakpoints.up("sm")]: {
                        fontSize: "20px",
                      },
                    }}
                  >
                    Ahmed Adel
                  </Typography>
                  <Typography
                    variant="caption"
                    component="span"
                    sx={{
                      fontFamily: "Syne",
                      fontSize: "13px",
                      textAlign: smallDev ? "center" : "start",
                      color: theme.palette.text.secondary,
                      [theme.breakpoints.up("sm")]: {
                        fontSize: "15px",
                      },
                    }}
                  >
                    Software Developer
                  </Typography>
                  <Typography
                    variant="caption"
                    component="span"
                    sx={{
                      fontFamily: "Syne",
                      fontSize: "13px",
                      textAlign: smallDev ? "center" : "start",
                      color: theme.palette.text.secondary,
                      [theme.breakpoints.up("sm")]: {
                        fontSize: "15px",
                      },
                    }}
                  >
                    Cairo, Egypt
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    p: 1,
                    mt: smallDev ? 1.5 : 0,
                    width: smallDev ? "100px" : "auto",
                  }}
                >
                  <Typography
                    variant="caption"
                    component="span"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      fontFamily: "Syne",
                      fontSize: "13px",
                      mr: 0.5,
                      lineHeight: 0,
                    }}
                  >
                    Edit
                  </Typography>
                  <BorderColorIcon
                    sx={{
                      fontSize: "14px",
                    }}
                  />
                </Button>
              </Box>
            </Box>
            {/* Personal Info */}
            <Box
              sx={{
                p: 2,
                maxWidth: "1000px",
                mx: "auto",
                border: `1px solid ${theme.palette.text.secondary}`,
                backgroundColor: theme.palette.background.paper,
                borderRadius: "5px",
                my: 3,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 3,
                }}
              >
                <Typography
                  variant="body1"
                  component="h6"
                  sx={{
                    fontFamily: "Syne",
                    fontSize: "18px",
                    fontWeight: 600,
                    textTransform: "capitalize",
                    [theme.breakpoints.up("sm")]: {
                      fontSize: "20px",
                    },
                  }}
                >
                  personal info
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    p: 1,
                  }}
                >
                  <Typography
                    variant="caption"
                    component="span"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      fontFamily: "Syne",
                      fontSize: "13px",
                      mr: 0.5,
                      lineHeight: 0,
                    }}
                  >
                    Edit
                  </Typography>
                  <BorderColorIcon
                    sx={{
                      fontSize: "14px",
                    }}
                  />
                </Button>
              </Box>
              <Grid container spacing={matches ? 2 : 3}>
                {PersonalInfoData.map((info, indx) => {
                  return (
                    <Grid item xs={12} sm={6} key={indx}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Typography
                          component="span"
                          sx={{
                            fontFamily: "Syne",
                            textTransform: "capitalize",
                            color: theme.palette.text.secondary,
                            fontWeight: 500,
                            mb: 0.5,
                          }}
                        >
                          {info.title}
                        </Typography>
                        <Typography
                          component="span"
                          sx={{
                            fontFamily: "Syne",
                            fontSize:
                              indx === 2
                                ? smallDev
                                  ? "14px"
                                  : "17px"
                                : "17px",
                            textTransform: "capitalize",
                            fontWeight: 500,
                            mb: indx === PersonalInfoData.length - 1 ? 2 : 0,
                          }}
                        >
                          {info.value}
                        </Typography>
                        {indx === PersonalInfoData.length - 1 ? (
                          ""
                        ) : matches ? (
                          ""
                        ) : (
                          <Divider
                            variant="fullWidth"
                            sx={{
                              mt: 2,
                              backgroundColor: theme.palette.text.primary,
                            }}
                          />
                        )}
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
            {/* Address Info */}
            <Box
              sx={{
                p: 2,
                maxWidth: "1000px",
                mx: "auto",
                border: `1px solid ${theme.palette.text.secondary}`,
                backgroundColor: theme.palette.background.paper,
                borderRadius: "5px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 3,
                }}
              >
                <Typography
                  variant="body1"
                  component="h6"
                  sx={{
                    fontFamily: "Syne",
                    fontSize: "18px",
                    fontWeight: 600,
                    textTransform: "capitalize",
                    [theme.breakpoints.up("sm")]: {
                      fontSize: "20px",
                    },
                  }}
                >
                  Address
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    p: 1,
                  }}
                >
                  <Typography
                    variant="caption"
                    component="span"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      fontFamily: "Syne",
                      fontSize: "13px",
                      mr: 0.5,
                      lineHeight: 0,
                    }}
                  >
                    Edit
                  </Typography>
                  <BorderColorIcon
                    sx={{
                      fontSize: "14px",
                    }}
                  />
                </Button>
              </Box>
              <Grid container spacing={matches ? 2 : 3}>
                {AddressInfoData.map((info, indx) => {
                  return (
                    <Grid item xs={12} sm={6} key={indx}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Typography
                          component="span"
                          sx={{
                            fontFamily: "Syne",
                            textTransform: "capitalize",
                            color: theme.palette.text.secondary,
                            fontWeight: 500,
                            mb: 0.5,
                          }}
                        >
                          {info.title}
                        </Typography>
                        <Typography
                          component="span"
                          sx={{
                            fontSize:
                              indx === 1
                                ? smallDev
                                  ? "14px"
                                  : "17px"
                                : "17px",
                            fontFamily: "Syne",
                            textTransform: "capitalize",
                            fontWeight: 500,
                            mb: indx === AddressInfoData.length - 1 ? 2 : 0,
                          }}
                        >
                          {info.value}
                        </Typography>
                        {indx === AddressInfoData.length - 1 ? (
                          ""
                        ) : matches ? (
                          ""
                        ) : (
                          <Divider
                            variant="fullWidth"
                            sx={{
                              mt: 2,
                              backgroundColor: theme.palette.text.primary,
                            }}
                          />
                        )}
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </>
          <Box
            sx={{
              textAlign: "center",
              my: 2,
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
        </Container>
      </Box>
    )
  );
};

export default SettingsPage;
