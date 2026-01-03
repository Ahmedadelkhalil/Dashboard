import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Theme, useTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import useMediaQuery from "@mui/material/useMediaQuery";

const HeaderInfoPieChart = () => {
  const theme: Theme = useTheme();
  const smallDev = useMediaQuery("(min-width: 450px)");
  return (
    <>
      <Box
        sx={{
          [theme.breakpoints.up("sm")]: {
            height: "91px",
          },
          [theme.breakpoints.up("lg")]: {
            height: "115px",
            "@media (min-width: 1700px)": {
              height: "91px",
            },
          },
          backgroundColor: "#000",
          borderBottom: "1px solid #fff",
          display: "flex",
          justifyContent: "center",
          p: 1.5,
        }}
      >
        <Grid
          container
          spacing={1}
          sx={{
            m: 0,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid item xs={smallDev ? 8 : 12}>
            <Typography
              sx={{
                color: "#fff",
                mb: "5px",
                fontFamily: "Syne",
                fontWeight: "700",
              }}
            >
              Visitors Analytics
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                [theme.breakpoints.up("sm")]: {
                  flexDirection: "row",
                },
                [theme.breakpoints.up("lg")]: {
                  flexDirection: "column",
                  "@media (min-width: 1700px)": {
                    flexDirection: "row",
                  },
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 1,
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "start",
                    mr: 3,
                  }}
                >
                  <Radio
                    checked
                    color="primary"
                    size="small"
                    sx={{
                      p: 0,
                      mr: "4px",
                    }}
                  />
                  <Box sx={{ width: "100%", color: "#fff" }}>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "14px",
                        fontFamily: "Syne",
                        fontWeight: "700",
                      }}
                    >
                      Laptop
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "start",
                    mr: 3,
                  }}
                >
                  <Radio
                    checked
                    color="secondary"
                    size="small"
                    sx={{
                      p: 0,
                      mr: "4px",
                    }}
                  />
                  <Box
                    sx={{
                      width: "100%",
                      color: "#fff",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "14px",
                        fontFamily: "Syne",
                        fontWeight: "700",
                      }}
                    >
                      Mobile
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "start",
                    mr: 3,
                  }}
                >
                  <Radio
                    checked
                    color="success"
                    size="small"
                    sx={{
                      p: 0,
                      mr: "4px",
                    }}
                  />
                  <Box
                    sx={{
                      width: "100%",
                      color: "#fff",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "14px",
                        fontFamily: "Syne",
                        fontWeight: "700",
                      }}
                    >
                      Tablet
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "start",
                    mr: 3,
                  }}
                >
                  <Radio
                    checked
                    color="warning"
                    size="small"
                    sx={{
                      p: 0,
                      mr: "4px",
                    }}
                  />
                  <Box
                    sx={{
                      width: "100%",
                      color: "#fff",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "14px",
                        fontFamily: "Syne",
                        fontWeight: "700",
                      }}
                    >
                      Desktop
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={smallDev ? 4 : 12}
            sx={{
              display: "flex",
              justifyContent: smallDev ? "end" : "start",
              alignItems: "center",
              height: smallDev ? "100%" : "auto",
              mt: smallDev ? 0 : 1,
            }}
          >
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  mt: 1,
                  [theme.breakpoints.up("sm")]: {
                    justifyContent: "end",
                    mt: 0,
                  },
                  alignItems: "center",
                }}
              >
                <FormControl color="info">
                  <InputLabel
                    variant="standard"
                    htmlFor="uncontrolled-native"
                    color="info"
                    sx={{
                      fontSize: "14px",
                      fontFamily: "Syne",
                      fontWeight: "700",
                    }}
                  >
                    Related To
                  </InputLabel>
                  <NativeSelect
                    defaultValue={`This Week`}
                    inputProps={{
                      name: "Analytics",
                      id: "uncontrolled-native",
                    }}
                    sx={{
                      "&": {
                        color: "#fff",
                        fontSize: "12px",
                        fontFamily: "Syne",
                        fontWeight: "700",
                      },
                      "& svg": {
                        color: "#fff",
                        fontSize: "19px",
                      },
                      ".css-1vvh5z-MuiNativeSelect-select-MuiInputBase-input-MuiInput-input:not([multiple]) option":
                        {
                          backgroundColor: "#000",
                        },
                      ".css-wr988u-MuiNativeSelect-select-MuiInputBase-input-MuiInput-input:not([multiple]) option":
                        {
                          backgroundColor: "#000",
                        },
                    }}
                  >
                    <option value={`This Week`}>This Week</option>
                    <option value={`Last Week`}>Last Week</option>
                  </NativeSelect>
                </FormControl>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HeaderInfoPieChart;
