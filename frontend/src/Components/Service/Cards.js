import React from "react";
import "./Cards.css";
import CardItem from "../Service/CardItems";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import WebIcon from "@material-ui/icons/Web";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";
function Cards() {
  return (
    <div className="cards">
      <h6 style={{ textAlign: "center", color: "#1E978C", marginTop: "15px" }}>
        {" "}
        SERVICES
      </h6>
      <h1>My Services </h1>
      <p style={{ textAlign: "center" }}>
        Our wide range of services are designed to cover all your business
        needs.
      </p>
      
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              icon={<WebIcon />}
              text="AC Repairing"
              para="We are Expert in Ac Repair Services, New Ac Installation, AC Service in Dubai. Our Technicians are Highly Qualified for Air Conditioner Repair Services in Dubai.."
            />
            
            <CardItem
              icon={<AcUnitIcon />}
              text="Fridge Repairing"
              para="We Repair any Refrigerator Issue including Refrigerator Light not Working. Noisy Compressor. Torn Gasket or Sealed Door. Refrigerator not Freezing."
              path="/Floodinfo"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              icon={<PhoneIphoneIcon />}
              text="TV Repairing"
              para="We are a TV repair company in Dubai specializes in all types and brands of television. We can fix any problem you’re having with your television, including those from international brands."
            />
            {/**
             *   <CardItem
              icon={<ImageSearchIcon />}
              text="Ux/Ui"
              para="We offer you the best user experience and interfaces so your complex applications become easy to use and explore"
            />
            <CardItem
              icon={<CameraAltIcon />}
              text="Photography "
              para="Let the professionals manage your IT & Tech stuff, so you can focus on growing your empire"
            />
             */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
