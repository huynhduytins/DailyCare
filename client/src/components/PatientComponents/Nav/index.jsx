import { Link } from "react-router-dom";
import { FaSearch, FaPhoneAlt, FaPowerOff } from "react-icons/fa";
import { useAppContext } from "../../../context/appContext";

const NavbarPatient = (props) => {
  const { logoutUser } = useAppContext();

  return (
    <header>
      <nav
        className={`fixed top-0 z-50 w-full px-6 py-3 ${
          props.changeScroll && "bg-slate-50 shadow-lg"
        } transition duration-150 ease-out`}
      >
        <div className="flex items-center justify-between font-semibold text-[#1f2278]">
          <img
            src="../../../src/assets/menu.svg"
            alt=""
            className="block md:hidden"
          />
          <div className="hidden basis-1/6 justify-center  md:flex">
            <img
              src="../../../src/assets/logo2.png"
              alt="logo"
              className="w-56"
            />
          </div>
          <ul className="hidden basis-2/5 justify-between md:flex">
            <li>
              <Link
                to="#"
                className="inline-block py-7 px-3 hover:text-[#F17732]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="inline-block py-7 px-3 hover:text-[#F17732]"
              >
                Pages
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="inline-block py-7 px-3 hover:text-[#F17732]"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="inline-block py-7 px-3 hover:text-[#F17732]"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="inline-block py-7 px-3 hover:text-[#F17732]"
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <ul className="flex basis-1/3 items-center justify-end gap-10">
            <li>
              <FaSearch className="cursor-pointer text-lg text-[#565ACF]" />
            </li>
            <li className="hidden items-center gap-3 text-xl font-bold lg:flex">
              <FaPhoneAlt className="cursor-pointer text-lg text-[#565ACF]" />
              <p>(+84) 999 888 777</p>
            </li>
            <li>
              <button
                className="button-client bg-[#565ACF] hover:bg-[#6065e6]"
                onClick={logoutUser}
              >
                LOGOUT <FaPowerOff className="text-lg" />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavbarPatient;
