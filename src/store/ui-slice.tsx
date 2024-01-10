import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  activeMenu: boolean;
  screenSize: number | undefined;
};

const initialState: InitialState = {
  activeMenu: true,
  screenSize: undefined,
};

const uiSlice = createSlice({
  initialState,
  name: "ui",
  reducers: {
    setActiveMenu: (state, action: PayloadAction<boolean>) => {
      state.activeMenu = action.payload;
    },
    toggleActiveMenu: (state) => {
      state.activeMenu = !state.activeMenu;
    },
    setScreenSize: (state, action: PayloadAction<number>) => {
      state.screenSize = action.payload;
    },
  },
});

export default uiSlice.reducer;
export const uiActions = uiSlice.actions;
