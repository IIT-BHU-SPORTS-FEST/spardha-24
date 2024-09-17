import React, { useState } from 'react';
import './Card.css';

function Card({ mainImage, name, position, email, phone }) {
  const imageSrc = mainImage || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
  
  const [showCopyButton, setShowCopyButton] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText(phone);
    setCopied(true); 
    setTimeout(() => {
      setShowCopyButton(false); 
    }, 1500);
  };

  const resetCopyStatus = () => {
    setShowCopyButton(true); 
    setCopied(false); 
  };

  return (
    <div className='containercard'>
      {mainImage && (
        <div className='Image'>
          <img src={imageSrc} alt="Main" />
        </div>
      )}
      <div className='info'>
        <h2>{name}</h2>
        <h5>{position}</h5>
        <div></div>
        <hr />
        <div className='images'>
          <a
            className='contact'
            href='/'
            onClick={(e) => e.preventDefault()}
            onMouseEnter={resetCopyStatus}
            onMouseLeave={() => setShowCopyButton(false)}
          >
            {showCopyButton && phone &&(
              <div className='hover-box'>
                <h5>{phone}</h5>
                <button
                  onClick={copyPhoneNumber}
                  className={`copy-button ${copied ? 'copied' : ''}`}
                >
                  {copied ? (
                    <>
                      <span>&#10003;</span> Copied
                    </>
                  ) : (
                    'Copy'
                  )}
                </button>
              </div>
            )}
            <img src="/images/Contact/cimages/Group 33709.svg" alt="call" />
          </a>

          <a href='/' onClick={(e) => e.preventDefault()}><img src="/images/Contact/cimages/Group 33711.svg" alt="linkedin" /></a>
          <a href={`mailto:${email}`}><img src="/images/Contact/cimages/Group 33712.svg" alt="gmail" /></a>
          <a href='/' onClick={(e) => e.preventDefault()}><img src="/images/Contact/cimages/Group 33710.svg" alt="insta" /></a>
        </div>
      </div>
    </div>
  );
}

export default Card;
