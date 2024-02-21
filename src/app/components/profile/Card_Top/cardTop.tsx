import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Theme, useTheme } from "@mui/material/styles";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import useMediaQuery from "@mui/material/useMediaQuery";

const CardTop = () => {
  const theme: Theme = useTheme();
  const smallDev = useMediaQuery("(min-width:450px)");

  return (
    <Box
      sx={{
        position: "relative",
        height: "150px",
        [theme.breakpoints.up("sm")]: {
          height: "250px",
        },
        backgroundImage: `url(/images/profile/profile-bg.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        id="update bg cover"
        multiple={false}
      />
      <label
        htmlFor="update bg cover"
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          position: "absolute",
          right: "10px",
          bottom: "10px",
          backgroundColor: theme.palette.text.theme1,
          color: "#fff",
          padding: "5px",
          borderRadius: "5px",
        }}
      >
        <CameraAltOutlinedIcon
          fontSize={smallDev ? "medium" : "small"}
          sx={{
            p: "2px",
          }}
        />
        <Typography
          variant="caption"
          component="span"
          sx={{
            ml: "4px",
            fontSize: smallDev ? "15px" : "12px",
            fontFamily: "Syne",
            letterSpacing: "0.7px",
          }}
        >
          Edit
        </Typography>
      </label>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: "50%",
          transform: "translate(50%,50%)",
          width: "100px",
          height: "100px",
          [theme.breakpoints.up("sm")]: {
            width: "130px",
            height: "130px",
          },
          borderRadius: "50%",
          backgroundImage: `url(/images/profile/profile-pic.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          border: `4px solid ${theme.palette.text.secondary}`,
        }}
      >
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          id="update profile image"
          multiple={false}
        />
        <label
          htmlFor="update profile image"
          style={{
            position: "absolute",
            right: "-5px",
            bottom: "-3px",
            cursor: "pointer",
            height: "fit-content",
            display: "flex",
            borderRadius: "50%",
          }}
        >
          <CameraAltOutlinedIcon
            sx={{
              width: "30px",
              height: "30px",
              backgroundColor: theme.palette.text.theme1,
              color: "#fff",
              borderRadius: "50%",
              padding: "7px",
            }}
          />
        </label>
      </Box>
    </Box>
  );
};

export default CardTop;
