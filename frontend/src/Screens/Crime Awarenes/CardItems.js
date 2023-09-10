import React from "react";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <div className="cards__item__link1">
          <div className="cards__item__info">
            <figure>
              <img
                className="cards__item__icon"
                src={props.icon}
                alt={props.text}
              />
            </figure>

            <h5 className="cards__item__text">{props.text}</h5>
            <p className="cards__item__para">{props.para}</p>
            <ul className="cards__item__points">
              {props.points.map((point, index) => (
                <li className="cards__item__point" key={index}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
