import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Theme, useTheme } from "@mui/material/styles";

const HeaderInfoGeo = () => {
  const theme: Theme = useTheme();
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
          justifyContent: "start",
          alignItems: "center",
          p: 1.5,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#fff",
            fontFamily: "Syne",
            fontWeight: "700",
            fontSize: "18px",
          }}
        >
          Region labels
        </Typography>
      </Box>
    </>
  );
};

export default HeaderInfoGeo;
