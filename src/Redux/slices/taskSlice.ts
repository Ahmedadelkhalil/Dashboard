import { createSlice } from "@reduxjs/toolkit";

interface TasksInterface {
  tasks: {
    taskId: number;
    taskTitle: string;
    taskMsg: string;
    taskStatus: string;
    taskDate: string;
    taskDay: string;
    taskTime: string;
    isTaskUpdated: boolean;
  }[];
  starredTasks: TasksInterface["tasks"];
  taskId: number;
}

let InitialTasks;
let InitialStarredTasks;
let InitialTaskId;
if (typeof window !== "undefined") {
  InitialTasks = !!window.localStorage.getItem("Tasks")
    ? [...JSON.parse(window.localStorage.getItem("Tasks")!)]
    : [];
  InitialStarredTasks = !!window.localStorage.getItem("StarredTasks")
    ? [...JSON.parse(window.localStorage.getItem("StarredTasks")!)]
    : [];
  InitialTaskId = !!window.localStorage.getItem("TaskId")
    ? JSON.parse(window.localStorage.getItem("TaskId")!)
    : 0;
}

const initialState: TasksInterface = {
  tasks: InitialTasks!,
  starredTasks: InitialStarredTasks!,
  taskId: InitialTaskId!,
};

const taskSlice = createSlice({
  name: "Tasks",
  initialState,
  reducers: {
    // Adding Task To UI & Local-Storage
    addTask: (state, action) => {
      state.taskId++;
      window.localStorage.setItem("TaskId", JSON.stringify(state.taskId));
      window.localStorage.setItem(
        "Tasks",
        JSON.stringify([
          ...state.tasks,
          {
            taskId: state.taskId,
            taskTitle: action.payload.taskTitle,
            taskMsg: action.payload.taskMsg,
            taskStatus: action.payload.taskStatus,
            taskDate: action.payload.taskDate,
            taskDay: action.payload.taskDay,
            taskTime: action.payload.taskTime,
            isTaskUpdated: action.payload.isTaskUpdated,
          },
        ])
      );
      state.tasks.push({
        taskId: state.taskId,
        taskTitle: action.payload.taskTitle,
        taskMsg: action.payload.taskMsg,
        taskStatus: action.payload.taskStatus,
        taskDate: action.payload.taskDate,
        taskDay: action.payload.taskDay,
        taskTime: action.payload.taskTime,
        isTaskUpdated: action.payload.isTaskUpdated,
      });
    },
    // Remove Task From UI & Local-Storage
    removeTask: (state, action) => {
      const DelTaskFromStore = state.tasks.filter(
        (task) => task.taskId !== action.payload.taskId
      );
      const DelTaskFromStarred = state.starredTasks.filter(
        (task) => task.taskId !== action.payload.taskId
      );
      state.tasks = DelTaskFromStore;
      state.starredTasks = DelTaskFromStarred;
      window.localStorage.setItem("Tasks", JSON.stringify(DelTaskFromStore));
      window.localStorage.setItem(
        "StarredTasks",
        JSON.stringify(DelTaskFromStarred)
      );
      if (state.tasks.length === 0) {
        state.taskId = 0;
        window.localStorage.removeItem("Tasks");
        window.localStorage.removeItem("TaskId");
      }
    },
    // Remove All Tasks
    removeAllTasks: (state) => {
      state.tasks = [];
      state.starredTasks = [];
      state.taskId = 0;
      window.localStorage.removeItem("Tasks");
      window.localStorage.removeItem("TaskId");
      window.localStorage.removeItem("StarredTasks");
    },
    // update Task
    updateTask: (state, action) => {
      const updateTask = state.tasks.find(
        (task) => task.taskId === action.payload.taskId
      );
      const updateStarredTasks = state.starredTasks.find(
        (task) => task.taskId === action.payload.taskId
      );
      // Updating Existing Task
      updateTask!.taskMsg = action.payload.taskMsgUpdated;
      updateTask!.taskTime = action.payload.taskTime;
      updateTask!.taskDate = action.payload.taskDate;
      updateTask!.taskDay = action.payload.taskDay;
      updateTask!.isTaskUpdated = action.payload.isTaskUpdated;
      updateTask!.taskTitle = action.payload.taskTitle;
      updateTask!.taskStatus = action.payload.taskStatus;
      // Updating Existing Task If Its Been Starred Before
      if (updateStarredTasks !== undefined) {
        updateStarredTasks!.taskMsg = action.payload.taskMsgUpdated;
        updateStarredTasks!.taskTime = action.payload.taskTime;
        updateStarredTasks!.taskDate = action.payload.taskDate;
        updateStarredTasks!.taskDay = action.payload.taskDay;
        updateStarredTasks!.isTaskUpdated = action.payload.isTaskUpdated;
        updateStarredTasks!.taskTitle = action.payload.taskTitle;
        updateStarredTasks!.taskStatus = action.payload.taskStatus;
        window.localStorage.setItem(
          "StarredTasks",
          JSON.stringify(state.starredTasks)
        );
      }
      // Store Updates in Local Storage
      window.localStorage.setItem("Tasks", JSON.stringify(state.tasks));
    },
    // Add Task To Starred Tasks
    AddstarredTask: (state, action) => {
      const taskBeingStarred = state.tasks.find(
        (task) => task.taskId === action.payload.taskId
      );
      const checkingIfTaskExistInStarredBefore = state.starredTasks?.find(
        (task) => task!.taskId === taskBeingStarred!.taskId
      );
      if (checkingIfTaskExistInStarredBefore == undefined) {
        window.localStorage.setItem(
          "StarredTasks",
          JSON.stringify([
            ...state.starredTasks,
            {
              taskId: taskBeingStarred!.taskId,
              taskTitle: taskBeingStarred!.taskTitle,
              taskMsg: taskBeingStarred!.taskMsg,
              taskStatus: taskBeingStarred!.taskStatus,
              taskDate: taskBeingStarred!.taskDate,
              taskDay: taskBeingStarred!.taskDay,
              taskTime: taskBeingStarred!.taskTime,
              isTaskUpdated: taskBeingStarred!.isTaskUpdated,
            },
          ])
        );
        state.starredTasks.push({
          taskId: taskBeingStarred!.taskId,
          taskTitle: taskBeingStarred!.taskTitle,
          taskMsg: taskBeingStarred!.taskMsg,
          taskStatus: taskBeingStarred!.taskStatus,
          taskDate: taskBeingStarred!.taskDate,
          taskDay: taskBeingStarred!.taskDay,
          taskTime: taskBeingStarred!.taskTime,
          isTaskUpdated: taskBeingStarred!.isTaskUpdated,
        });
      } else {
        return;
      }
    },
    // Remove Starred Task
    removeStarredTask: (state, action) => {
      const removeStarredTask = state.starredTasks.filter(
        (task) => task.taskId !== action.payload.taskId
      );
      state.starredTasks = removeStarredTask;
      window.localStorage.setItem(
        "StarredTasks",
        JSON.stringify(removeStarredTask)
      );
    },
    // Remove All Starred Tasks
    removeAllStarredTasks: (state) => {
      state.starredTasks = [];
      window.localStorage.removeItem("StarredTasks");
    },
  },
});

export const {
  addTask,
  removeTask,
  removeAllTasks,
  updateTask,
  AddstarredTask,
  removeStarredTask,
  removeAllStarredTasks,
} = taskSlice.actions;
export default taskSlice.reducer;
