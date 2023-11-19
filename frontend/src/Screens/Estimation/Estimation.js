import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Estimation.css";

const Estimation = () => {
  const [postcode, setPostcode] = useState("");
  const [distance, setDistance] = useState(0);
  const [crimeType, setCrimeType] = useState("");
  const navigate = useNavigate();

  const handlePredict = () => {
    // Perform any necessary calculations or API calls here
    // For demonstration purposes, we'll navigate to the result page immediately

    navigate("/EstimationResult");
  };

  return (
    <div className="crime-statistics-container">
      <h1 className="crime-statistics-heading">Try Estimation</h1>
      <div className="crime-inputs">
        <label htmlFor="postcode">Postcode:</label>
        <input
          placeholder="eg. EC1A 7AZ"
          type="text"
          id="postcode"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
        />

        <label htmlFor="distance">Distance Range (miles):</label>
        <select
          id="distance"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        >
          <option value="0">0 mile</option>
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
          onChange={(e) => setCrimeType(e.target.value)}
        >
          <option value="Burglary">Burglary</option>
          <option value="Robbery">Robbery</option>
          <option value="Anti-social behaviour">Anti-social behaviour</option>
          <option value="Bicycle theft">Bicycle theft</option>
          <option value="Criminal damage and arson">Criminal damage and arson</option>
          <option value="Drugs">Drugs</option>
          <option value="Theft">Theft</option>
          <option value="Possession of weapons">Possession of weapons</option>
          <option value="Public disorder and weapons">Public disorder and weapons</option>
          <option value="Public order">Public order</option>
          <option value="Shoplifting">Shoplifting</option>
          <option value="Theft from the person">Theft from the person</option>
          <option value="Vehicle crime">Vehicle crime</option>
          <option value="Violence and sexual offences">Violence and sexual offences</option>
          <option value="Violent crime">Violent crime</option>
          <option value="Others">Others</option>
        </select>

        <button onClick={handlePredict}>Predict</button>
      </div>
    </div>
  );
};

export default Estimation;
