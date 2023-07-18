import DoctorCard from "./AboutUs/DoctorCard";

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
  return (
    <>
      <section className="mb-24 flex h-screen flex-col items-center">
        <h2 className="mt-44 text-4xl font-bold text-[#1f2278]">
          The Best Doctors
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
        <h2 className="text-4xl font-bold text-[#1f2278]">New Doctors</h2>
        <div className="mt-24 flex gap-28">
          {doctors.slice(0, 1).map((doctor) => {
            return (
              <DoctorCard
                img={"../../../../src/assets/noAvatar.jpg"}
                name={doctor.name}
                work={doctor.work}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default AllDoctors;
