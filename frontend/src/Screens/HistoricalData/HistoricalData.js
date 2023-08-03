import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
// import "./HistoricalData.css";
const HistoricalData = () => {
  // Sample data (replace this with your actual data)
  const barChartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Household Crimes Per Month",
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.4)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: [65, 59, 80, 81, 56, 55],
      },
    ],
  };

  const lineChartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Maximum Household Crimes Per Month",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [65, 59, 80, 81, 56, 55],
      },
    ],
  };

  const pieChartData = {
    labels: ["Robbery", "Burglary", "Assault", "Vandalism"],
    datasets: [
      {
        data: [300, 50, 100, 150],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF8C00"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF8C00"],
      },
    ],
  };

  return (
    <div className="container">
      <h2>Historical Data</h2>
      <div className="chart-container">
        <h3>Bar Chart</h3>
        <Bar data={barChartData} />
      </div>
      <div className="chart-container">
        <h3>Line Chart</h3>
        <Line data={lineChartData} />
      </div>
      <div className="chart-container">
        <h3>Pie Chart</h3>
        <Pie data={pieChartData} />
      </div>
    </div>
  );
};

export default HistoricalData;
