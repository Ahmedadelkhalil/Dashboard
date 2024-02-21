import Link from "next/link";
// import mui components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Theme, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
// import icons
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
// import types
import { AccStatInfo } from "@/types/profileTypes";

const CardBottom = () => {
  const theme: Theme = useTheme();
  const smallDev = useMediaQuery("(min-width:450px)");
  const accStatInfo: AccStatInfo = [
    {
      category: "Posts",
      amount: "259",
    },
    {
      category: "Followers",
      amount: "129K",
    },
    {
      category: "Following",
      amount: "2K",
    },
  ];
  return (
    <Box
      sx={{
        mt: 8,
        mx: 3,
        [theme.breakpoints.up("sm")]: {
          mt: 11,
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontFamily: "Oswald",
          fontWeight: 500,
          mb: 1,
          fontSize: "27px",
          letterSpacing: "1px",
        }}
      >
        Ahmed Adel
      </Typography>
      <Typography
        variant="body1"
        component="span"
        sx={{
          fontFamily: "Oswald",
          fontWeight: 500,
          mb: 3,
          fontSize: "15px",
          color: theme.palette.text.secondary,
        }}
      >
        Software Developer
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 3,
          backgroundColor: theme.palette.background.icons,
        }}
      >
        {accStatInfo.map((info, indx) => {
          return (
            <Box
              key={indx}
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: smallDev ? "row" : "column",
                p: 1.5,
                position: "relative",
                "&:after": {
                  content: `""`,
                  position: "absolute",
                  width: "2px",
                  height: "40%",
                  right: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  backgroundColor: theme.palette.background.sideBarMenu,
                  display: accStatInfo.length === indx + 1 ? "none" : "block",
                },
              }}
            >
              <Typography
                variant="body2"
                component="span"
                sx={{
                  color: theme.palette.text.primary,
                  fontFamily: "Oswald",
                  fontWeight: "600",
                }}
              >
                {info.amount}
              </Typography>
              <Typography
                variant="body2"
                component="span"
                sx={{
                  color: theme.palette.text.secondary,
                  fontFamily: "Syne",
                  ml: smallDev ? 1 : 0,
                  fontWeight: "600",
                  [theme.breakpoints.up("xs")]: {
                    fontSize: "13px",
                  },
                  [theme.breakpoints.up("sm")]: {
                    fontSize: "15px",
                  },
                }}
              >
                {info.category}
              </Typography>
            </Box>
          );
        })}
      </Box>
      <Typography
        variant="body1"
        component="span"
        sx={{
          fontFamily: "Syne",
          fontWeight: "600",
          mb: 2,
        }}
      >
        About Me
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontFamily: "Syne",
          textAlign: "center",
          fontSize: smallDev ? "13px" : "14px",
          maxWidth: "700px",
          color: theme.palette.text.secondary,
          mb: 3,
          textTransform: "capitalize",
        }}
      >
        I’m Ahmed Adel a Front-End Developer seeking a challenging position to
        build expertise in cutting-edge technologies. I have a solid commitment
        to continuous learning and improvement. With a strong passion for coding
        and ananalytical mind, I’m good at developing responsive and
        user-friendly websites that meet the needs of clientsand end-users.
      </Typography>
      <Typography
        variant="body1"
        component="span"
        sx={{
          fontFamily: "Syne",
          fontWeight: "600",
          mb: 2,
        }}
      >
        Follow me on
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 5,
        }}
      >
        <Link href="#" target="blank">
          <FacebookIcon
            fontSize="small"
            sx={{
              color: theme.palette.text.secondary,
              mx: "5px",
              "&:hover": {
                color: "#316FF6",
              },
            }}
          />
        </Link>
        <Link href="#" target="blank">
          <XIcon
            fontSize="small"
            sx={{
              color: theme.palette.text.secondary,
              mx: "5px",
              "&:hover": {
                color: "#000000",
              },
            }}
          />
        </Link>
        <Link href="#" target="blank">
          <LinkedInIcon
            fontSize="small"
            sx={{
              color: theme.palette.text.secondary,
              mx: "5px",
              "&:hover": {
                color: "#0e5caa",
              },
            }}
          />
        </Link>
        <Link href="#" target="blank">
          <WhatsAppIcon
            fontSize="small"
            sx={{
              color: theme.palette.text.secondary,
              mx: "5px",
              "&:hover": {
                color: "#25D366",
              },
            }}
          />
        </Link>
        <Link href="https://github.com/Ahmedadelkhalil" target="blank">
          <GitHubIcon
            fontSize="small"
            sx={{
              color: theme.palette.text.secondary,
              mx: "5px",
              "&:hover": {
                color: "#c2910c",
              },
            }}
          />
        </Link>
      </Box>
    </Box>
  );
};

export default CardBottom;
