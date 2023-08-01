import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";
import { useAppContext } from "../../context/appContext";

const BarChartComponent = () => {
  const { stats } = useAppContext();

  const data = [
    { date: "02 / 2022", patient: stats?.data?.monthlyUrgent[0] ?? 0 },
    { date: "03 / 2022", patient: stats?.data?.monthlyUrgent[1] ?? 0 },
    { date: "04 / 2022", patient: stats?.data?.monthlyUrgent[2] ?? 0 },
    { date: "05 / 2023", patient: stats?.data?.monthlyUrgent[3] ?? 0 },
    { date: "06 / 2023", patient: stats?.data?.monthlyUrgent[4] ?? 0 },
    { date: "07 / 2023", patient: stats?.data?.monthlyUrgent[5] ?? 0 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="patient"
          stroke="#2cb1bc"
          fill="#bef8fd"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
