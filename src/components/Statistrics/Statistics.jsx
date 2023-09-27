import { useLoaderData } from "react-router-dom";
import { Cell, Pie, PieChart, ResponsiveContainer, Legend } from "recharts";

const Statistics = () => {
  const donations = useLoaderData();
  const totalDonations = donations.length;
  console.log(totalDonations);

  const donationItemsFromStorage = localStorage.getItem("donations");
  const donationItems = donationItemsFromStorage
    ? JSON.parse(donationItemsFromStorage)
    : [];
  const YourDonation = donationItems ? donationItems.length : 0;

  console.log("Number of donations:", YourDonation);

  const COLORS = ["#FF444A", "#00C49F"];

  const RADIAN = Math.PI / 180;

  const data = [
    { name: "TotalDonations", value: totalDonations - YourDonation },
    { name: "YourDonation", value: YourDonation },
  ];

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
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };
  return (
    <div className="mb-20">
      <ResponsiveContainer width="100%" height={400}>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={120}
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
            align="center"
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
