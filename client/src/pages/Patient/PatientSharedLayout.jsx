import { Outlet } from "react-router-dom";
import { useState } from "react";
import NavbarPatient from "../../components/PatientComponents/Nav";
import Chatbot from "./Chatbot";
import Footer from "./Footer";

const PatientSharedLayout = () => {
  const [changeScroll, setChangeScroll] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 80) {
      setChangeScroll(true);
    } else {
      setChangeScroll(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div>
      <NavbarPatient changeScroll={changeScroll} />
      <Outlet />
      <Chatbot />
      {/* <Footer /> */}
    </div>
  );
};

export default PatientSharedLayout;
