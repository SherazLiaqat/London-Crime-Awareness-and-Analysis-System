import React from "react";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <div className="cards__item__link1">
          <div className="cards__item__info">
            <figure>
              <img className="cards__item__icon" src={props.icon}></img>
            </figure>

            <h5 className="cards__item__text">{props.text}</h5>
            <p className="cards__item__para">{props.para}</p>
            <li className="cards__item__point">{props.point1}</li>
            <li className="cards__item__point">{props.point2}</li>
            <li className="cards__item__point">{props.point3}</li>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
