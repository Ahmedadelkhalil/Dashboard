"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
// Mui Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Theme, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
// Section Header
import SectionHeader from "@/global/section_header/sectionHeader";
// Animation Library
import { useAutoAnimate } from "@formkit/auto-animate/react";
// Redux
import { useAppDispatch } from "@/Redux/store";
import { IRootState } from "@/Redux/store";
import { useSelector } from "react-redux";
import {
  addTask,
  removeTask,
  removeAllTasks,
  updateTask,
  AddstarredTask,
  removeStarredTask,
  removeAllStarredTasks,
} from "@/Redux/slices/taskSlice";
// Day.js
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
// Icons
import AddIcon from "@mui/icons-material/Add";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
// Types
import { TaskStatus, WeekDays } from "@/types/tasksTypes";

// Variables
const status: TaskStatus = [
  {
    title: "New",
    value: "new",
    color: "#24a0ed",
  },
  {
    title: "In Progress",
    value: "in progress",
    color: "#ec24a0",
  },
  {
    title: "Friends",
    value: "friends",
    color: "#a324ec",
  },
  {
    title: "In House",
    value: "in house",
    color: "#ec243b",
  },
  {
    title: "Study",
    value: "study",
    color: "#639504",
  },
  {
    title: "Work",
    value: "work",
    color: "#3F51B5",
  },
  {
    title: "School",
    value: "school",
    color: "#880E4F",
  },
  {
    title: "Family",
    value: "family",
    color: "#009688",
  },
  {
    title: "Meetings",
    value: "meetings",
    color: "#004080",
  },
  {
    title: "Other",
    value: "other",
    color: "#FF5722",
  },
];
const weekDays: WeekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const TaskPage = () => {
  // MEDIA-QUERY
  const extraSmallDev = useMediaQuery("(max-width:350px)");
  const smallDev = useMediaQuery("(min-width:700px)");
  const MediumDev = useMediaQuery("(min-width:900px) and (max-width:1150px)");
  const LgDev = useMediaQuery("(min-width:1500px)");
  // TASKS
  const [inptValue, setInputValue] = useState<string>("");
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [creationMode, setCreationMode] = useState<boolean>(true);
  const [taskIdBeingUpdate, setTaskIdBeingUpdate] = useState<number>();
  const [taskStatus, setTaskStatus] = useState<string>("");
  dayjs.extend(localizedFormat);
  const NoteFullDateOfCreation = dayjs(new Date()).format("L");
  const NoteFullTimeOfCreation = dayjs(new Date()).format("LTS");
  const NoteDayOfCreation = weekDays[dayjs(new Date()).day()];
  const [showTasks, setShowTasks] = useState<boolean>(false);
  useEffect(() => {
    setShowTasks(true);
  }, []);
  const theme: Theme = useTheme();
  const [parent] = useAutoAnimate();
  // MODAL
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  // ACTIONS INTEGRATION
  const dispatch = useAppDispatch();
  const myTasks = useSelector((state: IRootState) => state.tasks.tasks);
  const starredTasks = useSelector(
    (state: IRootState) => state.tasks.starredTasks
  );
  // VALIDATION
  // TASK TITLE FIELD VALIDATION
  const [inputErr_TaskTitle, setinputErr_TaskTitle] = useState<string>();
  const [isTaskTitleValid, setIsTaskTitleValid] = useState<boolean>(false);
  const [isTaskTitleFieldChangeNow, setIsTaskTitleFieldChangeNow] =
    useState<boolean>(false);

  const titleValidationChecking = (value: string) => {
    if (value.length === 0) {
      setIsTaskTitleFieldChangeNow(true);
      setinputErr_TaskTitle("Required");
      setIsTaskTitleValid(false);
    } else if (value.length > 15) {
      setIsTaskTitleFieldChangeNow(true);
      setinputErr_TaskTitle("Task Title Lenght Must Be Between 0 and 15");
      setIsTaskTitleValid(false);
    } else {
      setIsTaskTitleFieldChangeNow(true);
      setinputErr_TaskTitle("");
      setIsTaskTitleValid(true);
    }
  };
  // TASK MESSAGE FIELD VALIDATION
  const [inputErr_TaskMsg, setinputErr_TaskMsg] = useState<string>();
  const [isTaskMsgValid, setIsTaskMsgValid] = useState<boolean>(false);
  const [isTaskMsgFieldChangeNow, setIsTaskMsgFieldChangeNow] =
    useState<boolean>(false);

  const MsgValidationChecking = (value: string) => {
    if (value.length === 0) {
      setIsTaskMsgFieldChangeNow(true);
      setinputErr_TaskMsg("Required");
      setIsTaskMsgValid(false);
    } else if (value.length > 100) {
      setIsTaskMsgFieldChangeNow(true);
      setinputErr_TaskMsg("Task Title Lenght Must Be Between 0 and 100");
      setIsTaskMsgValid(false);
    } else {
      setIsTaskMsgFieldChangeNow(true);
      setinputErr_TaskMsg("");
      setIsTaskMsgValid(true);
    }
  };
  // TASK STATUS FIELD VALIDATION
  const [inputErr_TaskStatus, setInputErr_TaskStatus] = useState<string>();
  const [isTaskStatusValid, setIsTaskStatusValid] = useState<boolean>(false);
  const [isTaskStatusFieldChangeNow, setIsTaskStatusFieldChangeNow] =
    useState<boolean>(false);

  const statusValidationChecking = (value: string) => {
    if (!value) {
      setIsTaskStatusFieldChangeNow(true);
      setIsTaskStatusValid(false);
      setInputErr_TaskStatus("Required");
    } else {
      setIsTaskStatusFieldChangeNow(true);
      setIsTaskStatusValid(true);
      setInputErr_TaskStatus("");
    }
  };
  return (
    showTasks && (
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
          <SectionHeader currentPage="Tasks" />
          <Button
            sx={{
              backgroundColor: "green",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              "&:hover": {
                backgroundColor: "green",
              },
            }}
            variant="contained"
            onClick={() => {
              handleOpenModal();
            }}
          >
            <AddIcon fontSize="small" />
            <Typography
              variant="caption"
              component="span"
              sx={{
                fontSize: "11px",
                fontFamily: "Syne",
                ml: 0.5,
              }}
            >
              Start a New Task
            </Typography>
          </Button>
          <Box component="form" autoComplete="off">
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={openModal}
              onClose={handleCloseModal}
              closeAfterTransition
              hideBackdrop={true}
            >
              <Fade in={openModal}>
                <Box
                  sx={{
                    position: "absolute" as "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "90%",
                    mx: "auto",
                    [theme.breakpoints.up("sm")]: {
                      width: "500px",
                    },
                    bgcolor: "background.paper",
                    border: `1px solid ${theme.palette.text.primary}`,
                    boxShadow: 24,
                    p: 4,
                  }}
                >
                  <Box>
                    <TextField
                      error={isTaskTitleValid ? true : false}
                      label="Task Title"
                      variant="outlined"
                      sx={{
                        width: "100%",
                        "& .MuiOutlinedInput-root": {
                          "&.Mui-focused fieldset": {
                            borderWidth: "1px",
                            borderColor: isTaskTitleFieldChangeNow
                              ? isTaskTitleValid
                                ? theme.palette.text.primary
                                : "red"
                              : theme.palette.text.primary,
                          },
                        },
                        "& label.Mui-focused": {
                          color: isTaskTitleFieldChangeNow
                            ? isTaskTitleValid
                              ? theme.palette.text.primary
                              : "red"
                            : theme.palette.text.primary,
                        },
                      }}
                      focused
                      required
                      value={taskTitle}
                      onChange={(e) => {
                        setTaskTitle(e.target.value);
                        titleValidationChecking(e.target.value);
                      }}
                    />
                    {!isTaskTitleValid ? (
                      <Typography
                        variant="caption"
                        sx={{
                          color: theme.palette.text.error,
                        }}
                      >
                        {inputErr_TaskTitle}
                      </Typography>
                    ) : (
                      ""
                    )}
                  </Box>
                  <Box
                    sx={{
                      my: "15px",
                    }}
                  >
                    <TextField
                      label="Task Message"
                      variant="outlined"
                      sx={{
                        width: "100%",
                        "& .MuiOutlinedInput-root": {
                          "&.Mui-focused fieldset": {
                            borderWidth: "1px",
                            borderColor: isTaskMsgFieldChangeNow
                              ? isTaskMsgValid
                                ? theme.palette.text.primary
                                : "red"
                              : theme.palette.text.primary,
                          },
                        },
                        "& label.Mui-focused": {
                          color: isTaskMsgFieldChangeNow
                            ? isTaskMsgValid
                              ? theme.palette.text.primary
                              : "red"
                            : theme.palette.text.primary,
                        },
                      }}
                      focused
                      required
                      value={inptValue}
                      onChange={(e) => {
                        setInputValue(e.target.value);
                        MsgValidationChecking(e.target.value);
                      }}
                    />
                    {!isTaskMsgValid ? (
                      <Typography
                        variant="caption"
                        sx={{
                          color: theme.palette.text.error,
                        }}
                      >
                        {inputErr_TaskMsg}
                      </Typography>
                    ) : (
                      ""
                    )}
                  </Box>
                  <Box
                    sx={{
                      my: "15px",
                    }}
                  >
                    <TextField
                      select
                      name="status"
                      label="Status"
                      sx={{
                        width: "100%",
                        "& .MuiOutlinedInput-root": {
                          "&.Mui-focused fieldset": {
                            borderWidth: "1px",
                            borderColor: isTaskStatusFieldChangeNow
                              ? isTaskStatusValid
                                ? theme.palette.text.primary
                                : "red"
                              : theme.palette.text.primary,
                          },
                        },
                        "& label.Mui-focused": {
                          color: isTaskStatusFieldChangeNow
                            ? isTaskStatusValid
                              ? theme.palette.text.primary
                              : "red"
                            : theme.palette.text.primary,
                        },
                        "& svg": {
                          color: theme.palette.text.primary,
                        },
                      }}
                      SelectProps={{
                        MenuProps: {
                          sx: { height: "300px" },
                        },
                      }}
                      focused
                      required
                      value={taskStatus}
                      onChange={(e) => {
                        setTaskStatus(e.target.value);
                        statusValidationChecking(e.target.value);
                      }}
                    >
                      {status.map((select, indx) => (
                        <MenuItem key={indx} value={select.value}>
                          {select.title}
                        </MenuItem>
                      ))}
                    </TextField>
                    {!isTaskStatusValid ? (
                      <Typography
                        variant="caption"
                        sx={{
                          color: theme.palette.text.error,
                        }}
                      >
                        {inputErr_TaskStatus}
                      </Typography>
                    ) : (
                      ""
                    )}
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "end",
                      alignItems: "center",
                    }}
                  >
                    {creationMode ? (
                      <Button
                        variant="outlined"
                        type="submit"
                        sx={{
                          mx: 1,
                          fontFamily: "Syne",
                          fontWeight: "700",
                          color: "green",
                          borderColor: theme.palette.text.success,
                          "&:hover": {
                            borderColor: "green",
                            backgroundColor: "rgba(102, 187, 106, 0.158)",
                          },
                        }}
                        onClick={() => {
                          if (taskTitle && inptValue && taskStatus) {
                            handleCloseModal();
                            dispatch(
                              addTask({
                                taskTitle: taskTitle,
                                taskMsg: inptValue,
                                taskStatus: taskStatus,
                                taskDate: NoteFullDateOfCreation,
                                taskDay: NoteDayOfCreation,
                                taskTime: NoteFullTimeOfCreation,
                                isTaskUpdated: false,
                              })
                            );
                            setTaskTitle("");
                            setInputValue("");
                            setTaskStatus("");
                          } else {
                            titleValidationChecking(taskTitle);
                            MsgValidationChecking(inptValue);
                            statusValidationChecking(taskStatus);
                          }
                        }}
                      >
                        Create
                      </Button>
                    ) : (
                      <Button
                        variant="outlined"
                        type="submit"
                        sx={{
                          mx: 1,
                          fontFamily: "Syne",
                          fontWeight: "700",
                          color: "green",
                          borderColor: theme.palette.text.success,
                          "&:hover": {
                            borderColor: "green",
                            backgroundColor: "rgba(102, 187, 106, 0.158)",
                          },
                        }}
                        onClick={() => {
                          if (taskTitle && inptValue && taskStatus) {
                            dispatch(
                              updateTask({
                                taskId: taskIdBeingUpdate,
                                taskTitle: taskTitle,
                                taskMsgUpdated: inptValue,
                                taskStatus: taskStatus,
                                taskDate: NoteFullDateOfCreation,
                                taskDay: NoteDayOfCreation,
                                taskTime: NoteFullTimeOfCreation,
                                isTaskUpdated: true,
                              })
                            );
                            setCreationMode(true);
                            setInputValue("");
                            setTaskTitle("");
                            setTaskStatus("");
                            setTaskIdBeingUpdate(0);
                            handleCloseModal();
                          } else {
                            titleValidationChecking(taskTitle);
                            MsgValidationChecking(inptValue);
                            statusValidationChecking(taskStatus);
                          }
                        }}
                      >
                        Finish Update
                      </Button>
                    )}
                    <Button
                      variant="outlined"
                      color="error"
                      sx={{
                        fontFamily: "Syne",
                        fontWeight: "700",
                      }}
                      onClick={() => {
                        setCreationMode(true);
                        setTaskIdBeingUpdate(0);
                        handleCloseModal();
                        setTaskTitle("");
                        setInputValue("");
                        setTaskStatus("");
                        setIsTaskTitleValid(true);
                        setIsTaskMsgValid(true);
                        setIsTaskStatusValid(true);
                      }}
                    >
                      Cancel
                    </Button>
                  </Box>
                </Box>
              </Fade>
            </Modal>
          </Box>
          <Box
            sx={{
              mt: 5,
            }}
            ref={parent}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: !smallDev ? "column" : "row",
                justifyContent: !smallDev ? "center" : "space-between",
                alignItems: !smallDev ? "center" : "start",
                my: 2,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "700",
                  fontFamily: "Syne",
                }}
              >
                Starred Tasks
              </Typography>
              {starredTasks.length > 0 ? (
                <Button
                  size="small"
                  variant="contained"
                  color="error"
                  onClick={() => dispatch(removeAllStarredTasks())}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontFamily: "Oswald",
                  }}
                >
                  <DeleteIcon
                    fontSize="small"
                    sx={{
                      mr: 1,
                    }}
                  />
                  {`Delete All Starred ( ${starredTasks.length} )`}
                </Button>
              ) : (
                ""
              )}
            </Box>
            {starredTasks.length === 0 ? (
              <Typography
                component="p"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  fontFamily: "Syne",
                  fontSize: "14px",
                }}
              >
                <Image
                  src="/images/tasks/Task-cuate.svg"
                  alt=""
                  width={200}
                  height={200}
                />
                There Are No Starred Tasks Added Yet...
              </Typography>
            ) : (
              <>
                <Grid container ref={parent}>
                  {starredTasks.map((starredItem, indx) => {
                    const statusColor = status.find(
                      (state) => state.value === starredItem.taskStatus
                    );
                    return (
                      <Grid
                        key={indx}
                        item
                        xs={smallDev ? 6 : 12}
                        sm={6}
                        md={MediumDev ? 6 : 4}
                        lg={LgDev ? 3 : 4}
                      >
                        <Box
                          className="container"
                          sx={{
                            color: "#fff",
                            mx: "auto",
                            m: 1,
                            border: `2px solid ${theme.palette.text.primary}`,
                          }}
                        >
                          <Box
                            sx={{
                              position: "relative",
                              minHeight: "250px",
                              backgroundColor: theme.palette.background.paper,
                              borderBottom: `0.5px solid ${theme.palette.text.primary}`,
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                background: "black",
                                mb: 2,
                                py: 1,
                                px: 2,
                              }}
                              className="part_01"
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "column-reverse",
                                }}
                              >
                                <Typography
                                  variant="caption"
                                  sx={{
                                    fontFamily: "Oswald",
                                    letterSpacing: 1,
                                  }}
                                >
                                  {starredItem.taskDate}
                                </Typography>
                                <Typography
                                  component="h6"
                                  sx={{
                                    fontSize: "17px",
                                    maxWidth: "150px",
                                    [theme.breakpoints.up("lg")]: {
                                      maxWidth: "200px",
                                    },
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    fontFamily: "Syne",
                                    fontWeight: "600",
                                  }}
                                >
                                  {starredItem.taskTitle}
                                </Typography>
                              </Box>
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "row-reverse",
                                  alignItems: "center",
                                }}
                              >
                                <DeleteIcon
                                  fontSize="small"
                                  sx={{
                                    cursor: "pointer",
                                    ml: 1,
                                    transition: "color 0.3s ease",
                                    "&:hover": {
                                      color: "#d32f2f",
                                    },
                                  }}
                                  onClick={() =>
                                    dispatch(
                                      removeStarredTask({
                                        taskId: starredItem.taskId,
                                      })
                                    )
                                  }
                                />
                                <StarIcon
                                  fontSize="small"
                                  sx={{
                                    cursor: "pointer",
                                    color: "yellow",
                                  }}
                                />
                              </Box>
                            </Box>
                            <Box
                              className="part_02"
                              sx={{
                                color: theme.palette.text.primary,
                                py: 1,
                                px: 2,
                              }}
                            >
                              <Typography
                                component="p"
                                sx={{
                                  fontFamily: "Syne",
                                  fontWeight: "500",
                                  whiteSpace: "pre-wrap",
                                  wordBreak: "break-all",
                                }}
                              >
                                {starredItem.taskMsg}
                              </Typography>
                            </Box>
                            <Typography
                              component="span"
                              sx={{
                                width: "100px",
                                textAlign: "center",
                                backgroundColor: statusColor?.color,
                                position: "absolute",
                                right: 20,
                                bottom: 0,
                                transform: "translateY(35%)",
                                p: "5px",
                                fontSize: "14px",
                                letterSpacing: "0.5px",
                                fontFamily: "Syne",
                                fontWeight: "500",
                                border: `2px solid ${theme.palette.text.primary}`,
                                textTransform: "capitalize",
                              }}
                            >
                              {starredItem.taskStatus}
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              backgroundColor: "#f7f6f7",
                              color: "#000",
                              display: "flex",
                              alignItems: "center",
                              borderTop: `0.5px solid ${theme.palette.text.primary}`,
                              py: 1,
                              px: 2,
                            }}
                          >
                            <AccessTimeIcon fontSize="small" />
                            <Typography
                              component="p"
                              sx={{
                                ml: 1,
                                fontFamily: "Oswald",
                                fontSize: "16px",
                              }}
                            >
                              {`${
                                starredItem.isTaskUpdated
                                  ? `Updated On ${starredItem.taskTime} ${starredItem.taskDay} `
                                  : `${starredItem.taskTime} ${starredItem.taskDay}`
                              }`}
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                    );
                  })}
                </Grid>
              </>
            )}
          </Box>
          <Divider
            sx={{
              "&::before, &::after": {
                borderColor: theme.palette.text.primary,
              },
            }}
          >
            <Chip
              label="“Hard tasks need hard ways.”"
              size="small"
              sx={{
                my: 5,
                fontFamily: "Syne",
                fontWeight: 500,
                textTransform: "capitalize",
              }}
            />
          </Divider>
          <Box ref={parent}>
            <Box
              sx={{
                display: "flex",
                flexDirection: !smallDev ? "column" : "row",
                justifyContent: !smallDev ? "center" : "space-between",
                alignItems: !smallDev ? "center" : "start",
                mb: 2,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "700",
                  fontFamily: "Syne",
                }}
              >
                My Tasks
              </Typography>
              {myTasks.length > 0 ? (
                <Button
                  size="small"
                  variant="contained"
                  color="error"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontFamily: "Oswald",
                  }}
                  onClick={() => dispatch(removeAllTasks())}
                >
                  <DeleteIcon
                    fontSize="small"
                    sx={{
                      mr: 1,
                    }}
                  />
                  {`Delete All Tasks ( ${myTasks.length} )`}
                </Button>
              ) : (
                ""
              )}
            </Box>
            {myTasks.length === 0 ? (
              <Typography
                component="p"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  fontFamily: "Syne",
                  fontSize: "14px",
                }}
              >
                <Image
                  src="/images/tasks/Task-bro.svg"
                  alt=""
                  width={200}
                  height={200}
                />
                There Are No Tasks Added Yet...
              </Typography>
            ) : (
              <>
                <Grid container ref={parent}>
                  {myTasks.map((task, indx) => {
                    const statusColor = status.find(
                      (state) => state.value === task.taskStatus
                    );
                    return (
                      <Grid
                        key={indx}
                        item
                        xs={smallDev ? 6 : 12}
                        sm={6}
                        md={MediumDev ? 6 : 4}
                        lg={LgDev ? 3 : 4}
                      >
                        <Box
                          className="container"
                          sx={{
                            color: "#fff",
                            mx: "auto",
                            m: 1,
                            border: `2px solid ${theme.palette.text.primary}`,
                          }}
                        >
                          <Box
                            sx={{
                              position: "relative",
                              minHeight: "250px",
                              backgroundColor: theme.palette.background.paper,
                              borderBottom: `0.5px solid ${theme.palette.text.primary}`,
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                background: "black",
                                mb: 2,
                                py: 1,
                                px: 2,
                              }}
                              className="part_01"
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "column-reverse",
                                }}
                              >
                                <Typography
                                  variant="caption"
                                  sx={{
                                    fontFamily: "Oswald",
                                    letterSpacing: 1,
                                  }}
                                >
                                  {task.taskDate}
                                </Typography>
                                <Typography
                                  component="h6"
                                  sx={{
                                    fontSize: "17px",
                                    maxWidth: "150px",
                                    [theme.breakpoints.up("lg")]: {
                                      maxWidth: "200px",
                                    },
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    fontFamily: "Syne",
                                    fontWeight: "600",
                                  }}
                                >
                                  {task.taskTitle}
                                </Typography>
                              </Box>
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <StarIcon
                                  fontSize="small"
                                  sx={{
                                    cursor: "pointer",
                                    transition: "color 0.3s ease",
                                    color: starredTasks.find(
                                      (starredTask) =>
                                        starredTask.taskId === task.taskId
                                    )
                                      ? "yellow"
                                      : "",
                                    "&:hover": {
                                      color: "yellow",
                                    },
                                  }}
                                  onClick={() =>
                                    dispatch(
                                      AddstarredTask({
                                        taskId: task.taskId,
                                      })
                                    )
                                  }
                                />
                                <EditIcon
                                  fontSize="small"
                                  sx={{
                                    cursor: "pointer",
                                    mx: 1,
                                    transition: "color 0.3s ease",
                                    "&:hover": {
                                      color: "#388e3c",
                                    },
                                  }}
                                  onClick={() => {
                                    setTaskTitle(task.taskTitle);
                                    setInputValue(task.taskMsg);
                                    setTaskStatus(task.taskStatus);
                                    setCreationMode(false);
                                    setTaskIdBeingUpdate(task.taskId);
                                    handleOpenModal();
                                    setIsTaskTitleValid(true);
                                    setIsTaskMsgValid(true);
                                    setIsTaskStatusValid(true);
                                  }}
                                />
                                <DeleteIcon
                                  fontSize="small"
                                  sx={{
                                    cursor: "pointer",
                                    transition: "color 0.3s ease",
                                    "&:hover": {
                                      color: "#d32f2f",
                                    },
                                  }}
                                  onClick={() =>
                                    dispatch(
                                      removeTask({
                                        taskId: task.taskId,
                                      })
                                    )
                                  }
                                />
                              </Box>
                            </Box>
                            <Box
                              className="part_02"
                              sx={{
                                color: theme.palette.text.primary,
                                py: 1,
                                px: 2,
                                whiteSpace: "pre-wrap",
                                wordBreak: "break-all",
                              }}
                            >
                              <Typography
                                component="p"
                                sx={{
                                  fontFamily: "Syne",
                                  fontWeight: "500",
                                }}
                              >
                                {task.taskMsg}
                              </Typography>
                            </Box>
                            <Typography
                              component="span"
                              sx={{
                                width: "100px",
                                textAlign: "center",
                                backgroundColor: statusColor?.color,
                                position: "absolute",
                                right: 20,
                                bottom: 0,
                                transform: "translateY(35%)",
                                p: "5px",
                                fontSize: "14px",
                                letterSpacing: "0.5px",
                                fontFamily: "Syne",
                                fontWeight: "500",
                                border: `2px solid ${theme.palette.text.primary}`,
                                textTransform: "capitalize",
                              }}
                            >
                              {task.taskStatus}
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              backgroundColor: "#f7f6f7",
                              color: "#000",
                              display: "flex",
                              alignItems: "center",
                              borderTop: `0.5px solid ${theme.palette.text.primary}`,
                              py: 1,
                              px: 2,
                            }}
                          >
                            <AccessTimeIcon fontSize="small" />
                            <Typography
                              component="p"
                              sx={{
                                ml: 1,
                                fontFamily: "Oswald",
                                fontSize: "16px",
                              }}
                            >
                              {`${
                                task.isTaskUpdated
                                  ? `Updated On ${task.taskTime} ${task.taskDay} `
                                  : `${task.taskTime} ${task.taskDay}`
                              }`}
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                    );
                  })}
                </Grid>
              </>
            )}
          </Box>
        </Container>
      </Box>
    )
  );
};

export default TaskPage;
