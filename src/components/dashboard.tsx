import { useState, useEffect } from "react";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: "Mon", tickets: 3 },
    { name: "Tue", tickets: 7 },
    { name: "Wed", tickets: 5 },
    { name: "Thu", tickets: 9 },
    { name: "Fri", tickets: 2 },
  ];

export default function Dashboard() {
  const [interval, setInterval] = useState("week");
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`http://localhost:5000/api/dashboard?interval=${interval}`);
      const dashboardData = await res.json();

      // Block with numbers
      dashboardData.kpi
      // Bar chart
      dashboardData.satisfaction
      // Pie chart
      dashboardData.typeVolume

      setChartData({
        labels: data.labels,
        datasets: [
          {
            label: "Tickets Opened",
            data: data.opened,
            borderWidth: 2,
          },
          {
            label: "Tickets Closed",
            data: data.closed,
            borderWidth: 2,
          },
        ],
      });
    }
    fetchData();
  }, [interval]); // refetch when interval changes

  return (
    <div>
      <select value={interval} onChange={e => setInterval(e.target.value)}>
        <option value="day">Day</option>
        <option value="week">Week</option>
        <option value="month">Month</option>
      </select>

      {chartData && 
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="tickets" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>}
    </div>
  );
}
