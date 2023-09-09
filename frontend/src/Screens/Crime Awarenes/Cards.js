import React from "react";
import "./Cards.css";
import target_hardening from "../../Static/target_hardening.png";
import deflecting_offenders from "../../Static/deflecting_offenders.png";
import access_control from "../../Static/access_control.png";
import environmental_change from "../../Static/environmental_change.png";
import reducing_the_means from "../../Static/reducing_the_means.png";
import CardItem from "../../Screens/Crime Awarenes/CardItems";

function Cards() {
  return (
    <div className="cards">
      <h5
        style={{ textAlign: "center", color: "#ef476fff", marginTop: "15px" }}
      >
        {" "}
        Awareness
      </h5>
      <h1>Crime Awareness </h1>
      <p style={{ textAlign: "center" }}>
        Stay informed about various types of crimes and learn how to protect
        yourself and your loved ones.
      </p>

      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              icon={target_hardening}
              text="Theft"
              para="Unauthorized taking of another person's property."
              point1="Lock doors and windows when leaving home."
              point2="Avoid leaving valuables in plain sight."
              point3="Use high-quality locks and security systems."
            />

            <CardItem
              icon={reducing_the_means}
              text="Burglary"
              para="Breaking into a building with the intent to commit a crime."
              path="/Floodinfo"
              point1=" motion-activated lights around your property."
              point2="Secure sliding doors with a rod or bar."
              point3="deadbolt locks on all exterior doors."
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              icon={access_control}
              text="Assault"
              para="Intentionally causing physical harm to another person."
              point1="Stay aware of your surroundings and trust your instincts."
              point2="Avoid confrontational situations and heated arguments."
              point3="Take self-defense classes to build confidence and skills."
            />

            <CardItem
              icon={environmental_change}
              text="Robbery"
              para="Using force or threat to steal from someone."
              point3=" vigilant in unfamiliar areas, especially at night."
              point2="Avoid displaying valuable items like jewelry or electronics."
              point1="only necessary items and use well-lit ATMs."
            />
            <CardItem
              icon={deflecting_offenders}
              text="Scams "
              para="Deceptive schemes to gain personal information or money."
              point1="Avoid confrontational situations and heated arguments."
              point2="Take self-defense classes to build confidence and skills."
              point3="Stay aware of your surroundings and trust your instincts."
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
