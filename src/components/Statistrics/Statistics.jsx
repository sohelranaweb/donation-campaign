import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Legend } from "recharts";

// const totalDonations = 12;
// const donationItems = JSON.parse(localStorage.getItem("donations"));
// const donationCount = donationItems ? donationItems.length : 0;

// console.log("Number of donations:", donationCount);
const totalDonations = 12;
const donationItemsFromStorage = localStorage.getItem("donations");
const donationItems = donationItemsFromStorage
  ? JSON.parse(donationItemsFromStorage)
  : [];
const donationCount = donationItems ? donationItems.length : 0;

console.log("Number of donations:", donationCount);

const COLORS = ["#0088FE", "#00C49F"];

const RADIAN = Math.PI / 180;

const data = [
  { name: "totalDonations", value: totalDonations },
  { name: "donationCount", value: donationCount },
];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
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

const Statistics = () => {
  return (
    <div>
      <h1>Statistics page</h1>
      <ResponsiveContainer width="100%" height={500}>
        <PieChart width={400} height={400}>
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
          <Legend
            iconSize={10}
            iconType="square"
            layout="horizontal"
            verticalAlign="bottom"
            align="left"
            formatter={(value, entry) => (
              <span style={{ color: entry.color }}>{value}</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
