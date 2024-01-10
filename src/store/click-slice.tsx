import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

const clickSlice = createSlice({
  initialState,
  name: "click",
  reducers: {},
});

export default clickSlice.reducer
export const clickActions = clickSlice.actions