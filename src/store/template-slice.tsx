import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  currentColor: "#03C9D7",
  currentMode: "Light",
  themeSettings: false,
};

const templateSlice = createSlice({
  initialState,
  name: "template",
  reducers: {
    setCurrentColor: (state, action: PayloadAction<string>) => {
      state.currentColor = action.payload;
    },
    setCurrentMode: (state, action: PayloadAction<string>) => {
      state.currentMode = action.payload;
    },
    setThemeSettings: (state, action: PayloadAction<boolean>) => {
      state.themeSettings = action.payload;
    },
  },
});

export default templateSlice.reducer;
export const templateActions = templateSlice.actions;
