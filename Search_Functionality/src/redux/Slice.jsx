import { createSlice } from "@reduxjs/toolkit";
const todos = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
      };
      state.todos.push(newTodo);
    },
  },
});
export const { addTodo } = todos.actions;
export default todos.reducer;
