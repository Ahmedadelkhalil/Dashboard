import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";

export interface InitialState {
  darkMode: Boolean;
}

const initialState: InitialState = {
  darkMode:
    typeof window !== "undefined"
      ? JSON.parse(window.localStorage.getItem("darkMode")!)
      : "false",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

// thunk function
export const asyncToggleTheme = () => (dispatch: AppDispatch) => {
  const isDarkMode: Boolean =
    typeof window !== "undefined"
      ? JSON.parse(window.localStorage.getItem("darkMode")!)
      : "false";
  localStorage.setItem("darkMode", JSON.stringify(!isDarkMode));
  dispatch(toggleMode());
};

export const { toggleMode } = themeSlice.actions;
export default themeSlice.reducer;
