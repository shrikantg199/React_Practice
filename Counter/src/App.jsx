import { useState } from "react";

const App = () => {
  // set count =0
  const [count, setCount] = useState(0);
  return (
    <div className="">
      <h1 className="text-center m-4 font-semibold font-sans text-6xl text-blue-600">
        Simple Counter
      </h1>
      {/* Display Count */}
      <div className="flex justify-center items-center h-44 text-9xl ">
        <h1>{count}</h1>
      </div>

      <div className="flex gap-2 justify-center items-center h-20">
        {/* if count is greater than 0 then decrement count by 1 otherwise reset counter */}
        <button
          onClick={() => (count > 0 ? setCount(count - 1) : setCount(0))}
          className="bg-red-600 px-4 py-2 rounded-lg text-white text-xl"
        >
          -
        </button>
        {/* Counter Reset */}
        <button
          onClick={() => setCount(0)}
          className="bg-green-600 px-8 py-2 rounded-lg text-white text-lg"
        >
          reset
        </button>
        {/* Counter increment */}
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-600 px-4 py-2 rounded-lg text-white text-xl"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default App;
