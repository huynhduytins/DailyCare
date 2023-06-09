import NavbarPatient from "../../components/PatientComponents/Nav";
import Home from "./Home/inex";

const PatientPage = () => {
  return (
    <div className="relative -z-20 bg-[url('../../../../src/assets/background.jpg')] after:absolute after:-bottom-96 after:z-10 after:h-[300px] after:w-full after:bg-[url('../../../../src/assets/after.png')] after:content-[''] md:h-[900px] md:after:bottom-0 lg:h-[1085px]">
      <NavbarPatient />
      <Home />
    </div>
  );
};

export default PatientPage;
