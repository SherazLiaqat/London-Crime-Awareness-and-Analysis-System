import React from "react";
import aboutimage from "../../Static/contact1.png";
import about2image from "../../Static/about2.png";
import "./About.css";

import "./About.css";

const About = () => {
  return (
    <div className="Portfolio-container">
      <h5 style={{ textAlign: "center", color: "#ef476fff" }}> About Us</h5>
      <h1>Who We Are </h1>

      <div className="About-text-img">
        <img className="aboutimage" src={aboutimage} />

        <p>
          <strong>Crime Awareness</strong> <br />
          By utilizing Historical Data, LCES offers insights into crime patterns
          and behavior. Our powerful Estimation engine can provide you with a
          view into what tomorrow's crime trends and problem areas may be.
        </p>
      </div>
      <div className="About-text-img2">
        <p>
          <strong>Our Vision</strong> <br />
          To establish Crime Stoppers as the Premier Community Based Crime
          Solving Program in the United Kingdom.
          <br />
          <strong>Our Mission</strong> <br />
          To develop innovative resources and partnerships that promote Crime
          Stoppers throughout the United Kingdom.
          <br />
          <strong>Our Solutions</strong> <br />
          With the London Crime System, you can keep your city and family safe
          by monitoring crime in your area, storing crime records, and helping
          to spread crime awareness.
        </p>

        <img className="aboutimage2" src={about2image} />
      </div>
    </div>
  );
};

export default About;
