import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isClicked: {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
  },
};

const clickSlice = createSlice({
  initialState,
  name: "click",
  reducers: {
    handleClick: (state, action: PayloadAction<string>) => {
      state.isClicked = { ...state.isClicked, [action.payload]: true };
    },
  },
});

export default clickSlice.reducer;
export const clickActions = clickSlice.actions;
