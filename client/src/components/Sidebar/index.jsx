import { useAppContext } from "../../context/appContext";
import logo from "./../../assets/logo.svg";
import Links from "../../utils/Links";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { showSidebar } = useAppContext();

  return (
    <div
      className={`-ml-[300px] h-full min-h-screen w-[300px] bg-white transition-all duration-300 ease-in-out ${
        showSidebar ? "lg:-ml-[300px]" : "lg:ml-0"
      } `}
    >
      <div className="sticky top-0">
        <header className="mt-4 flex h-24 items-center justify-center">
          <img src={logo} alt="" className="w-3/4" />
        </header>
        <div className="flex flex-col pt-14">
          {Links.map((link) => (
            <NavLink
              to={link.path}
              key={link.id}
              className="flex items-center py-5 pl-12 capitalize text-green-500 transition-all duration-300 ease-in-out hover:bg-gray-50 hover:pl-14 hover:text-green-700 "
            >
              <span className="mr-4 text-2xl">{link.icon}</span>
              {link.text}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
