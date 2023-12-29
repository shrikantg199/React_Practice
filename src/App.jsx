import { useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);
  const handleOnClick = () => {
    if (count === 10) {
      setCount(0);
    } else setCount(count + 1);
  };
  return (
    <>
      <div className="m-5 text-center align-middle header">
        <h1 className="m-2 text-lg">Counter</h1>

        <button
          className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
          onClick={handleOnClick}
        >
          count {count}
        </button>
      </div>
    </>
  );
}
export default App;
