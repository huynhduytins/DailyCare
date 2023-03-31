import { MdOutlinePendingActions } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa";
import { TbUrgent } from "react-icons/tb";

import ChartContainer from "../ChartContainer";
import StatItem from "../StatItem";
import { useAppContext } from "../../context/appContext";

const StatContainer = () => {
  const { stats } = useAppContext();
  console.log(stats);

  const stat = [
    {
      num: stats?.data?.urgentPatient ?? 0,
      text: "Urgent Patient",
      icon: <TbUrgent className="text-3xl text-red-500" />,
    },
    {
      num: stats?.data?.schedule ?? 0,
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
      </div>
    </div>
  );
};

export default StatContainer;
