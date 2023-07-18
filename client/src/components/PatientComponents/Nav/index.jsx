import { Link } from "react-router-dom";
import { FaSearch, FaPhoneAlt, FaPowerOff } from "react-icons/fa";
import { useAppContext } from "../../../context/appContext";
import DropDown from "../DropDown";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const NavbarPatient = (props) => {
  const { logoutUser } = useAppContext();
  const [hover, setHover] = useState(false);
  const [t, i18n] = useTranslation("global");
  const [language, setLanguage] = useState("vietnam");

  const handleChangeLanguage = () => {
    if (language === "vietnam") {
      setLanguage("usa");
      i18n.changeLanguage("en");
    } else {
      setLanguage("vietnam");
      i18n.changeLanguage("vi");
    }
  };

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
              src="../../../src/assets/logo.svg"
              alt="logo"
              className="w-56"
            />
          </div>
          <ul className="hidden basis-2/5 justify-between md:flex">
            <li>
              <Link
                to="/user"
                className="inline-block py-7 px-3 hover:text-[#F17732]"
              >
                {t("header.home")}
              </Link>
            </li>
            <li
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <Link
                to="#"
                className="inline-block py-7 px-3 hover:text-[#F17732]"
              >
                {t("header.pages")}
              </Link>
              <DropDown hover={hover} />
            </li>
            <li>
              <Link
                to="doctors"
                className="inline-block py-7 px-3 hover:text-[#F17732]"
              >
                {t("header.doctors")}
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="inline-block py-7 px-3 hover:text-[#F17732]"
              >
                {t("header.blog")}
              </Link>
            </li>
            <li>
              <Link
                to="profile"
                className="inline-block py-7 px-3 hover:text-[#F17732]"
              >
                {t("header.profile")}
              </Link>
            </li>
          </ul>
          <ul className="flex basis-1/6 items-center justify-between">
            <li>
              <button onClick={handleChangeLanguage}>
                <img
                  src={`../../../../../src/assets/${language}.png`}
                  alt=""
                  className="w-[35px]"
                />
              </button>
            </li>
            <li>
              <button
                className="button-client bg-[#565ACF] hover:bg-[#6065e6]"
                onClick={logoutUser}
              >
                {t("header.logout")}
                <FaPowerOff className="text-lg" />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavbarPatient;
