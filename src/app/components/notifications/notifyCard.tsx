import { useState } from "react";
// Mui Components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Theme, useTheme } from "@mui/material/styles";
// Notifications Data
import { notificationsData } from "@/data/notifications/notificationsData";
// Day.js
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
// Icons
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const NotifyCard = () => {
  const theme: Theme = useTheme();
  dayjs.extend(localizedFormat);
  const NoteFullDateOfCreation = dayjs(new Date()).format("L");
  const [itemsToShow, setItemsToShow] = useState<number>(10);
  const showMore = () => {
    setItemsToShow(notificationsData.length);
  };
  const showLess = () => {
    setItemsToShow(10);
  };
  const go2Top = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 270);
  };

  return (
    <>
      {notificationsData.slice(0, itemsToShow).map((notify, indx) => {
        return (
          <Box
            key={indx}
            sx={{
              backgroundColor: theme.palette.background.paper,
              p: 2,
              maxWidth: "1000px",
              mx: "auto",
            }}
          >
            <Box
              className="top"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Box
                className="left"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    color: theme.palette.text.secondary,
                    fontFamily: "Oswald",
                    fontSize: "14px",
                  }}
                >
                  {NoteFullDateOfCreation}
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    fontFamily: "Syne",
                    fontWeight: 700,
                    fontSize: "18px",
                  }}
                >
                  {notify.from}
                </Typography>
              </Box>
              <Box className="right">
                <AccessTimeIcon
                  fontSize="small"
                  sx={{
                    color: theme.palette.text.secondary,
                  }}
                />
              </Box>
            </Box>
            <Box className="bottom">
              <Typography
                component="p"
                sx={{
                  fontFamily: "Syne",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: theme.palette.text.secondary,
                }}
              >
                {`This Notification is From ${notify.from} and its about ${notify.notifyMsg}`}
              </Typography>
            </Box>
            {indx === itemsToShow - 1 ? (
              ""
            ) : (
              <Divider
                variant="fullWidth"
                sx={{
                  mt: 3,
                  "&": {
                    borderColor: theme.palette.text.primary,
                  },
                }}
              />
            )}
          </Box>
        );
      })}
      <Box
        sx={{
          textAlign: "center",
          mt: 2,
        }}
      >
        <Button
          size="small"
          variant="contained"
          sx={{
            fontFamily: "Syne",
            p: 1,
          }}
          onClick={() => {
            if (itemsToShow === 10) {
              showMore();
            } else {
              showLess();
              go2Top();
            }
          }}
        >
          {itemsToShow === 10 ? "Show More" : "Show Less"}
        </Button>
      </Box>
    </>
  );
};

export default NotifyCard;
