import React from "react";
import aboutimage from "../../Static/contact1.png";
import about2image from "../../Static/about2.png";
import "./About.css";
import { AiOutlineSolution } from "react-icons/ai";

import "./About.css";

const About = () => {
  return (
    <div id="About" className="Portfolio-container">
      <h5 style={{ textAlign: "center", color: "#1E978C" }}> About Us</h5>
      <h1>Who We Are </h1>

      {/* <p className="text">The Ultimate Finger Licking Dishes .</p> */}
      <div className="About-text-img">
        <img className="aboutimage" src={aboutimage} />

        <p>
          <strong>Golden Flakes Enterprises Ltd</strong> <br />
          is a family run Caribbean cuisine business that prides itself on food
          that is lovingly seasoned, freshly prepared, and served with pride! We
          aim to provide a range of nutritious, flavoursome and value for money
          food with a Caribbean influence to our customers of varying cultures,
          ages and tastes. We specialize in a range of finger licking dishes
          (see our takeaway menu) and we are also one of London’s leading
          wholesalers for tasty Jamaican patties. Come in and try some of our
          dishes today! The proof is in the tasting!
        </p>
      </div>
      <div className="About-text-img2">
        <p>
          <strong>Our Mission</strong> <br />
          To deliver bug free, turn-key technology solutions to our clients with
          outstanding infrastructure, design and development.
          <br />
          <strong>Our Excellence</strong> <br />
          Our excellence in multiple technological fields not only makes us
          unique but also increases our authenticity in the digital market. We
          assist ventures to create something immense with our revolutionary
          approach to the latest technology. Our If you want your business to
          look better and create more, you’ve come to the right place.
          <br />
          <strong>Our Solutions</strong> <br />
          Our highly focused market-leading solutions ensure great traffic and
          robust user experience. Apart from digital marketing, we have
          professional resources for web development, web design, and mobile app
          development. So, if you are new in business or struggling in business
          we are here to serve you with great digital result-driven solutions.
        </p>

        <img className="aboutimage" src={about2image} />
      </div>
    </div>
  );
};

export default About;
