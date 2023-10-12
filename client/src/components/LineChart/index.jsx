import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import CurrentPres from "./CurrentPres";

const data = [
  { name: "6 days ago", mmHg: 120, mmol: 150, bpm: 60 },
  { name: "5 days ago", mmHg: 122, mmol: 155, bpm: 100 },
  { name: "4 days ago", mmHg: 130, mmol: 180, bpm: 80 },
  { name: "3 days ago", mmHg: 100, mmol: 160, bpm: 90 },
  { name: "2 days ago", mmHg: 120, mmol: 179, bpm: 90 },
  { name: "yesterday", mmHg: 120, mmol: 190, bpm: 80 },
  { name: "today", mmHg: 120, mmol: 180, bpm: 76 },
];

const dataMmHG = [
  { name: "High", value: 2 },
  { name: "Medium", value: 5 },
  { name: "Low", value: 0 },
];

const dataMmol = [
  { name: "High", value: 1 },
  { name: "Medium", value: 4 },
  { name: "Low", value: 2 },
];

const dataBpm = [
  { name: "High", value: 3 },
  { name: "Medium", value: 3 },
  { name: "Low", value: 1 },
];

const COLORS = ["#ed0739", "#bbed07", "#07ed2d"];

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

const LineChartPatient = () => {
  return (
    <div className="mx-5 mt-14 flex flex-col items-center">
      <h2 className="mb-10 text-xl font-bold underline underline-offset-4">
        Health parameters
      </h2>
      <LineChart width={800} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="mmHg" stroke="#8884d8" />
        <Line type="monotone" dataKey="mmol" stroke="#82ca9d" />
        <Line type="monotone" dataKey="bpm" stroke="#890a9d" />
      </LineChart>
      <div className="mt-10 flex items-center gap-20">
        <ResponsiveContainer width={160} height={230}>
          <PieChart>
            <Tooltip />
            <Pie
              data={dataMmHG}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {dataMmHG.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="h-5 w-5 bg-[#ed0739]"></div>
            <span>High</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-5 w-5 bg-[#bbed07]"></div>
            <span>Medium</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-5 w-5 bg-[#07ed2d]"></div>
            <span>Low</span>
          </div>
        </div>
      </div>
      <h2>Blood Pressure</h2>
      <div className="mt-10 flex items-center gap-20">
        <ResponsiveContainer width={160} height={230}>
          <PieChart>
            <Tooltip />
            <Pie
              data={dataMmol}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {dataMmol.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="h-5 w-5 bg-[#ed0739]"></div>
            <span>Hight</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-5 w-5 bg-[#bbed07]"></div>
            <span>Medium</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-5 w-5 bg-[#07ed2d]"></div>
            <span>Low</span>
          </div>
        </div>
      </div>
      <h2>Glycemic index</h2>
      <div className="mt-10 flex items-center gap-20">
        <ResponsiveContainer width={160} height={230}>
          <PieChart>
            <Tooltip />
            <Pie
              data={dataBpm}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {dataBpm.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="h-5 w-5 bg-[#ed0739]"></div>
            <span>High</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-5 w-5 bg-[#bbed07]"></div>
            <span>Medium</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-5 w-5 bg-[#07ed2d]"></div>
            <span>Low</span>
          </div>
        </div>
      </div>
      <h2>Heartbeat</h2>
      <h2 className="mt-20 text-xl font-bold underline underline-offset-4">
        Prescription
      </h2>
      <CurrentPres />
      <div className="mt-5 flex w-[500px] justify-end">
        <em>
          Prescription creation date:<span className="invisible">ssss</span>
        </em>
        <p>29/06/2023</p>
      </div>
      <div className="mt-2 flex w-[500px] justify-end">
        <em>
          Diagnostic:<span className="invisible">ssss</span>
        </em>
        <p>Stomachache</p>
      </div>
    </div>
  );
};

export default LineChartPatient;
