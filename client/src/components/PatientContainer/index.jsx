import Loading from "../Loading";
import PatientCard from "../PatientCard";
import { useAppContext } from "../../context/appContext";

const PatientContainer = () => {
  const loading = true;
  // if (loading) return <Loading />;
  const { data } = useAppContext();

  return (
    <div className="mt-16 mb-10 flex  w-full justify-center">
      <div className="grid w-10/12 grid-cols-1 gap-10 lg:grid-cols-2">
        {data.map((el) => (
          <PatientCard
            fullName={`${el.firstName}-${el.lastName}`}
            online={el.isOnline}
            level={el.levelDis}
            gender={el.gender}
            age={el.address.substring(0, 2)}
            detail={el.details}
          />
        ))}
      </div>
    </div>
  );
};

export default PatientContainer;
