import randomColor from "randomcolor";
import React, { useState } from "react";

function App() {
  const [color, setColor] = useState([]);

  const HandleOnclick = () => {
    const new_color = randomColor({ count: 5 });
    setColor(new_color);
  };

  return (
    <>
      <button onClick={HandleOnclick}>click to change </button>
      {color.map((color) => (
        <div
          key={color}
          style={{
            background: color,
            height: "30px",
            width: "50px",
            margin: "10px",
          }}
        ></div>
      ))}
      {/**<div
        style={{
          background: "red",
          height: "30px ",
          width: "50px",
          margin: "10px",
        }}
      ></div>
      <div
        style={{
          background: "green",
          height: "30px",
          width: "50px",
          margin: "10px",
        }}
      ></div>
      <div
        style={{
          background: "pink",
          height: "30px",
          width: "50px",
          margin: "10px",
        }}
      ></div> */}
    </>
  );
}

export default App;
