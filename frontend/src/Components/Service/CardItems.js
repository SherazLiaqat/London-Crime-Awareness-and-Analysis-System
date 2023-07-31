import React from 'react';
// import { Link } from 'react-router-dom';
function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link1' >
       
          <div className='cards__item__info'>
            <icon  className='cards__item__icon'>{props.icon}</icon>
            <h5 className='cards__item__text'>{props.text}</h5>
            <p className='cards__item__para'>{props.para}</p>
          </div>
        </div>
      </li>
      
    </>
  );
}

export default CardItem;