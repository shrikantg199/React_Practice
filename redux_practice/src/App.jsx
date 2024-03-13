import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./redux/Slices";

const App = () => {
  const [input, setInput] = useState();
  // Redux hooks for dispatching actions and selecting data from the store
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo.todos);

  const submitHandler = (e) => {
    e.preventDefault();
    // Dispatching the addTodo action with the input value
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <div>
      <form
        action=""
        className="justify-center flex items-center h-32 "
        onSubmit={submitHandler}
      >
        {" "}
        <input
          className="ring-gray-600 border rounded-xl p-2 w-60"
          placeholder="Enter todo"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      {/* Displaying the list of todos */}
      <div className=" justify-center">
        {" "}
        {todo.map((item, id) => (
          <ul className="flex justify-center gap-3" key={item.id}>
            <li>{id + 1}</li>
            <li> {item.text}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default App;
