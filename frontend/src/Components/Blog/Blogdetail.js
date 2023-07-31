import React, { useState } from "react";
import "./Blog.css";
import Techaccordion from "./Techaccordian";

function Blogdetail() {
  const [expandedPanel, setExpandedPanel] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    console.log({ event, isExpanded });
    setExpandedPanel(isExpanded ? panel : false);
  };

  return (
    <>
      <div className="container-fluid" style={{backgroundColor:'#fff'}} id="Blog">
       
      
      <div style={{backgroundColor:'#fff'}}>
      <h5 style={{ textAlign: "center", color: "#1E978C",paddingTop:"40px" }}> Technology</h5>
        <h1 >Technology We Offer</h1>
      </div>
      <div
        className="row"
        style={{ marginTop: "100px", paddingBottom:'30px' }}
      >
        <div className="col-sm-6">
          <Techaccordion title="Amazon Web Services" />
          <Techaccordion title="WordPress" />
          <Techaccordion title="React.js" />
          <Techaccordion title="React Native" />
          <Techaccordion title="Bootstrap" />
        </div>
        <div className="col-sm-6">
          <Techaccordion title="Amazon Web Services" />
          <Techaccordion title="WordPress" />
          <Techaccordion title="React.js" />
          <Techaccordion title="React Native" />
          <Techaccordion title="Bootstrap" />
        </div>
      </div>
      </div>
    </>
  );
}

export default Blogdetail;
