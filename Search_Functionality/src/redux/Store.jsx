import { configureStore } from "@reduxjs/toolkit";
import todos from "./Slice";
export const Store = configureStore({
  reducer: {
    todo: todos,
  },
});
