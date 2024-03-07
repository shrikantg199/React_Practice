import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isActive, setIsactive] = useState(false);
  const NavigationHandler = () => {
    setIsactive(!isActive);
  };
  const navigation = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },

    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <>
      <div className="bg-white  justify-between text-xl items-center flex absolute  h-16 w-screen text-">
        <div className="sm:ml-10 m-4 gap-2 flex items-center justify-center ">
          <GiHamburgerMenu
            className="sm:hidden text-2xl cursor-pointer"
            onClick={NavigationHandler}
          />
          <h1>Logo</h1>
        </div>
        <div className="hidden sm:block">
          <ul className="  flex justify-center items-center gap-8 text-xl mr-20 ">
            {navigation.map((item, index) => (
              <Link key={index} to={item.link}>
                {" "}
                <li>{item.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>

      {/* mobile */}

      <div
        className={`bg-white h-screen sm:hidden w-60 relative transition-all duration-800  ${
          isActive ? "block" : "hidden"
        }`}
      >
        <ul className="text-center p-12  text-xl mr-20 w-60 ">
          <IoMdClose
            className="ml-14 text-2xl cursor-pointer"
            onClick={() => setIsactive(!isActive)}
          />
          {navigation.map((item, index) => (
            <li className="m-4" key={index}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
