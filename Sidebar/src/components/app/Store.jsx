import { configureStore } from "@reduxjs/toolkit";
import ToggleE from "./Slices";
export const Store = configureStore({
  reducer: {
    app: ToggleE,
  },
});
