import { createSlice } from "@reduxjs/toolkit";
const todos = createSlice({
  name: "todo",
  initialState: {
    todos: [{ id: 1, text: hello }],
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
