import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import templateReducer from "./template-slice";
import uiReducer from "./ui-slice";
import clickReducer from "./click-slice";

const store = configureStore({
  reducer: {
    template: templateReducer,
    ui: uiReducer,
    click: clickReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
