import { useAppContext } from "../../context/appContext";
import logo from "./../../assets/logo.svg";
import Links from "../../utils/Links";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { showSidebar, linkActive, changeActive } = useAppContext();

  return (
    <div
      className={`sticky top-0 -ml-[300px] h-full min-h-screen w-[250px] min-w-[300px] bg-white transition-all duration-300 ease-in-out ${
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
              className={`nav-link ${
                linkActive === link.id ? "pl-14 text-green-700" : ""
              }`}
              onClick={() => changeActive(link.id)}
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
