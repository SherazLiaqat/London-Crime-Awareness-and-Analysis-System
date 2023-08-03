import React, { useState } from "react";
import "./Estimation.css";
import { Chart } from "react-chartjs-2";

const CrimeStatistics = () => {
  const [postcode, setPostcode] = useState("");
  const [distance, setDistance] = useState(0);
  const [crimeType, setCrimeType] = useState("All");
  const [predictions, setPredictions] = useState(null);

  // Dummy data for the crime statistics
  const dummyData = {
    maxHouseholdCrimesPerYear: "100",
    maxCrimesPerMonth: "25",
    minCrimesPerMonth: "5",
  };

  const handlePostcodeChange = (e) => {
    setPostcode(e.target.value);
  };

  const handleDistanceChange = (e) => {
    setDistance(e.target.value);
  };

  const handleCrimeTypeChange = (e) => {
    setCrimeType(e.target.value);
  };

  const handlePredict = () => {
    // Replace this with actual API call to get predictions based on postcode, distance, and crime type
    setPredictions(dummyData);
  };

  return (
    <div className="crime-statistics-container">
      <h1 className="crime-statistics-heading">Try Estimation</h1>
      <div className="crime-inputs">
        <label htmlFor="postcode">Postcode:</label>
        <input
          type="text"
          id="postcode"
          value={postcode}
          onChange={handlePostcodeChange}
        />

        <label htmlFor="distance">Distance Range (miles):</label>
        <select id="distance" value={distance} onChange={handleDistanceChange}>
          <option value="0">0 miles</option>
          <option value="1">1 mile</option>
          <option value="2">2 miles</option>
          <option value="3">3 miles</option>
          <option value="4">4 miles</option>
          <option value="5">5 miles</option>
        </select>

        <label htmlFor="crimeType">Crime Type:</label>
        <select
          id="crimeType"
          value={crimeType}
          onChange={handleCrimeTypeChange}
        >
          <option value="All">All</option>
          <option value="Burglary">Burglary</option>
          <option value="Robbery">Robbery</option>
          <option value="Assault">Assault</option>
          <option value="Theft">Theft</option>
          {/* Add more crime types as needed */}
        </select>

        <button onClick={handlePredict}>Predict</button>
      </div>

      {predictions && (
        <>
          <div className="statistics">
            <div className="statistic">
              <h2 className="statistic-title">
                Maximum Number of Household Crimes Per Year
              </h2>
              <p className="statistic-value">
                {predictions.maxHouseholdCrimesPerYear}
              </p>
            </div>
            <div className="statistic">
              <h2 className="statistic-title">
                Maximum Number of Crimes Per Month
              </h2>
              <p className="statistic-value">{predictions.maxCrimesPerMonth}</p>
            </div>
            <div className="statistic">
              <h2 className="statistic-title">
                Minimum Number of Crimes Per Month
              </h2>
              <p className="statistic-value">{predictions.minCrimesPerMonth}</p>
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
                      predictions.maxHouseholdCrimesPerYear,
                      predictions.maxCrimesPerMonth,
                      predictions.minCrimesPerMonth,
                    ],
                    backgroundColor: ["#007bff", "#28a745", "#dc3545"],
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
        </>
      )}
    </div>
  );
};

export default CrimeStatistics;
