import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const DropDown = ({ hover }) => {
  const [t] = useTranslation("global");

  return (
    <div
      className={`absolute ${
        hover ? "top-[102px]" : "invisible top-[120px]"
      } bg-white py-5 pl-5 pr-14 text-black shadow-lg duration-150`}
    >
      <ul className="flex flex-col gap-8">
        <li className="cursor-pointer hover:text-[#1f2278]">
          <NavLink to={"about"}> {t("body.drop.about")}</NavLink>
        </li>
        <li className="cursor-pointer hover:text-[#1f2278]">
          <NavLink to={"booking"}>{t("body.drop.booking")}</NavLink>
        </li>
        <li className="cursor-pointer hover:text-[#1f2278]">
          <NavLink to={"faq"}> {t("body.drop.faq")}</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
