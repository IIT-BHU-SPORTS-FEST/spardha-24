import React from 'react';
import './Footer.css';
import { FaFacebook,FaLinkedin,FaInstagram } from 'react-icons/fa';

const FooterMain = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img
            src="/images/logo/spardha24logo.svg"
            alt="Spardha 2024 Logo"
            className="footer-logo"
          />
          <pre className="footer-text">
            IIT (BHU) Varanasi,
            <br /> Uttar Pradesh - 221005
          </pre>
          <pre className="footer-text">📧 spardha@itbhu.ac.in</pre>
          <pre className="footer-text">🌐 spardha.org.in</pre>
        </div>

        <div className="footer-center">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="#matches">Matches</a>
            </li>
            <li>
              <a href="#teams">Teams</a>
            </li>
            <li>
              <a href="/contactus">Contact</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
          </ul>
        </div>

        <div className="footer-right">
          <h3 className="footer-heading">Contact Us</h3>
          <pre className="footer-contact">
           <b>Convener:</b>
           <br/>
            Sarthak Gupta
            <br />
            +91 63920 03370
          </pre>
          <h3 className="footer-heading">Follow Us</h3>
          <div className="footer-icons">
            <a href="https://www.facebook.com/Spardha.IIT.BHU/">
               <FaFacebook/>
            </a>
            <a href="https://www.linkedin.com/company/spardha/about/">
                <FaLinkedin/>
            </a>
            <a href="https://www.instagram.com/spardha_iitbhu/?hl=en">
                <FaInstagram/>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        Spardha, IIT BHU ©2024. All Rights Reserved.
      </div>
    </footer>
  );
};

export default FooterMain;
