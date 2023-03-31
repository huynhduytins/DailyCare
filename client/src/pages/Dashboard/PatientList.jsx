import PatientContainer from "../../components/PatientContainer";
import BtnPage from "../../components/PatientContainer/BtnPage";
import SearchContainer from "../../components/SearchContainer";

const PatientList = () => {
  return (
    <div>
      <SearchContainer />
      <PatientContainer />
      <BtnPage />
    </div>
  );
};

export default PatientList;
