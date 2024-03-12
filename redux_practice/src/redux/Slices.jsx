import { createSlice } from "@reduxjs/toolkit";
const addSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [{ id: 1, text: "hello" }],
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: new Date(),
        text: action.payload,
      };
      state.todos.push(newTodo);
    },
  },
});
export const { addTodo } = addSlice.actions;
export default addSlice.reducer;
