import React from "react";
import TextField from "@material-ui/core/TextField";
import "./Estimation.css";
const Estimation = () => {
  return (
    <div className="estimation">
      <h6
        style={{
          color: "#ef476fff",
          fontWeight: "bold",
          marginTop: "30px",
          textAlign: "center",
        }}
      >
        Try Estimation
      </h6>
      <h3 style={{ color: "black" }}>Household Crime Estimation</h3>
      <p style={{ color: "black", fontSize: "13px", marginTop: "15px" }}>
        Enter your postcode and distance range to get predictions on upcoming
        household crime occurrences based on historical records and data science
        techniques.
      </p>
      <TextField
        style={{
          width: "50%",
          marginLeft: "25%",
          marginTop: "50px",
          marginBottom: "50px",
        }}
        autoComplete="Please Enter Post Code"
        name="Please Enter Post Code"
        required
        fullWidth
        id="Name"
        label="Enter Post Code"
        autoFocus
      />
    </div>
  );
};

export default Estimation;
