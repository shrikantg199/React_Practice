import React, { useState } from "react";
import { Data } from "./components/Data";

const App = () => {
  // set up True or false using state
  const [showMore, setShowMore] = useState(false);
  const text = Data;
  return (
    <div className="bg-gray-600/20 h-screen flex justify-center items-center">
      <div className=" bg-white w-1/2 p-8 rounded-lg">
        {/* if true- it displays the full content */}
        {/* if false- it displays a truncated version of the content */}

        {showMore ? text : text.substring(0, 200)}

        {/* Toggle 'showMore' state when the link is clicked */}
        <a
          className="cursor-pointer text-blue-800 font-medium ml-3"
          onClick={() => setShowMore(!showMore)}
        >
          {/* Display dynamic text based on 'showMore' state */}
          {showMore ? "show less" : "show more"}
        </a>
      </div>
    </div>
  );
};

export default App;
