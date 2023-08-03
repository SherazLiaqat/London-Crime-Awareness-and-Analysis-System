import React, { useState, useEffect } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import styles from "./HistoricalData.css";
import GoogleMapReact from "google-map-react";
import Chart from "chart.js/auto";
import { NativeSelect, FormControl } from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";

const Marker = ({ icon }) => <div>{icon}</div>;

const HouseholdData = () => {
  const [user, setuser] = useState({
    lebel: [],
    data: [],
    deaths_years: [],
    deaths: [],
    Injured_years: [],
    Injured: [],
    Affected_years: [],
    Affected: [],
    dead_count: [],
    Injured_count: [],
    Affected_count: [],
    positions: [],
    Country: [],
  });

  const [countries, setCountries] = useState([]);
  const [position, setPosition] = useState([]);
  const [filter, setFilter] = useState("Global");

  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    // Replace this with the actual data fetched from the backend API
    const sampleData = {
      lebel: ["2020", "2021", "2022"],
      data: [100, 150, 80],
      deaths_years: ["2020", "2021", "2022"],
      deaths: [20, 25, 10],
      Injured_years: ["2020", "2021", "2022"],
      Injured: [50, 70, 30],
      Affected_years: ["2020", "2021", "2022"],
      Affected: [70, 90, 40],
      dead_count: [5, 10, 15, 20, 25],
      Injured_count: [8, 15, 10, 20, 5],
      Affected_count: [10, 5, 15, 20, 25],
      positions: [
        { lat: 10.99835602, lng: 77.01502627 },
        { lat: 12.99835602, lng: 79.01502627 },
        { lat: 14.99835602, lng: 75.01502627 },
      ],
      Country: ["Global", "Country1", "Country2"],
    };

    setuser(sampleData);
    setPosition(sampleData.positions);
    setCountries(sampleData.Country);
  };

  const callback = async () => {
    fetchAPI();
  };

  // ... (previous code)

  const barChart = (
    <Bar
      data={{
        labels: user.lebel.map((label) => String(label)), // Convert labels to strings
        datasets: [
          {
            label: "No. of Household Crimes Happened in Years",
            backgroundColor: "#DE924B",
            borderColor: "#DE924B",
            data: user.data,
          },
          {
            label: "Trend of Household Crimes",
            data: user.data,
            type: "line",
            borderColor: "rgba(54,165,235,1)",
            fill: false,
            borderWidth: 2,
            backgroundColor: "black",
          },
        ],
      }}
      options={{}}
    />
  );

  const lineChart = (
    <Line
      data={{
        labels: user.deaths_years.map((year) => String(year)), // Convert labels to strings
        datasets: [
          {
            label: "No. of Deaths in Household Crimes",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: user.deaths,
          },
          {
            label: "Trend of Deaths in Household Crimes",
            data: user.deaths,
            type: "line",
            borderColor: "rgba(54,162,235,1)",
            fill: false,
            borderWidth: 2,
            backgroundColor: "black",
          },
        ],
      }}
      options={{}}
    />
  );

  const lineCharty = (
    <Line
      data={{
        labels: user.Injured_years.map((year) => String(year)), // Convert labels to strings
        datasets: [
          {
            label: "No. of Injured People in Household Crimes",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: user.Injured,
          },
          {
            label: "Trend of Injured People in Household Crimes",
            data: user.Injured,
            type: "line",
            borderColor: "rgba(54,162,235,1)",
            fill: false,
            borderWidth: 2,
            backgroundColor: "black",
          },
        ],
      }}
      options={{}}
    />
  );

  const lineCharts = (
    <Line
      data={{
        labels: user.Affected_years.map((year) => String(year)), // Convert labels to strings
        datasets: [
          {
            label: "No. of Affected People in Household Crimes",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: user.Affected,
          },
          {
            label: "Trend of Affected People in Household Crimes",
            data: user.Affected,
            type: "line",
            borderColor: "rgba(54,162,235,1)",
            fill: false,
            borderWidth: 2,
            backgroundColor: "black",
          },
        ],
      }}
      options={{}}
    />
  );

  // ... (remaining code)

  const deathpie = (
    <Pie
      data={{
        label: ["Low", "Medium", "High", "Very High", "Extreme"],
        datasets: [
          {
            data: user.dead_count,
            backgroundColor: [
              "#1a8604",
              "#0839f0",
              "#e9f308",
              "#fe7104",
              "#f61212",
            ],
          },
        ],
      }}
    />
  );

  const injuriedpie = (
    <Pie
      data={{
        label: ["Low", "Medium", "High", "Very High", "Extreme"],
        datasets: [
          {
            data: user.Injured_count,
            backgroundColor: [
              "#1a8604",
              "#0839f0",
              "#e9f308",
              "#fe7104",
              "#f61212",
            ],
          },
        ],
      }}
    />
  );

  const Affectedpie = (
    <Pie
      data={{
        label: ["Low", "Medium", "High", "Very High", "Extreme"],
        datasets: [
          {
            data: user.Affected_count,
            backgroundColor: [
              "#1a8604",
              "#0839f0",
              "#e9f308",
              "#fe7104",
              "#f61212",
            ],
          },
        ],
      }}
    />
  );

  const image = (
    <div style={{ color: "#F7544C" }}>
      <RoomIcon />
    </div>
  );

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 1,
  };

  return (
    <>
      <div className="div-main">
        <h1>Household Crime Estimation System</h1>

        <p style={{ textAlign: "center" }}>
          {" "}
          Number of household crime happened in Last years
        </p>
        <div className="country-selecter">
          <FormControl className={styles.formControl}>
            <NativeSelect
              onChange={(e) => setFilter(e.target.value)}
              onClick={callback}
              id="Type"
              name="Type"
            >
              <option>Global</option>
              {countries.map((country) => (
                <option value={country}>{country}</option>
              ))}
            </NativeSelect>
          </FormControl>
        </div>
        <div style={{ height: "76vh", marginBottom: "5%", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "YOUR_GOOGLE_MAPS_API_KEY" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            {position.map((u) => (
              <Marker lat={u.lat} lng={u.lng} icon={image} />
            ))}
          </GoogleMapReact>
        </div>
        <div>
          <p
            style={{ textAlign: "center", marginTop: "15px", fontSize: "14px" }}
          >
            Number of Household Crimes happen in {filter}
          </p>
          {barChart}
        </div>
        <h1 style={{ marginTop: "30px" }}>Household Crime Deaths</h1>
        <p style={{ textAlign: "center", marginTop: "15px", fontSize: "14px" }}>
          Number of Deaths Due To Household Crimes in {filter}
        </p>
        {lineChart}
        <div className="event-container-HeavyRain">{deathpie}</div>
        <div>
          <h1 style={{ marginTop: "30px" }}>Injured</h1>
          <div className="event-container-Blog">
            <p
              style={{
                textAlign: "center",
                marginTop: "15px",
                fontSize: "14px",
              }}
            >
              Number of Injuries Due To Household Crimes in {filter}
            </p>
            {lineCharty}
          </div>
          <div className="event-container-HeavyRain">{injuriedpie}</div>
        </div>
        <div>
          <h1 style={{ marginTop: "30px" }}>Affected</h1>
          <div className="event-container-Blog">
            <p
              style={{
                textAlign: "center",
                marginTop: "15px",
                fontSize: "14px",
              }}
            >
              {" "}
              Number of Household Crimes happened in Last years
            </p>
            {lineCharts}
          </div>
          <div className="event-container-pie">{Affectedpie}</div>
        </div>
        <h4 style={{ marginBottom: "20px" }}>
          To See data in Tabular form{" "}
          <a href="/HouseholdCrimecsv">Click here</a>
        </h4>
      </div>
    </>
  );
};

export default HouseholdData;
