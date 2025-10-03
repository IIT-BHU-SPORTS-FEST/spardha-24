import React, { useState } from 'react';
import './CardItem.css';

const CardItem = ({ mainImage, name, position, email, phone, linkedin, insta }) => {
  const [flipped, setFlipped] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleFlip = () => setFlipped(f => !f);

  const handleCopy = () => {
    if (phone) {
      navigator.clipboard.writeText(phone);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    }
  };

  return (
    <div
      className={`contact-card${flipped ? ' flipped' : ''} card-name`}
      onClick={handleFlip}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div className="contact-card-inner">
        <div className="contact-card-front">
          <div className="contact-card-img-wrapper">
            <img src={mainImage} alt={name} className="contact-card-img" />
            <div className="contact-card-overlay">
              <div className="contact-card-name">{name}</div>
              {position && <div className="contact-card-position">{position}</div>}
            </div>
          </div>
        </div>
        <div className="contact-card-back">
          <div
            className="contact-card-back-bg"
            style={{
              backgroundImage: `url(${mainImage})`
            }}
          />
          <div className="contact-card-back-content">
            <div className="contact-card-name">{name}</div>
            {position && <div className="contact-card-position">{position}</div>}
            {email && <a href={`mailto:${email}`} className="contact-card-info" style={{ color: "white" }}>📧 {email}</a>}
            {phone && (
              <div className="contact-card-info">
                📞 {phone}
                <button
                  className="copy-btn"
                  onClick={e => {
                    e.stopPropagation();
                    handleCopy();
                  }}
                  style={{
                    marginLeft: '8px',
                    padding: '2px 8px',
                    fontSize: '0.95rem',
                    borderRadius: '6px',
                    border: 'none',
                    background: '#fff',
                    color: '#1976d2',
                    cursor: 'pointer'
                  }}
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            )}
            <div className="contact-card-socials">
              {linkedin && (
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              )}
              {insta && (
                <a href={insta} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;