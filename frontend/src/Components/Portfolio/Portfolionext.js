import React from "react";
// import { Nav } from "react-bootstrap";
import {Link as LinkR} from 'react-router-dom';
import laptopimage from "../Assets/Images/laptop.png";
import './Portfolio.css';
const Portfolionext = () => {
  return (
    <div>
      <header className="portfolio-btn">
          <LinkR to='/' >
        <button style={{background:'transparent',color:'#1E978C',border:'none',outline:'none'}}>Home</button></LinkR>/<button>My Portfolio</button>
      </header>
      <h5 style={{ textAlign: "center", color: "#1E978C", marginTop: "20px" }}>
        {" "}
        Our Portfolio
      </h5>
      <h1>Portfolio Showcase </h1>
      
      <p style={{ textAlign: "center",margin:'10px' }}>
        Since Few Years Midstore.pk has worked on hundreds of projects
        pertaining to different industries. Each project was treated separately,
        and a customized solution was created for each. Some of the industries
        that we have catered to in the past few years include:
      </p>
      <div className="portfolio-next">
      <img className="portfolioimg" src={laptopimage} />
      
      <ul  className="portfolio-class">
        <li>Healthcare</li>
        <li>Textile</li>
        <li>E-Commerce</li>
        <li>Logistics</li>
        <li>Financial Services</li>
        <li>Telecommunications</li>
        <li>Real Estate</li>
        <li>Retail & Distribution</li>
        <li>Automobile</li>
         <li>Telecommunications</li>
        <li>Real Estate</li>
        <li>Retail & Distribution</li>
        <li>Automobile</li>
      </ul>
      </div>
      <div className="portfolio-2">
      <p>Thinking insights, verified driven research, and metrics data help you make the right decisions!</p>
     
      </div>
    </div>
  );
};

export default Portfolionext;
