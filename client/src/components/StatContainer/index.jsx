import { MdOutlinePendingActions } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa";
import { TbUrgent } from "react-icons/tb";

import ChartContainer from "../ChartContainer";
import StatItem from "../StatItem";
import { useAppContext } from "../../context/appContext";
import Card from "./Card";
import { useEffect, useState } from "react";

const StatContainer = () => {
  const { stats } = useAppContext();
  const { appointment, changeAppointment, scheduler } = useAppContext();
  const [numScheduler, setNumScheduler] = useState(0);

  useEffect(() => {
    setTimeout(() => setNumScheduler(scheduler), 2000);
  }, [scheduler]);

  const handleCancel = (name) => {
    changeAppointment(appointment, name);
  };

  const stat = [
    {
      num: stats?.data?.urgentPatient ?? 0,
      text: "Urgent Patient",
      icon: <TbUrgent className="text-3xl text-red-500" />,
    },
    {
      num: numScheduler,
      text: "Appointment Schedule",
      icon: <FaCalendarCheck className="text-3xl text-blue-500" />,
    },
    {
      num: stats?.data?.pending ?? 0,
      text: "Pending Patients",
      icon: <MdOutlinePendingActions className="text-3xl text-yellow-500" />,
    },
  ];

  return (
    <div className="mt-10 mb-10 flex w-full justify-center">
      <div className="w-[90%]">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {stat.map((st) => (
            <StatItem num={st.num} text={st.text} icon={st.icon} />
          ))}
        </div>
        <ChartContainer />
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold tracking-wider text-gray-500">
            Medical schedule
          </h2>
          <div className="mt-12 flex flex-wrap justify-center gap-10">
            {appointment.map((app) => {
              return (
                <Card
                  date={app.date}
                  name={app.name}
                  handleCancel={handleCancel}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatContainer;
