import React, { useState } from "react";
import "../../App.css";
import "./Herosection.css";
import { IoMdArrowDropdown } from "react-icons/io";
import homeimage from "../../components/images/crime2.jpg";
import { Link } from "react-router-dom";
import Downs from "../Navbar/Downs";

function Herosection() {
  return (
    <div className="hero-container">
      <img className="image" src={homeimage} />
      <h1>Secure Your Household from Crime</h1>
      <p>
        you can ensure the safety of your family at all times.Our advanced
        system: Household Estimation System helps you stay abreast of changing
        criminal behavior accurately so that you can always be prepared.
      </p>

      <div className="hero-btns">
        <button className="Button-home2">Secure Now</button>
      </div>
    </div>
  );
}

export default Herosection;