import React from 'react';
import './Card.css';

function Card({ mainImage, name, position }) {
  return (
    <div className='containercard'>
      <div className='Image'>
        <img src={mainImage} alt="Main" />
      </div>
      <div className='info'>
        <h2>{name}</h2>
        <h5>{position}</h5>
        <div></div>
        <hr />
        <div className='images'>
          <a href='/'><img src="/images/Contact/cimages/Group 33709.svg" alt="call" /></a>
          <a href='/'><img src="/images/Contact/cimages/Group 33711.svg" alt="linkedin" /></a>
          <a href='/'><img src="/images/Contact/cimages/Group 33712.svg" alt="gmail" /></a>
          <a href='/'><img src="/images/Contact/cimages/Group 33710.svg" alt="insta" /></a>
        </div>
      </div>
    </div>
  );
}

export default Card;
