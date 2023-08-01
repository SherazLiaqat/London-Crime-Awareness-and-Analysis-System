import React from "react";
import TextField from "@material-ui/core/TextField";
const Estimation = () => {
  return (
    <div>
      <TextField
        style={{ width: "50%", marginLeft: "25%",marginTop:"50px",marginBottom:"50px" }}
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
