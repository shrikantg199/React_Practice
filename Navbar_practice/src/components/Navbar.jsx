// Navbar.js

import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isactive, setIsactive] = useState(false);
  const clickhandler = () => {
    setIsactive(!isactive);
    console.log(isactive);
  };
  return (
    <>
      {/* desktop */}
      <nav className={`text-black sm:block hidden bg-red-600 h-8 `}>
        <ul className="flex justify-center gap-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <button className=" text-black sm:hidden block " onClick={clickhandler}>
        click
      </button>
      {/* mobile */}
      <nav
        className={`text-black sm:hidden ${
          isactive ? "block" : "hidden"
        }  transition-all`}
      >
        <ul className="bg-red-600 h-32">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
