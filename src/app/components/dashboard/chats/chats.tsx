import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { ChatData } from "@/types/dashboardTypes";
import useMediaQuery from "@mui/material/useMediaQuery";

const chatData: ChatData = [
  {
    userName: "Ahmed Adel",
    userImg: "images/chats/chat_01.png",
    status: "online",
    msg: "i'm gonna text you when i'm there",
    timeMsgSentIn: "12 min",
    seen: false,
    newMsgs: 3,
  },
  {
    userName: "Omnia Ashraf",
    userImg: "images/chats/chat_02.png",
    status: "online",
    msg: "I am waiting for you.",
    timeMsgSentIn: "5:54 PM",
    seen: true,
    newMsgs: 0,
  },
  {
    userName: "Mahmoud Ali",
    userImg: "images/chats/chat_03.png",
    status: "pending",
    msg: "Where are you now?",
    timeMsgSentIn: "10:12 PM",
    seen: true,
    newMsgs: 0,
  },
  {
    userName: "Salma Nabil",
    userImg: "images/chats/chat_04.png",
    status: "offline",
    msg: "I really love that!",
    timeMsgSentIn: "Oct 23",
    seen: false,
    newMsgs: 2,
  },
  {
    userName: "Ibrahim Amr",
    userImg: "images/chats/chat_05.png",
    status: "pending",
    msg: "wow! Thats amazing",
    timeMsgSentIn: "Sep 20",
    seen: true,
    newMsgs: 0,
  },
];

const Chats = () => {
  const theme = useTheme();
  const smallDev = useMediaQuery("(max-width:450px)");
  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.background.paper,
          borderRadius: "5px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            backgroundColor: "#000",
            color: "#fff",
            p: 2,
            fontSize: "14px",
            fontFamily: "Syne",
            fontWeight: "700",
            letterSpacing: 1,
            borderTopRightRadius: "5px",
            borderTopLeftRadius: "5px",
            borderBottom: "1px solid #fff",
          }}
        >
          CHATS
        </Typography>
        {chatData.map((chat, indx) => {
          return (
            <Box
              key={indx}
              className="chatsSlices_container"
              sx={{
                width: "100%",
                backgroundColor: theme.palette.background.paper,
                p: 1.5,
                borderBottom:
                  chatData.length !== indx + 1
                    ? `1px solid ${theme.palette.text.primary}`
                    : "",
                borderBottomRightRadius:
                  chatData.length === indx + 1 ? "5px" : "",
                borderBottomLeftRadius:
                  chatData.length === indx + 1 ? "5px" : "",
                "&:hover": {
                  backgroundColor: theme.palette.background.hoverBg,
                  cursor: "pointer",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      mr: 2,
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="span"
                      sx={{
                        position: "absolute",
                        width: smallDev ? "10px" : "12px",
                        height: smallDev ? "10px" : "12px",
                        bottom: 1,
                        right: 3,
                        border: "2px solid #fff",
                        borderRadius: "50%",
                        backgroundColor:
                          chat.status === "online"
                            ? theme.palette.text.online
                            : chat.status === "offline"
                            ? theme.palette.text.offline
                            : chat.status === "pending"
                            ? theme.palette.text.pending
                            : null,
                      }}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: smallDev ? "40px" : "55px",
                        height: smallDev ? "40px" : "55px",
                        borderRadius: "50%",
                      }}
                    >
                      <Image
                        src={`/${chat.userImg}`}
                        alt={chat.userName}
                        width={smallDev ? 40 : 55}
                        height={smallDev ? 40 : 55}
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: smallDev ? "15px" : "18px",
                        color: chat.seen
                          ? theme.palette.text.seen
                          : theme.palette.text.primary,
                        fontWeight: !chat.seen ? "600" : "600",
                        fontFamily: "Syne",
                      }}
                    >
                      {chat.userName}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: smallDev ? "12px" : "14px",
                          maxWidth: smallDev ? "110px" : "210px",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          mr: 2,
                          color: chat.seen
                            ? theme.palette.text.seen
                            : theme.palette.text.primary,
                          fontWeight: !chat.seen ? "600" : "normal",
                          fontFamily: "Syne",
                        }}
                      >
                        {chat.msg}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontSize: smallDev ? "11px" : "13px",
                          fontFamily: "Oswald",
                          color: theme.palette.text.seen,
                        }}
                      >
                        {chat.timeMsgSentIn}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box>
                  {chat.newMsgs > 0 ? (
                    <Typography
                      variant="subtitle1"
                      sx={{
                        width: smallDev ? "20px" : "30px",
                        height: smallDev ? "20px" : "30px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "50%",
                        fontSize: smallDev ? "14px" : "17px",
                        fontWeight: "bold",
                        color: "#fff",
                        backgroundColor: theme.palette.text.greenDegree,
                      }}
                    >
                      {chat.newMsgs}
                    </Typography>
                  ) : null}
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default Chats;
