import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

type IsClicked = {
  chat: boolean;
  cart: boolean;
  userProfile: boolean;
  notification: boolean;
};

const initialState: { isClicked: IsClicked } = {
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
    setIsClicked: (state, action: PayloadAction<IsClicked>) => {
      console.log(action.payload);
      state.isClicked = action.payload;
    },
    setToInitialState: (state) => {
      state.isClicked = initialState.isClicked;
    },
  },
});

export default clickSlice.reducer;
export const clickActions = clickSlice.actions;
