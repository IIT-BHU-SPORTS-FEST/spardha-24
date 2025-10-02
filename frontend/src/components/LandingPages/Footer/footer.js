// Footer.jsx
import css from './footer.module.css';
import { Link } from 'react-router-dom';

// IMPORTANT: these imports use SVGR (importing as React components)
// import { ReactComponent as InstaIcon } from './images/insta.svg';
// import { ReactComponent as FacebookIcon } from './images/facebook.svg';
// import { ReactComponent as LinkedInIcon } from './images/linkedin.svg';

import whiteLogo from './images/white_logo_25.png';

const Footer = () => {
  return (
    <footer className={css['footer-premium']}>
      <div className={css['footer-main-content']}>
        <div className={css['footer-grid']}>
          {/* Left Column */}
          <div className={css['footer-left']}>
            <img
              src={whiteLogo}
              className={css['footer-logo']}
              alt="Spardha IIT BHU Logo"
            />
            <div className={css['brand-content']}>
              <h3 className={css['brand-title']}>SPARDHA 2025</h3>
              <p className={css['brand-description']}>
                <span className={css['brand-highlight']}>SPARDHA</span> is the
                annual sports festival of IIT (BHU) Varanasi, celebrating
                athletic excellence, competitive spirit, and the pursuit of
                sporting glory. Join us in this magnificent celebration of
                sportsmanship.
              </p>

              <div className={css['general-contact']}>
                <h4>General Inquiries</h4>
                <a
                  href="mailto:spardha@itbhu.ac.in"
                  className={css['contact-link-main']}
                >
                  spardha@itbhu.ac.in
                </a>
              </div>
            </div>
          </div>

          {/* Middle Column */}
          <div className={css['footer-middle']}>
            <div className={css['nav-section']}>
              <h3>Navigate</h3>
              <ul className={css['nav-links']}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about#about">About</Link></li>
                <li><Link to="/events#events">Events</Link></li>
                <li><Link to="/sponsors#sponsors">Sponsors</Link></li>
                <li><Link to="/contactus#contactus">Contact Us</Link></li>
              </ul>
            </div>

            <div className={css['social-section']}>
              <h3>Connect With Us</h3>

              <div className={css['social-grid']}>
  <a
    className={`${css['social-link']} ${css['facebook']}`}
    href="https://www.facebook.com/Spardha.IIT.BHU"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={require('./images/facebook.png')} alt="Facebook" />
  </a>
  <a
    className={`${css['social-link']} ${css['instagram']}`}
    href="https://www.instagram.com/spardha_iitbhu"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={require('./images/instagram.png')} alt="Instagram" />
  </a>
  <a
    className={`${css['social-link']} ${css['linkedin']}`}
    href="https://www.linkedin.com/company/spardha"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={require('./images/linkedin.png')} alt="LinkedIn" />
  </a>
</div>

            </div>
          </div>

          {/* Right Column */}
          <div className={css['footer-right']}>
            <div className={css['contact-section']}>
              <h3>Contact Team</h3>
              <div className={css['team-contacts']}>
                <div className={css['team-member']}>
                  <div className={css['member-header']}>
                    <span className={css['team-role']}>Event Convener</span>
                    <span className={css['team-name']}>Devang Darpe</span>
                  </div>
                  <a
                    href="mailto:convener.spardha@itbhu.ac.in"
                    className={css['contact-link']}
                  >
                    convener.spardha@itbhu.ac.in
                  </a>
                </div>

                <div className={css['team-member']}>
                  <div className={css['member-header']}>
                    <span className={css['team-role']}>Collaboration Team</span>
                  </div>
                  <a
                    href="mailto:marketing.spardha@itbhu.ac.in"
                    className={css['contact-link']}
                  >
                    marketing.spardha@itbhu.ac.in
                  </a>
                </div>

                <div className={css['team-member']}>
                  <div className={css['member-header']}>
                    <span className={css['team-role']}>Media Relations</span>
                  </div>
                  <a
                    href="mailto:media.spardha@itbhu.ac.in"
                    className={css['contact-link']}
                  >
                    media.spardha@itbhu.ac.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={css['footer-bottom']}>
          <div className={css['footer-bottom-content']}>
            <div className={css['copyright']}>
              © 2025 Spardha, IIT BHU. All Rights Reserved. | Awaken the Arena - Where Champions Rise
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
