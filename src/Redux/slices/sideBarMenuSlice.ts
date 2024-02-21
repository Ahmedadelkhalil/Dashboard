import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";

interface SideBarMenu {
  isOpen: boolean;
}

const initialState: SideBarMenu = {
  isOpen:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("sideMenuBarOpen")!)
      : "false",
};

const sideBarSlice = createSlice({
  name: "sideBar",
  initialState,
  reducers: {
    toggleSideBarMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const asyncToggleSideMenuBar = () => (dispatch: AppDispatch) => {
  const isSideBarMenuOpen: boolean =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("sideMenuBarOpen")!)
      : "false";
  window.localStorage.setItem(
    "sideMenuBarOpen",
    JSON.stringify(!isSideBarMenuOpen)
  );
  dispatch(toggleSideBarMenu());
};

export const { toggleSideBarMenu } = sideBarSlice.actions;
export default sideBarSlice.reducer;
