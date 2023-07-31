import React, { useState } from "react";
import "../../App.css";
import "./Herosection.css";
import { BsArrowRightShort } from "react-icons/bs";
import homeimage from "../Assets/Images/img.jpg";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

function Herosection() {
  return (
    <div className="hero-container" id="Home">
      <img className="image1" src={homeimage} />
      <h1>Secure Your Household<br/> from Crime</h1>
      <p>
        The Household Estimation System is the perfect way to monitor, track,
        and predict crime patterns and occurrences in your residential area.
        With vivid visuals, historical data, and easily assessable information,
        you can ensure the safety of your family at all times.
      </p>

      <div className="hero-btns">
        {/* <LinkS
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="Portfolio"
        >
          <button className="Button-home">My Portfolio</button>
        </LinkS> */}
        <div className="hero-div">
          <LinkS
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="About"
          >
            <button className="Button-home2">
              Secure Now
              {/* <BsArrowRightShort /> */}
            </button>
          </LinkS>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
