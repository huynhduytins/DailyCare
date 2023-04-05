import Modal from "../Modal";
import logo from "./../../assets/logo.svg";
import { FaTimes } from "react-icons/fa";
import { useAppContext } from "../../context/appContext";
import Links from "../../utils/Links";
import { NavLink } from "react-router-dom";

const SmallSideBar = () => {
  const { showSidebar, toggleSidebar, linkActive, changeActive } =
    useAppContext();

  return (
    <>
      {showSidebar && (
        <Modal sidebar={true}>
          <div className="relative flex h-[95vh] w-[70vw] flex-col items-center rounded-lg bg-white py-16 px-8">
            <button
              className="absolute top-4 left-4 border-transparent bg-transparent text-3xl text-red-900"
              onClick={toggleSidebar}
            >
              <FaTimes />
            </button>
            <img src={logo} alt="" className="w-1/2" />
            <div className="flex flex-col gap-20 pt-16">
              {Links.map((link) => (
                <NavLink
                  to={link.path}
                  key={link.id}
                  onClick={() => {
                    changeActive(link.id);
                    toggleSidebar();
                  }}
                  className={`flex items-center capitalize  text-green-500 transition-all hover:text-green-400 ${
                    linkActive === link.id ? "text-green-700" : ""
                  }`}
                >
                  <span className="mr-4 text-2xl">{link.icon}</span>
                  {link.text}
                </NavLink>
              ))}
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default SmallSideBar;
