import React from "react";
import aboutimage from "../Assets/Images/abou.png";
import about2image from "../Assets/Images/about-2.png";
import {AiOutlineSolution} from 'react-icons/ai'
import Slider from "./Slider";
import Teamslider from './Teamslider';
import "./About.css";

const About = () => {
  return (
    <div id="About" className="Portfolio-container">
      <h5 style={{ textAlign: "center", color: "#1E978C" }}> About Us</h5>
      <h1>Who We Are </h1>

      <p className="text">
        Midstore.pk specializes in software development and has been serving
        clients all over the world .
      </p>
      <div className="About-text-img">
        <img className="aboutimage" src={aboutimage} />

        <p>
          <strong>Meet Midstore.pk</strong> <br /> No client or task is too big
          or too small for us. If you want your business to look better and
          create more, you’ve come to the right place.No client or task is too
          big or too small for us. If you want your business to look better and
          create more, you’ve come to the right place. No client or task is too
          big or too small for us. If you want your business to look better and
          create more, you’ve come to the right place. No client or task is too
          big or too small for us. If you want your business to look better and
          create more, you’ve come to the right place.and create more, you’ve
          come to the right place. No client or task is too big or too small for
          us. If you want your business to look better and create more, you’ve
          come to the right place.and create more, you’ve come to the right
          place. No client or task is too big or too small for us. If you want
          your business to look better and create more, you’ve come to the right
          place.
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
          <br /><strong>Our Solutions</strong> <br />
          Our highly focused market-leading solutions ensure great traffic and
          robust user experience. Apart from digital marketing, we have
          professional resources for web development, web design, and mobile app
          development. So, if you are new in business or struggling in business
          we are here to serve you with great digital result-driven solutions.
         
        </p>
        
        <img className="aboutimage" src={about2image} />
      </div>
      
     
      
      <Teamslider/>
     
     
    </div>
  );
};

export default About;
