import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import logo from "./../../assets/logo.svg";
import { useAppContext } from "../../context/appContext";
import { useState } from "react";

const Navbar = () => {
  const { toggleSidebar, username, logoutUser } = useAppContext();
  const [showLogout, setShowLogout] = useState(false);

  return (
    <div className="flex h-28 w-full items-center justify-between bg-white px-20 pt-4">
      <button
        className="cursor-pointer border-transparent bg-transparent text-2xl text-green-500 "
        onClick={toggleSidebar}
      >
        <FaAlignLeft />
      </button>
      <div>
        <img src={logo} alt="" className="hidden" />
        <h3 className="text-3xl">Dashboard</h3>
      </div>
      <div className="relative font-bold">
        <button
          className="relative flex items-center justify-center gap-4 rounded-md bg-green-500 px-3 py-1 capitalize text-white"
          onClick={() => setShowLogout(!showLogout)}
        >
          <FaUserCircle />
          {username}
          <FaCaretDown />
        </button>
        {showLogout && (
          <div
            className=" absolute top-10 left-0 w-full rounded-md bg-green-500 p-2 text-center text-white"
            onClick={logoutUser}
          >
            <button className="bg-transparent">logout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
