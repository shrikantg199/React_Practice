import { GiHamburgerMenu } from "react-icons/gi";

import { useDispatch } from "react-redux";
import { toggleFunction } from "./app/Slices";
const Navbar = () => {
  const dispatch = useDispatch();
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
      name: "Services",
      link: "/services",
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
            className=" cursor-pointer text-2xl"
            onClick={() => dispatch(toggleFunction())}
          />
          <h1>Logo</h1>
        </div>
        <div className="hidden sm:block">
          <ul className=" flex justify-center items-center gap-8 text-xl mr-20 ">
            {navigation.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
