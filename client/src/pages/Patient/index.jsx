import NavbarPatient from "../../components/PatientComponents/Nav";
import Home from "./Home/inex";
import About from "./About";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";
import Booking from "./Booking";
import Evaluate from "./Evaluate";
import News from "./News";
import Chatbox from "./Chatbot";
import { ProtectedRoute } from "../Dashboard";

const PatientPage = () => {
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
    <ProtectedRoute>
      <div className="relative">
        <NavbarPatient changeScroll={changeScroll} />
        <Home />
        <About />
        <Content />
        <Booking />
        <Evaluate />
        <News />
        <Footer />
        <Chatbox />
      </div>
    </ProtectedRoute>
  );
};

export default PatientPage;
