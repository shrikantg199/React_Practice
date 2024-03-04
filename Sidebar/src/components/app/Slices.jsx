import { createSlice } from "@reduxjs/toolkit";
const Slices = createSlice({
  name: "app",
  initialState: {
    toggle: false,
  },
  reducers: {
    toggleFunction: (state) => {
      state.toggle = !state.toggle;
    },
  },
});
export const { toggleFunction } = Slices.actions;
export default Slices.reducer;
