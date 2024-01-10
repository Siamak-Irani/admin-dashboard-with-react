import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeMenu: true,
  screenSize: undefined,
};

const uiSlice = createSlice({
  initialState,
  name: "ui",
  reducers: {
    setctiveMenu: (state, action) => {},
    setScreenSize: (state, action) => {},
  },
});

export default uiSlice.reducer
export const uiActions = uiSlice.actions