import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";

const data = [
  { date: "Oct 2022", patient: 1 },
  { date: "Nov 2022", patient: 4 },
  { date: "Dec 2022", patient: 3 },
  { date: "Jan 2023", patient: 2 },
  { date: "Feb 2023", patient: 2 },
  { date: "Mar 2023", patient: 5 },
];

const BarChartComponent = () => {
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
