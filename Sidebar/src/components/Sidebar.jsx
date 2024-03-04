import { FaHome } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoIosCreate } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";
import { toggleFunction } from "./app/Slices";
const Sidebar = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.app.toggle);
  const sidebarItems = [
    {
      icon: <FaHome />,
      name: "Home",
    },
    {
      icon: <MdOutlineDashboardCustomize />,
      name: "Dashboard",
    },
    {
      icon: <IoIosCreate />,
      name: "Create Post",
    },
  ];
  return (
    <>
      <div className="">
        <ul
          className={`h-screen p-2 bg-white shadow-3xl w-60 absolute transition-all ${
            toggle ? "block" : "hidden"
          }`}
        >
          <IoMdClose
            className="text-2xl  ml-14 m-5 cursor-pointer mb-12"
            onClick={() => dispatch(toggleFunction())}
          />
          {sidebarItems.map((item, index) => (
            <li
              key={index}
              className=" pl-1  flex justify-start items-center text-xl m-4 gap-2"
            >
              <span>{item.icon}</span>
              <p className="">{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
