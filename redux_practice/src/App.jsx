import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./redux/Slices";

const App = () => {
  const [input, setInput] = useState();

  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo.todos);

  const submitHandler = (e) => {
    e.preventDefault();

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
          placeholder="Enter name"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-700 px-3 py-2 m-2 rounded-xl text-white"
        >
          add{" "}
        </button>
      </form>

      <div className=" justify-center flex">
        {" "}
        <table className="table-auto  ">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
            </tr>
          </thead>
          {todo.map((item, id) => (
            <tbody key={item.id}>
              <tr>
                <td>{id + 1}</td>
                <td>{item.text}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default App;
