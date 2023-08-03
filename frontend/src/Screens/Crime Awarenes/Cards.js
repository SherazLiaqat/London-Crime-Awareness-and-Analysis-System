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
        By utilizing Historical Data, HCES offers insights into crime patterns
        and behavior. Our powerful Estimation engine can provide you with a view
        into what tomorrow's crime trends and problem areas may be.
      </p>

      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              icon={target_hardening}
              text="Target Hardening"
              para="Making your property harder for an offender to access."
              point1="Upgrading the locks on your doors, windows, sheds and outbuildings."
              point2="Fitting sash jammers to vulnerable doors and windows."
              point3="Using secure passwords to prevent criminals hacking your online accounts."
            />

            <CardItem
              icon={reducing_the_means}
              text="Reducing the Means"
              para="Removing items that may help commit an offence."
              path="/Floodinfo"
              point1="Not leaving tools and ladders in the garden and clearing up any rubble/bricks."
              point2="Keeping wheelie bins out of reach, as they may be a climbing aid or help transport items."
              point3="Making sure that bricks and rubble are cleared up."
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              icon={access_control}
              text="Access Control"
              para="Looking at measures that will control access to a location, a person or object.
  "
              point1="Locking your doors and windows to both your house and your vehicle."
              point2="Ensuring that fencing, hedges, walls and other boundary treatments are in a good state of repair."
              point3="Putting a security system in place at a commercial site (entry barriers, security guards, ID cards)."
            />
            <CardItem
              icon={environmental_change}
              text="Environmental Change"
              para="Ensuring your property and wider community looks cared for."
              point1="Ensuring that graffiti and domestic/commercial waste is cleared up."
              point2="Reporting issues with fly-tipping or broken street lights to the relevant authority."
              point3="Working with the police and local authority to close a footpath.
               "
            />
            <CardItem
              icon={deflecting_offenders}
              text="Deflecting Offenders "
              para="Deterring an offender or deflecting their intention."
              point1="Using timer switches to make our homes look occupied if vacant after the hours of darkness."
              point2="Running youth diversionary schemes with partner agencies."
              point3="Referring offenders to drug rehabilitation programmes."
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
