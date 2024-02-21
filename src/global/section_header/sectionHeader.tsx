import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Theme, useTheme } from "@mui/material/styles";

type TargetPage = {
  currentPage: string;
};

const SectionHeader = ({ currentPage }: TargetPage) => {
  const theme: Theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        [theme.breakpoints.up("sm")]: {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        },
        my: 3,
        p: 1,
      }}
    >
      <Box>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Syne",
            fontWeight: 600,
            letterSpacing: 1,
          }}
        >
          {currentPage}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Link href="/" style={{ textDecoration: "none" }}>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Syne",
              color: theme.palette.text.secondary,
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            Dashboard
          </Typography>
        </Link>
        <Typography
          variant="body1"
          sx={{
            mx: 1,
          }}
        >
          /
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Syne",
            color: theme.palette.text.theme1,
            fontWeight: 500,
          }}
        >
          {currentPage}
        </Typography>
      </Box>
    </Box>
  );
};

export default SectionHeader;
