import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./redux/Slice";
import { MdOutlinePlaylistAdd } from "react-icons/md";
const App = () => {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const data = useSelector((state) => state.todo.todos);
  const filterData = data.filter((item) =>
    item.text.replace(/\s/g, "").toLowerCase().includes(search.toLowerCase())
  );
  const searchHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (input === "") {
      return null;
    }
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <>
      <div className=" flex justify-center items-center">
        <form action="" className="flex" onSubmit={submitHandler}>
          {" "}
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg m-3 text-black  block py-3 px-4 w-96  focus:outline-none dark:focus:ring-blue-500 "
            placeholder="Add Todo"
            required
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit ">
            {" "}
            <MdOutlinePlaylistAdd className="text-md rounded-lg text-white m-3 bg-blue-700 w-12 h-10" />
          </button>{" "}
        </form>
      </div>

      <form className="flex justify-center items-center max-w-sm mx-auto">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
              />
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg   text-black  block  py-3 px-8 w-[350px]    dark:focus:outline-none"
            placeholder="Search Todo ..."
            required
            value={search}
            onChange={searchHandler}
          />
        </div>
        <button className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </form>
      <div className="">
        {filterData.map((item, index) => (
          <ul
            key={index}
            className="flex justify-start ml-[90vh] text-start gap-3  items-start m-4"
          >
            {" "}
            <li>{index + 1}</li>
            <li className="list-none">{item.text}</li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default App;
