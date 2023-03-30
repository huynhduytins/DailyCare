import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "age: 0-22", value: 400 },
  { name: "age: 23-35", value: 300 },
  { name: "age: 36-60", value: 300 },
  { name: "age: >60", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChartComponent = () => {
  return (
    <div className="flex h-[300px] w-full items-center justify-center gap-8">
      <ResponsiveContainer width={160} height={160}>
        <PieChart>
          <Tooltip />
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <div className="h-5 w-5 bg-[#0088FE]"></div>
          <span>0 - 22</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-5 w-5 bg-[#00C49F]"></div>
          <span>23 - 35</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-5 w-5 bg-[#FFBB28]"></div>
          <span>36 - 60</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-5 w-5 bg-[#FF8042]"></div>
          <span>{"> 60"}</span>
        </div>
      </div>
    </div>
  );
};

export default PieChartComponent;
