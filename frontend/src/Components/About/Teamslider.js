import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Teamslider.css";

function ImageSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
  };
  return (
    <div className="mainbody">
      <h5 style={{ textAlign: "center", color: "#1E978C" }}>Leadership </h5>
      <h1>Our Team</h1>
      <Slider {...settings}>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src="images\pp.jpeg" />
            </div>

            <div className="details">
              <h2>
                Muhammad Rashid <span className="job-title">CEO</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src="images\sheraz.jpeg" />
            </div>

            <div className="details">
              <h2>
                Sheraz Liaqat{" "}
                <span className="job-title">React.js Developer</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src="images\sheraz.jpeg" />
            </div>

            <div className="details">
              <h2>
                Sheraz Liaqat{" "}
                <span className="job-title">React.js Developer</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src="images\sheraz.jpeg" />
            </div>

            <div className="details">
              <h2>
                Sheraz Liaqat{" "}
                <span className="job-title">React.js Developer</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src="images/avat.png" />
            </div>

            <div className="details">
              <h2>
                Hira Akram <span className="job-title">React.js Developer</span>
              </h2>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default ImageSlider;
