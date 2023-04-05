import Loading from "../Loading";
import PatientCard from "../PatientCard";
import { useAppContext } from "../../context/appContext";
import { useEffect, useState } from "react";
import DetailPatient from "../DetailPatient";

const online = [
  "now",
  "1m",
  "15m",
  "23h",
  "1d",
  "2d",
  "4h",
  "11h",
  "5m",
  "3h",
  "13h",
];

const PatientContainer = () => {
  const { getAllPatients, myPatients, isLoading, page } = useAppContext();
  const [openModal, setOpenModal] = useState(false);
  const [info, setInfo] = useState({});
  console.log(info);
  const handleClick = (id) => {
    const patient = myPatients.find((el) => el._id === id);
    setInfo({ ...setInfo, patient });
    setOpenModal(true);
  };

  useEffect(() => {
    getAllPatients();
  }, [page]);

  if (isLoading) {
    return (
      <div className="mt-16 mb-10 flex  w-full justify-center">
        <div className="grid w-10/12 grid-cols-1 gap-10 lg:grid-cols-2">
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="mt-16 mb-10 flex w-full  flex-col items-center justify-center">
        <div className="grid w-10/12 grid-cols-1 gap-10 lg:grid-cols-2">
          {myPatients.length === 0 ? (
            <h2 className="text-xl font-bold">There is no information</h2>
          ) : (
            myPatients.map((el, id) => (
              <PatientCard
                key={el._id}
                fullName={`${el.firstName}-${el.lastName}`}
                online={`${online[Math.floor(Math.random() * 10)]}`}
                level={el.levelDis}
                gender={el.gender}
                age={el.age}
                detail={el.detail}
                id={el._id}
                handleClick={handleClick}
              />
            ))
          )}
        </div>
      </div>
      {openModal && (
        <DetailPatient setOpenModal={setOpenModal} info={info.patient} />
      )}
    </>
  );
};

export default PatientContainer;
