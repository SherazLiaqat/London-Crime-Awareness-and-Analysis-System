import React, { useState, useEffect } from "react";
import axios from "axios";

function LatestCrimeNews() {
  const [latestCrimes, setLatestCrimes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchLatestCrimes();
  }, []);

  const fetchLatestCrimes = async () => {
    try {
      const response = await axios.get(
        "https://data.police.uk/api/crimes-street/all-crime"
      );
      setLatestCrimes(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching latest crime data:", error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2>Latest Crime News</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {latestCrimes.map((crime) => (
            <li key={crime.id}>
              <strong>{crime.category}</strong> reported on {crime.date} at{" "}
              {crime.location.street.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LatestCrimeNews;
