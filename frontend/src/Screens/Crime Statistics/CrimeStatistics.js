import React, { useEffect, useState } from "react";
import "./CrimeStatistics.css";
const CrimeStatistics = () => {
  // State variables to store the crime statistics
  const [maxHouseholdCrimesPerYear, setMaxHouseholdCrimesPerYear] =
    useState("Loading...");
  const [maxCrimesPerMonth, setMaxCrimesPerMonth] = useState("Loading...");
  const [minCrimesPerMonth, setMinCrimesPerMonth] = useState("Loading...");

  // Simulate fetching data from the backend using useEffect hook
  useEffect(() => {
    // Replace this with your actual backend API call to get crime statistics
    // For now, we're just using a setTimeout to simulate fetching data
    setTimeout(() => {
      setMaxHouseholdCrimesPerYear("100");
      setMaxCrimesPerMonth("25");
      setMinCrimesPerMonth("5");
    }, 2000);
  }, []);

  return (
    <div className="container">
      <h1>Crime Statistics</h1>
      <div className="statistics">
        <div className="statistic">
          <h2>Maximum Number of Household Crimes Per Year</h2>
          <p className="value" id="maxHouseholdCrimesPerYear">
            {maxHouseholdCrimesPerYear}
          </p>
        </div>
        <div className="statistic">
          <h2>Maximum Number of Crimes Per Month</h2>
          <p className="value" id="maxCrimesPerMonth">
            {maxCrimesPerMonth}
          </p>
        </div>
        <div className="statistic">
          <h2>Minimum Number of Crimes Per Month</h2>
          <p className="value" id="minCrimesPerMonth">
            {minCrimesPerMonth}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CrimeStatistics;
