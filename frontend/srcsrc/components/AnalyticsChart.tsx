import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const AnalyticsChart = () => {
  // Placeholder data
  const data = [
    { name: "Jan", users: 400 },
    { name: "Feb", users: 300 },
    { name: "Mar", users: 200 },
    { name: "Apr", users: 278 },
    { name: "May", users: 189 },
    { name: "Jun", users: 239 },
    { name: "Jul", users: 349 },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">User Analytics</h2>
      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="users" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default AnalyticsChart;
