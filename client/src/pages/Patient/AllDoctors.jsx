import { useTranslation } from "react-i18next";
import DoctorCard from "./AboutUs/DoctorCard";
import { useEffect, useState } from "react";
import { useAppContext } from "../../context/appContext";

const doctors = [
  {
    img: "../../../../src/assets/doctor1.jpg",
    name: "Dr.Addam Smith",
    work: "Dentist",
  },
  {
    img: "../../../../src/assets/doctor2.jpg",
    name: "Dr.Anie Jenny",
    work: "General",
  },
  {
    img: "../../../../src/assets/doctor3.jpg",
    name: "Dr.Peter William",
    work: "Ophthalmology",
  },
];

const AllDoctors = () => {
  const { getMyDoctors, myDoctors } = useAppContext();
  const [myDt, setMyDt] = useState();

  const [t] = useTranslation("global");

  useEffect(() => {
    getMyDoctors();
    setMyDt(myDoctors);
  }, []);

  return (
    <>
      <section className="mb-24 flex h-screen flex-col items-center">
        <h2 className="mt-44 text-4xl font-bold text-[#1f2278]">
          {t("body.Doctors")}
        </h2>
        <div className="mt-24 flex gap-28">
          {doctors.map((doctor) => {
            return (
              <DoctorCard
                img={doctor.img}
                name={doctor.name}
                work={doctor.work}
              />
            );
          })}
        </div>
      </section>
      <section className="flex h-screen flex-col items-center">
        <h2 className="text-4xl font-bold text-[#1f2278]">
          {t("body.myDoctors")}
        </h2>
        <div className="mt-24 flex gap-28">
          <DoctorCard
            img={"../../../../src/assets/noAvatar.jpg"}
            name={myDt?.name ?? ""}
            work={myDt?.specialist ?? ""}
          />
        </div>
      </section>
    </>
  );
};

export default AllDoctors;
