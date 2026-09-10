import React from 'react';
import css from './Newfooter.module.css';
import { Link } from 'react-router-dom';

const whiteLogo = "/images/logo/spardha-full-black.svg";

const Footer = () => {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    
    // Position relative to card center (-0.5 to +0.5)
    const xRatio = (e.clientX - rect.left) / rect.width - 0.5;
    const yRatio = (e.clientY - rect.top) / rect.height - 0.5;

    // Moving right pushes right edge back (+Y rotation)
    // Moving up pushes top edge back (+X rotation)
    const tiltX = (yRatio * 16).toFixed(2); 
    const tiltY = (-xRatio * 16).toFixed(2);

    card.style.setProperty('--tilt-x', `${tiltX}deg`);
    card.style.setProperty('--tilt-y', `${tiltY}deg`);
    card.style.setProperty('--mouse-x', `${((xRatio + 0.5) * 100).toFixed(1)}%`);
    card.style.setProperty('--mouse-y', `${((yRatio + 0.5) * 100).toFixed(1)}%`);
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.setProperty('--tilt-x', `0deg`);
    card.style.setProperty('--tilt-y', `0deg`);
  };

  return (
    <footer className={css['footer-premium']}>
      
      {/* TOP MARQUEE CONTAINER */}
      <div className={css['marquee-wrapper']}>
        <div className={css['dark-banner']}>
          <div className={css['track-slow']}>
            <div className={css['content-group']}>
              <span className={css['main-text']}>
                THE ARENA ✦ WHERE CHAMPIONS RISE ✦ COMPETE • CONQUER • ENERGY ✦ EXCELLENCE ✦ LEGACY ✦ SPORTS ✦ PASSION ✦&nbsp;
              </span>
            </div>
            <div className={css['content-group']} aria-hidden="true">
              <span className={css['main-text']}>
                THE ARENA ✦ WHERE CHAMPIONS RISE ✦ COMPETE • CONQUER • ENERGY ✦ EXCELLENCE ✦ LEGACY ✦ SPORTS ✦ PASSION ✦&nbsp;
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={css['footer-main-content']}>
        <div className={css['footer-grid']}>
          
          {/* LEFT COLUMN: NAVIGATE + LOGO & SOCIALS */}
          <div className={css['footer-left']}>
            <div className={css['nav-section']}>
              <h3>NAVIGATE</h3>
              <ul className={css['nav-links']}>
                <li>
                  <Link 
                    to="/" 
                    className={`${css['nav-link-btn']} ${css['cyber-hover']}`}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                  >
                    <span>Home</span>
                    <span className={css['arrow-icon']}>➔</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about#about" 
                    className={`${css['nav-link-btn']} ${css['cyber-hover']}`}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                  >
                    <span>About</span>
                    <span className={css['arrow-icon']}>➔</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/sponsors#sponsors" 
                    className={`${css['nav-link-btn']} ${css['cyber-hover']}`}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                  >
                    <span>Sponsors</span>
                    <span className={css['arrow-icon']}>➔</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className={css['brand-social-wrapper']}>
              {/* MAIN LOGO */}
              <div 
                className={`${css['logo-container']} ${css['neon-hover']}`}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={whiteLogo}
                  className={css['footer-logo']}
                  alt="Spardha IIT BHU Logo"
                />
              </div>
              
              {/* SOCIAL LOGOS */}
              <div className={css['social-section']}>
                <div className={css['social-grid']}>
                  <a
                    className={`${css['social-btn']} ${css['facebook']} ${css['neon-hover']}`}
                    href="https://www.facebook.com/Spardha.IIT.BHU"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img src={require('./images/facebook.png')} alt="Facebook" />
                  </a>
                  <a
                    className={`${css['social-btn']} ${css['instagram']} ${css['neon-hover']}`}
                    href="https://www.instagram.com/spardha_iitbhu"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img src={require('./images/instagram.png')} alt="Instagram" />
                  </a>
                  <a
                    className={`${css['social-btn']} ${css['linkedin']} ${css['neon-hover']}`}
                    href="https://www.linkedin.com/company/spardha"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img src={require('./images/linkedin.png')} alt="LinkedIn" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* MIDDLE COLUMN: TITLE, DESCRIPTION & GENERAL INQUIRIES CARD */}
          <div className={css['footer-middle']}>
            <div className={css['brand-content']}>
              <h3 
                className={`${css['brand-title']} ${css['title-popup']}`}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                SPARDHA 2026
              </h3>
              
              <p className={css['brand-description']}>
                <span className={css['brand-highlight']}>SPARDHA</span> is the
                annual sports festival of IIT (BHU) Varanasi, celebrating
                athletic excellence, competitive spirit, and the pursuit of
                sporting glory. Join us in this magnificent celebration of
                sportsmanship.
              </p>

              {/* GENERAL INQUIRIES CARD */}
              <div 
                className={`${css['contact-card']} ${css['general-inquiries-card']} ${css['cyber-hover']}`}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className={css['member-header']}>
                  <span className={css['team-role']}>General Inquiries</span>
                </div>
                <a href="mailto:spardha@itbhu.ac.in" className={css['contact-link']}>
                  spardha@itbhu.ac.in
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT CARDS */}
          <div className={css['footer-right']}>
            <div className={css['contact-section']}>
              <h3>CONTACT TEAM</h3>
              <div className={css['team-contacts']}>
                <div 
                  className={`${css['contact-card']} ${css['cyber-hover']}`}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className={css['member-header']}>
                    <span className={css['team-role']}>Fest Convener</span>
                    <span className={css['team-name']}>Md Kaif</span>
                  </div>
                  <a href="mailto:convener.spardha@itbhu.ac.in" className={css['contact-link']}>
                    convener.spardha@itbhu.ac.in
                  </a>
                </div>

                <div 
                  className={`${css['contact-card']} ${css['cyber-hover']}`}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className={css['member-header']}>
                    <span className={css['team-role']}>Collaboration Team</span>
                  </div>
                  <a href="mailto:marketing.spardha@itbhu.ac.in" className={css['contact-link']}>
                    marketing.spardha@itbhu.ac.in
                  </a>
                </div>

                <div 
                  className={`${css['contact-card']} ${css['cyber-hover']}`}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className={css['member-header']}>
                    <span className={css['team-role']}>Media Relations</span>
                  </div>
                  <a href="mailto:media.spardha@itbhu.ac.in" className={css['contact-link']}>
                    media.spardha@itbhu.ac.in
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className={css['footer-bottom']}>
          <div className={css['footer-bottom-content']}>
            <div className={css['copyright']}>
              © 2026 Spardha, IIT BHU. All Rights Reserved. | Awaken the Arena - Where Champions Rise
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;