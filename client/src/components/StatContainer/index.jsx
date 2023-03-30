import { MdOutlinePendingActions } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa";
import { TbUrgent } from "react-icons/tb";

import ChartContainer from "../ChartContainer";
import StatItem from "../StatItem";

const stats = [
  {
    num: 25,
    text: "Urgent Patient",
    icon: <TbUrgent className="text-3xl text-red-500" />,
  },
  {
    num: 5,
    text: "Appointment Schedule",
    icon: <FaCalendarCheck className="text-3xl text-blue-500" />,
  },
  {
    num: 3,
    text: "Pending Patients",
    icon: <MdOutlinePendingActions className="text-3xl text-yellow-500" />,
  },
];

const StatContainer = () => {
  return (
    <div className="mt-10 mb-10 flex w-full justify-center">
      <div className="w-[90%]">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <StatItem num={stat.num} text={stat.text} icon={stat.icon} />
          ))}
        </div>
        <ChartContainer />
      </div>
    </div>
  );
};

export default StatContainer;
