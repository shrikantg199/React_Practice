import { configureStore } from "@reduxjs/toolkit";
import Slices from "./Slices";
export const store = configureStore({
  reducer: {
    todo: Slices,
  },
});
