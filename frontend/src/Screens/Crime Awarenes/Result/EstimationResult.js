import React, { useState } from "react";
import { Chart } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
const EstimationResult = () => {
  // You can replace this dummy data with actual predictions
  const dummyData = {
    RiskRate: "High",
    crimeType: "Theft",
    numberOfCrimes: "200",
    maxHouseholdCrimesPerYear: "100",
    maxCrimesPerMonth: "25",
    minCrimesPerMonth: "5",
  };
  const doughnutData = {
    labels: [
      "Max Household Crimes",
      "Max Crimes Per Month",
      "Min Crimes Per Month",
    ],
    datasets: [
      {
        data: [
          dummyData.maxHouseholdCrimesPerYear,
          dummyData.maxCrimesPerMonth,
          dummyData.minCrimesPerMonth,
        ],
        backgroundColor: ["#b6cd87", "#8064a1", "#ef476fff"],
      },
    ],
  };
  return (
    <div className="crime-statistics-container">
      <h1 className="crime-statistics-heading">Estimation Result</h1>
      <div className="statistics">
        <div className="statistic">
          <h2 className="statistic-title">Risk Rate</h2>
          <p className="statistic-value">{dummyData.RiskRate}</p>
        </div>
        <div className="statistic">
          <h2 className="statistic-title">Number of Crimes </h2>
          <p className="statistic-value">{dummyData.numberOfCrimes}</p>
        </div>
        <div className="statistic">
          <h2 className="statistic-title">Crime Type</h2>
          <p className="statistic-value">{dummyData.crimeType}</p>
        </div>
      </div>
      <div className="chart-container">
        <Chart
          type="bar"
          data={{
            labels: [
              "Maximum Household Crimes",
              "Maximum Crimes Per Month",
              "Minimum Crimes Per Month",
            ],
            datasets: [
              {
                label: "Number of Crimes",
                data: [
                  dummyData.maxHouseholdCrimesPerYear,
                  dummyData.maxCrimesPerMonth,
                  dummyData.minCrimesPerMonth,
                ],
                backgroundColor: ["#b6cd87", "#8064a1", "#ef476fff"],
                borderWidth: 1,
              },
            ],
          }}
          options={{
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
       
      </div>
      <div className="chart-container">
          <Doughnut data={doughnutData} />
        </div>
    </div>
  );
};

export default EstimationResult;
