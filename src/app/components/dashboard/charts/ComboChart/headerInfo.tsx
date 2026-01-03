import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Theme, useTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import useMediaQuery from "@mui/material/useMediaQuery";

const HeaderInfoCompoChart = () => {
  const theme: Theme = useTheme();
  const smallDev = useMediaQuery("(min-width: 450px)");
  return (
    <>
      <Box
        sx={{
          [theme.breakpoints.up("sm")]: {
            height: "83px",
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
              Profit this week
            </Typography>
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
                  mr: 2,
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
                    Revenue
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "start",
                  mr: 5,
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
                    Sales
                  </Typography>
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
                  justifyContent: "end",
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
                    Analytics
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

export default HeaderInfoCompoChart;
