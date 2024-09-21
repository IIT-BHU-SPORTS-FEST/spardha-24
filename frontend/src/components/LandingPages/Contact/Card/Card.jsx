import React, { useState, useRef, useEffect } from 'react';
import './Card.css';

function Card({ mainImage, name, position, email, phone, isConvener, insta, linkedin }) {
  const imageSrc = mainImage || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
  
  const [showHoverBox, setShowHoverBox] = useState(false);
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef(null);

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText(phone);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000); 
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowHoverBox(true);
  };

  const handleMouseLeave = () => {
    
    timeoutRef.current = setTimeout(() => {
      setShowHoverBox(false);
    }, 1000); 
  };

  useEffect(() => {
 
    return () => clearTimeout(timeoutRef.current);
  }, []);

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
          {!isConvener && (
            <a
              className='contact'
              href='/'
              onClick={(e) => e.preventDefault()}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {showHoverBox && phone && (
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
          )}
          
          {linkedin&&(
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <img src="/images/Contact/cimages/Group 33711.svg" alt="linkedin" />
            </a>
          )}

          <a href={`mailto:${email}`}>
            <img src="/images/Contact/cimages/Group 33712.svg" alt="gmail" />
          </a>

          {insta && (
            <a href={insta} target="_blank" rel="noopener noreferrer">
              <img src="/images/Contact/cimages/Group 33710.svg" alt="insta" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
