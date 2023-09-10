import React from "react";
import "./Cards.css";
import CardItem from "../../Screens/Crime Awarenes/CardItems";
import target_hardening from "../../Static/target_hardening.png";
import reducing_the_means from "../../Static/reducing_the_means.png";
import access_control from "../../Static/access_control.png";
import environmental_change from "../../Static/environmental_change.png";
import deflecting_offenders from "../../Static/deflecting_offenders.png";

const cardData = [
  {
    icon: target_hardening,
    text: "Theft",
    para: "Unauthorized taking of another person's property.",
    points: [
      "Lock doors and windows when leaving home.",
      "Avoid leaving valuables in plain sight.",
      "Use high-quality locks and security systems.",
    ],
  },
  {
    icon: reducing_the_means,
    text: "Burglary",
    para: "Breaking into a building with the intent to commit a crime.",
    points: [
      "Motion-activated lights around your property.",
      "Secure sliding doors with a rod or bar.",
      "Install deadbolt locks on all exterior doors.",
    ],
  },
  {
    icon: access_control,
    text: "Assault",
    para: "Intentionally causing physical harm to another person.",
    points: [
      "Stay aware of your surroundings and trust your instincts.",
      "Avoid confrontational situations and heated arguments.",
      "Take self-defense classes to build confidence and skills.",
    ],
  },
  {
    icon: environmental_change,
    text: "Robbery",
    para: "Using force or threat to steal from someone.",
    points: [
      "Be vigilant in unfamiliar areas, especially at night.",
      "Avoid displaying valuable items like jewelry or electronics.",
      "Carry only necessary items and use well-lit ATMs.",
    ],
  },
  {
    icon: deflecting_offenders,
    text: "Scams",
    para: "Deceptive schemes to gain personal information or money.",
    points: [
      "Avoid confrontational situations and heated arguments.",
      "Take self-defense classes to build confidence and skills.",
      "Stay aware of your surroundings and trust your instincts.",
    ],
  },
];

function Cards() {
  // Split the cardData into two arrays for two rows
  const firstRow = cardData.slice(0, 2);
  const secondRow = cardData.slice(2);

  return (
    <div className="cards">
      <h5
        style={{ textAlign: "center", color: "#ef476fff", marginTop: "15px" }}
      >
        Awareness
      </h5>
      <h1>Crime Awareness</h1>
      <p style={{ textAlign: "center" }}>
        Stay informed about various types of crimes and learn how to protect
        yourself and your loved ones.
      </p>

      <div className="cards__container">
        <div className="cards__wrapper">
          {/* First Row */}
          <ul className="cards__items">
            {firstRow.map((card, index) => (
              <CardItem
                key={index}
                icon={card.icon}
                text={card.text}
                para={card.para}
                points={card.points}
              />
            ))}
          </ul>
          {/* Second Row */}
          <ul className="cards__items">
            {secondRow.map((card, index) => (
              <CardItem
                key={index}
                icon={card.icon}
                text={card.text}
                para={card.para}
                points={card.points}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
