import React, { useState } from "react";

function CrimeStatics() {
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [address, setAddress] = useState("");

  // Function to perform reverse geocoding
  const reverseGeocode = () => {
    fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${coordinates.lat}+${coordinates.lng}&key=72a14e8701134761b51cba97920b7363`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          setAddress(data.results[0].formatted);
        } else {
          setAddress("Location not found");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <h1>Reverse Geocoding Example</h1>
      <div>
        <label>Latitude:</label>
        <input
          type="text"
          value={coordinates.lat}
          onChange={(e) =>
            setCoordinates({
              lat: parseFloat(e.target.value),
              lng: coordinates.lng,
            })
          }
        />
        <label>Longitude:</label>
        <input
          type="text"
          value={coordinates.lng}
          onChange={(e) =>
            setCoordinates({
              lat: coordinates.lat,
              lng: parseFloat(e.target.value),
            })
          }
        />
        <button onClick={reverseGeocode}>Reverse Geocode</button>
      </div>
      <div>
        <p>Address: {address}</p>
      </div>
    </div>
  );
}
export default CrimeStatics;

// import React, { useState } from "react";
// import "./CrimeNews.css";

// const dummyNewsData = [
//   {
//     title: "Increase in Burglaries in the Local Area",
//     description: "Recent statistics show a rise in burglaries in our neighborhood.",
//     date: "September 15, 2023",
//     crimeType: "Burglary",
//     crimeRate: "High",
//     link: "#",
//   },
//   {
//     title: "Crime Prevention Tips for Homeowners",
//     description: "Learn how to secure your home and protect your family from theft.",
//     date: "September 10, 2023",
//     crimeType: "Theft",
//     crimeRate: "Medium",
//     link: "#",
//   },
//   {
//     title: "Community Watch Program Launch",
//     description: "Join our community watch program to improve safety in our area.",
//     date: "September 5, 2023",
//     crimeType: "Community",
//     crimeRate: "Low",
//     link: "#",
//   },
//   {
//     title: "Latest Updates on Robbery Incidents",
//     description: "Stay informed about recent robbery incidents and safety measures.",
//     date: "August 30, 2023",
//     crimeType: "Robbery",
//     crimeRate: "High",
//     link: "#",
//   },
// ];

// const CrimeNews = () => {
//   const [newsData, setNewsData] = useState(dummyNewsData);

//   return (
//     <div className="news-container">
//       <h1 className="news-heading">Household Crime News</h1>
//       <div className="news-list">
//         {newsData.map((article, index) => (
//           <div className="news-item" key={index}>
//             <h2 className="news-title">{article.title}</h2>
//             <p className="news-description">{article.description}</p>
//             <p className="news-date">{article.date}</p>
//             <p className="news-crime-type">
//               Crime Type: {article.crimeType}
//             </p>
//             <p className="news-crime-rate">
//               Crime Rate: {article.crimeRate}
//             </p>
//             <a href={article.link} className="news-link">
//               Read More
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CrimeNews;

// import React, { useEffect, useState } from "react";
// import "./CrimeStatistics.css";
// const CrimeStatistics = () => {
//   // State variables to store the crime statistics
//   const [maxHouseholdCrimesPerYear, setMaxHouseholdCrimesPerYear] =
//     useState("Loading...");
//   const [maxCrimesPerMonth, setMaxCrimesPerMonth] = useState("Loading...");
//   const [minCrimesPerMonth, setMinCrimesPerMonth] = useState("Loading...");

//   // Simulate fetching data from the backend using useEffect hook
//   useEffect(() => {
//     // Replace this with your actual backend API call to get crime statistics
//     // For now, we're just using a setTimeout to simulate fetching data
//     setTimeout(() => {
//       setMaxHouseholdCrimesPerYear("100");
//       setMaxCrimesPerMonth("25");
//       setMinCrimesPerMonth("5");
//     }, 2000);
//   }, []);

//   return (
//     <div className="container">
//       <h1>Crime Statistics</h1>
//       <div className="statistics">
//         <div className="statistic">
//           <h2>Maximum Number of Household Crimes Per Year</h2>
//           <p className="value" id="maxHouseholdCrimesPerYear">
//             {maxHouseholdCrimesPerYear}
//           </p>
//         </div>
//         <div className="statistic">
//           <h2>Maximum Number of Crimes Per Month</h2>
//           <p className="value" id="maxCrimesPerMonth">
//             {maxCrimesPerMonth}
//           </p>
//         </div>
//         <div className="statistic">
//           <h2>Minimum Number of Crimes Per Month</h2>
//           <p className="value" id="minCrimesPerMonth">
//             {minCrimesPerMonth}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CrimeStatistics;
