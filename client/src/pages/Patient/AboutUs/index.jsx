import About from "../About";
import Evaluate from "../Evaluate";
import Card from "./Card";
import DoctorCard from "./DoctorCard";
import News from "../News";

const details = [
  {
    num: "1",
    title: "Year With You",
    des: "Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero",
  },
  {
    num: "10",
    title: "Awards",
    des: "Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero",
  },
  {
    num: "100+",
    title: "Doctors",
    des: "Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero",
  },
  {
    num: "1000+",
    title: "statisfied Clients",
    des: "Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero",
  },
];

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

const AboutUs = () => {
  return (
    <main>
      <h2 className="mt-52 text-center text-7xl font-bold text-[#1f2278]">
        About Us
      </h2>
      <About />
      <section className="-z-20 flex justify-center gap-20 bg-slate-100 py-[100px] px-32">
        {details.map((detail) => {
          return (
            <Card num={detail.num} title={detail.title} des={detail.des} />
          );
        })}
      </section>
      <section className="flex h-screen flex-col items-center">
        <p className="mt-32 w-fit bg-[url('../../../../src/assets/bg-about.png')] px-2 font-bold text-[#f17732]">
          Our Doctor
        </p>
        <h2 className="mt-10 text-4xl font-bold text-[#1f2278]">
          Meet Best Doctors
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
      <Evaluate />
      <News />
    </main>
  );
};

export default AboutUs;
