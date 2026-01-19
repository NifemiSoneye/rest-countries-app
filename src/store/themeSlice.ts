import { createSlice } from "@reduxjs/toolkit";

type themeState = {
  theme: "dark" | "light"; // Only allow these two values
};

const initialState: themeState = {
  theme: "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
