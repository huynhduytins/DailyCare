import NavbarPatient from "../../../components/PatientComponents/Nav";
import About from "../About";
import Content from "../Content";
import Booking from "../Booking";
import Evaluate from "../Evaluate";
import News from "../News";
import Hero from "../Hero/inex";

const PatientPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Content />
      <Booking />
      <Evaluate />
      <News />
    </>
  );
};

export default PatientPage;
