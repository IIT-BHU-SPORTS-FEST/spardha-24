// Footer.jsx
import css from './footernew.module.css';
import { Link } from 'react-router-dom';

// IMPORTANT: these imports use SVGR (importing as React components)
// import { ReactComponent as InstaIcon } from './images/insta.svg';
// import { ReactComponent as FacebookIcon } from './images/facebook.svg';
// import { ReactComponent as LinkedInIcon } from './images/linkedin.svg';

const whiteLogo = "/images/logo/spardha-full-black.svg";

const Footer = () => {
  return (
    <footer className={css['footer-premium']}>
      {/* Scrolling Ticker Strip */}
      <div 
        className={css['ticker-wrap']}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
          e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
        }}
      >
        <div className={css['ticker-track']}>
          {[...Array(3)].map((_, i) => (
            <span key={i} className={css['ticker-content']}>
              EXCELLENCE&nbsp;&nbsp;★&nbsp;&nbsp;LEGACY&nbsp;&nbsp;★&nbsp;&nbsp;SPORTS&nbsp;&nbsp;★&nbsp;&nbsp;PASSION&nbsp;&nbsp;★&nbsp;&nbsp;THE ARENA&nbsp;&nbsp;★&nbsp;&nbsp;SPARDHA 2026&nbsp;&nbsp;★&nbsp;&nbsp;WHERE CHAMPIONS RISE&nbsp;&nbsp;★&nbsp;&nbsp;COMPETE&nbsp;&nbsp;★&nbsp;&nbsp;CONQUER&nbsp;&nbsp;★&nbsp;&nbsp;ENERGY&nbsp;&nbsp;★&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

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
              <h3 className={css['brand-title']}>SPARDHA 2026</h3>
              <p className={css['brand-description']}>
                <span className={css['brand-highlight']}>SPARDHA</span> is the
                annual sports festival of IIT (BHU) Varanasi, celebrating
                athletic excellence, competitive spirit, and the pursuit of
                sporting glory. Join us in this magnificent celebration of
                sportsmanship.
              </p>
            </div>
          </div>

          {/* Middle Column */}
          <div className={css['footer-middle']}>
            <div className={css['nav-section']}>
              <h3>Navigate</h3>
              <ul className={css['nav-links']}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                {/* <li><Link to="/events#events">Events</Link></li> */}
                <li><Link to="/sponsors">Sponsors</Link></li>
                {/* <li><Link to="/contactus#contactus">Contact Us</Link></li> */}
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
                <div className={css['team-member']} style={{gridColumn: 'unset'}}>
                  <div className={css['member-header']}>
                    <span className={css['team-role']}>Fest Convener</span>
                    <span className={css['convener-name']}>Md. Kaif</span>
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

                <div className={css['team-member']}>
                  <div className={css['member-header']}>
                    <span className={css['team-role']}>General Inquiries</span>
                  </div>
                  <a
                    href="mailto:spardha@itbhu.ac.in"
                    className={css['contact-link']}
                  >
                    spardha@itbhu.ac.in
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
              © 2026 Spardha, IIT BHU. All Rights Reserved. | Awaken the Arena - Where Champions Rise
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// // footernew.js
// import css from './footernew.module.css';
// import { Link } from 'react-router-dom';

// const whiteLogo = "/images/logo/spardha-full-black.svg";

// const Footer = () => {
//   return (
//     <footer className={css['footer-premium']}>
//       <div className={css['footer-main-content']}>
//         <div className={css['footer-grid']}>
          
//           {/* Column 1: Left Brand Column */}
//           <div className={css['footer-left']}>
//             <img
//               src={whiteLogo}
//               className={css['footer-logo']}
//               alt="Spardha IIT BHU Logo"
//             />
//             <div className={css['brand-content']}>
//               <h3 className={css['brand-title']}>SPARDHA 2026</h3>
//               <p className={css['brand-description']}>
//                 More than a tournament. Intense competition, electric crowds,
//                 unforgettable moments, and an atmosphere built around the pursuit
//                 of excellence.
//               </p>
//               <a
//                 href="mailto:spardha@itbhu.ac.in"
//                 className={css['teal-pill-btn']}
//               >
//                 spardha@itbhu.ac.in
//               </a>
//             </div>
//           </div>

//           {/* Column 2: Explore & Socials */}
//           <div className={css['footer-middle']}>
//             <div className={css['explore-section']}>
//               <h3 className={css['section-title']}>Explore</h3>
//               <ul className={css['nav-links']}>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/about#about">About us</Link></li>
//                 <li><Link to="/events#events">Events</Link></li>
//               </ul>
//             </div>

//             <div className={css['social-section']}>
//               <h3 className={css['section-title']}>Socials</h3>
//               <div className={css['social-grid']}>
//                 <a
//                   className={`${css['social-link']} ${css['facebook']}`}
//                   href="https://www.facebook.com/Spardha.IIT.BHU"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="Facebook"
//                 >
//                   <img src={require('./images/facebook.png')} alt="Facebook" />
//                 </a>
//                 <a
//                   className={`${css['social-link']} ${css['instagram']}`}
//                   href="https://www.instagram.com/spardha_iitbhu"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="Instagram"
//                 >
//                   <img src={require('./images/instagram.png')} alt="Instagram" />
//                 </a>
//                 <a
//                   className={`${css['social-link']} ${css['linkedin']}`}
//                   href="https://www.linkedin.com/company/spardha"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="LinkedIn"
//                 >
//                   <img src={require('./images/linkedin.png')} alt="LinkedIn" />
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Column 3: Reach Us */}
//           <div className={css['footer-right']}>
//             <h3 className={css['section-title']}>Reach Us</h3>
//             <div className={css['team-contacts']}>
              
//               <div className={css['contact-item']}>
//                 <div className={css['member-header']}>
//                   <span className={css['team-role']}>Fest convener</span>
//                   <span className={css['convener-signature']}>Mohammad Kaif</span>
//                 </div>
//                 <a
//                   href="mailto:convener.spardha@itbhu.ac.in"
//                   className={css['teal-pill-btn']}
//                 >
//                   convener.spardha@itbhu.ac.in
//                 </a>
//               </div>

//               <div className={css['contact-item']}>
//                 <div className={css['member-header']}>
//                   <span className={css['team-role']}>Collaboration Team</span>
//                 </div>
//                 <a
//                   href="mailto:marketing.spardha@itbhu.ac.in"
//                   className={css['teal-pill-btn']}
//                 >
//                   marketing.spardha@itbhu.ac.in
//                 </a>
//               </div>

//               <div className={css['contact-item']}>
//                 <div className={css['member-header']}>
//                   <span className={css['team-role']}>Media relations</span>
//                 </div>
//                 <a
//                   href="mailto:media.spardha@itbhu.ac.in"
//                   className={css['teal-pill-btn']}
//                 >
//                   media.spardha@itbhu.ac.in
//                 </a>
//               </div>

//             </div>
//           </div>

//         </div>

//         {/* Bottom Bar */}
//         <div className={css['footer-bottom']}>
//           <div className={css['copyright']}>
//             © 2026 Spardha, IIT BHU. All Rights Reserved. | Pursuit of Greatness
//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;