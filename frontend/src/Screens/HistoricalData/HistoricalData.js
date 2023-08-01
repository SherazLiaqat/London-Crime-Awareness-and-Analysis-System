import React from "react";
import {
  CartesianGrid,
  BarChart,
  Bar,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const data = [
  { name: "2017", react: 32, angular: 37, vue: 60 },
  { name: "2018", react: 42, angular: 42, vue: 54 },
  { name: "2019", react: 51, angular: 41, vue: 54 },
  { name: "2020", react: 60, angular: 37, vue: 28 },
  { name: "2021", react: 51, angular: 31, vue: 27 },
  { name: "2022", react: 95, angular: 44, vue: 49 },
];
const HistoricalData = () => {
  return (
    <>
      {/* Line chart */}
      <h3 style={{ textAlign: "center" }}>Line Chart</h3>
      <LineChart width={600} height={300} data={data}>
        <Line
          type="monotone"
          dataKey="react"
          stroke="#2196F3"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="angular"
          stroke="#F44236"
          strokeWidth={3}
        />
        <Line type="monotone" dataKey="Affected" stroke="#FFCA29" strokeWidth={3} />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
      {/* Bar chart */}
      <h3 style={{ textAlign: "center" }}>Bar Chart</h3>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="angular" fill="#8884d8" />
        <Bar dataKey="vue" fill="#82ca9d" />
      </BarChart>
      {/* Bar chart */}
      <h3 style={{ textAlign: "center" }}>Pie Chart</h3>
      
    </>
  );
};

export default HistoricalData;
