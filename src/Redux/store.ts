import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import themeSlice from "./slices/themeSlice";
import sideBarMenuSlice from "./slices/sideBarMenuSlice";
import taskSlice from "./slices/taskSlice";

const store = configureStore({
  reducer: {
    theme: themeSlice,
    sideBarMenu: sideBarMenuSlice,
    tasks: taskSlice,
  },
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); // custom dispatch hook
export type IRootState = ReturnType<typeof store.getState>;
export default store;
