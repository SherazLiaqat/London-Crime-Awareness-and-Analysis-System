import React, { useState } from "react";
import Pagination from "./Pagination";
import CardItem from "./PortfolioItem";
import PortfolioData from "../Portfolio/PortfolioData";
import portfolioimage from "../Assets/Images/portfolio2.png";
import "./Portfolio.css";
import { BsArrowRightShort } from "react-icons/bs";
import Blogpagination from "../Blog/Blogpagination";
import Portfolionum from "./Portfolionum";
import { Link as LinkR } from "react-router-dom";

function Portfolio() {
  const [blog, setPosts] = useState(PortfolioData);

  const filteritem = (categitem) => {
    const updatedItems = PortfolioData.filter((currelem) => {
      return currelem.category === categitem;
    });
    setPosts(updatedItems);
  };
  const [showperpage, setshowperpage] = useState(3);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showperpage,
  });
  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  return (
    <div id="Portfolio" className="Portfolio-container">
      <h5 style={{ textAlign: "center", color: "#1E978C" }}> Data</h5>
      <h1>Analyze Data </h1>

      <div className="About-text-img">
        <img className="aboutimage" src={portfolioimage} />

        <p className="portfolio-para">
          <h5 style={{ color: "#1E978C" }}>
            Ensure High Availability of Your Services
          </h5>
          <strong
            style={{
              fontSize: "55px",
              fontWeight: "bold",
              marginLeft: "-0.1em",
              lineHeight: "1.1em",
            }}
          >
            Get Comprehensive Crime Data
          </strong>
          <br />
          Start preparing for the unexpected by getting comprehensive real-time
          data about crime in your local area. Follow the development and
          evolution of different crime patterns over time and learn to identify
          potential threats quickly.
          <br />
          <LinkR to="/Myportfolio">
            <button className="portfolio-button-all">
              Portfolio
              <BsArrowRightShort />{" "}
            </button>
          </LinkR>
        </p>
      </div>
      <Portfolionum />
      {/*  <div className='portfolio-button '>
         
     <button className='portfolio-button-all 'onClick={()=>setPosts(PortfolioData)}>All works</button>
     <button className='portfolio-button-all ' onClick={()=>filteritem('Web')}>Web</button>
     <button className='portfolio-button-all'onClick={()=>filteritem('Design')}>Design</button>
     <button className='portfolio-button-all' onClick={()=>filteritem('App')}>App</button>
     </div>
     
       
        <div className="cards">
         <div className="row">
      <div className="row">
       
          {blog.slice(pagination.start,pagination.end).map((post) => (
            <div className="col-md-4 mb-4 " >
            <ul className="cards__items">          
            <CardItem
            src={post.image}
            para={post.description}
            label={post.name}
           
          />
         
          
          </ul>
          </div>
          ))}
         
         
        
       
      </div>
      </div>
      <Blogpagination showperpage={showperpage}
      onPaginationChange={onPaginationChange}
      total={blog.length}
      />
      
      </div>*/}
    </div>
  );
}

export default Portfolio;
