import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import logo from "./../../assets/logo.svg";
import { useAppContext } from "../../context/appContext";
import { useState } from "react";

const Navbar = () => {
  const { toggleSidebar, username, logoutUser } = useAppContext();
  const [showLogout, setShowLogout] = useState(false);

  return (
    <nav className="sticky top-0 flex h-28 w-full items-center justify-between border-b-[1px] bg-white px-20 pt-4 shadow-[0.6px_5px_5px_-6px_#333]">
      <button
        className="cursor-pointer border-transparent bg-transparent text-2xl text-green-500 hover:text-green-400 "
        onClick={toggleSidebar}
      >
        <FaAlignLeft />
      </button>
      <div>
        <img src={logo} alt="" className="hidden" />
        <h3 className="invisible hidden text-3xl md:block">Bảng Điều Khiển</h3>
      </div>
      <div className="relative font-bold">
        <button
          className="relative flex items-center justify-center gap-4 rounded-md bg-green-500 px-3 py-1 capitalize text-white hover:bg-green-400"
          onClick={() => setShowLogout(!showLogout)}
        >
          <FaUserCircle />
          {username}
          <FaCaretDown />
        </button>
        {showLogout && (
          <div
            className=" absolute top-10 left-0 w-full cursor-pointer rounded-md bg-green-500 p-2 text-center text-white hover:bg-green-400"
            onClick={logoutUser}
          >
            <button className="z-50 bg-transparent">Logout</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
