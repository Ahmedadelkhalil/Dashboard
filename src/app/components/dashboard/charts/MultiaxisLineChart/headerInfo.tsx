import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Grid from "@mui/material/Grid";
import { Theme, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import dayjs from "dayjs";

const HeaderInfoMultiAxisChart = () => {
  const theme: Theme = useTheme();
  const smallDevMainT = useMediaQuery("(min-width: 430px)");
  const smallDevSubT = useMediaQuery("(max-width: 400px)");
  const date = dayjs(new Date());
  return (
    <>
      <Box
        sx={{
          [theme.breakpoints.up("sm")]: {
            height: "83px",
          },
          backgroundColor: "#000",
          borderBottom: "1px solid #fff",
          p: 1.5,
          display: "flex",
          justifyContent: "space-between",
          boxSizing: "border-box",
        }}
      >
        <Grid
          container
          spacing={1}
          sx={{
            display: "flex",
            alignItems: "center",
            m: 0,
          }}
        >
          <Grid item xs={12} sm={7}>
            <Box
              sx={{
                display: "flex",
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
                    mr: "5px",
                  }}
                />
                <Box sx={{ width: "100%", color: "#fff" }}>
                  <Box
                    sx={{
                      fontFamily: "Syne",
                      fontWeight: "700",
                      display: "flex",
                    }}
                  >
                    <Typography
                      sx={{
                        mr: "4px",
                        fontSize: "14px",
                        fontFamily: "Syne",
                        fontWeight: "700",
                        display: smallDevMainT ? "block" : "none",
                      }}
                    >
                      Total
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Syne",
                        fontWeight: "700",
                        fontSize: "14px",
                      }}
                    >
                      Revenue
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: smallDevSubT ? "9px" : "11px",
                    }}
                  >
                    {`Today: ${date.format("DD-MM-YY")}`}
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
                    mr: "5px",
                  }}
                />
                <Box
                  sx={{
                    width: "100%",
                    color: "#fff",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                    }}
                  >
                    <Typography
                      sx={{
                        mr: "4px",
                        fontFamily: "Syne",
                        fontWeight: "700",
                        fontSize: "14px",
                        display: smallDevMainT ? "block" : "none",
                      }}
                    >
                      Total
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Syne",
                        fontWeight: "700",
                        fontSize: "14px",
                      }}
                    >
                      Sales
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: smallDevSubT ? "9px" : "11px",
                    }}
                  >
                    {`Today: ${date.format("DD-MM-YY")}`}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={5}>
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
                <ButtonGroup
                  variant="outlined"
                  aria-label="Basic button group"
                  size="small"
                >
                  <Button
                    color="info"
                    sx={{
                      fontFamily: "Syne",
                      fontWeight: "700",
                    }}
                  >
                    Day
                  </Button>
                  <Button
                    color="info"
                    sx={{
                      fontFamily: "Syne",
                      fontWeight: "700",
                    }}
                  >
                    Week
                  </Button>
                  <Button
                    color="info"
                    sx={{
                      fontFamily: "Syne",
                      fontWeight: "700",
                    }}
                  >
                    Month
                  </Button>
                </ButtonGroup>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HeaderInfoMultiAxisChart;
