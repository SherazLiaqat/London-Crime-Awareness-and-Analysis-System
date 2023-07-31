import React from 'react';
// import { Link } from 'react-router-dom';
function PortfolioItem(props) {
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link' >
        <figure className='cards__item__pic-wrap' data-category={props.label} >
            <img
              className='cards__item__img'
              alt='Disaster Image'
              src={props.src}
            />
          </figure>
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

export default PortfolioItem;