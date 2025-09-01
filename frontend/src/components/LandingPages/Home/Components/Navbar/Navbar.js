import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Events', path: '/events' },
  { name: 'E-Spardha', path: '/espardha' },
  { name: 'Contact Us', path: '/contactus' },
];

const Navbar = ({ onHamburgerClick }) => {
  return (
    <div className="top-bar">
      <img src="/images/bg/spardha2025.png" alt="Spardha Logo" className="logo" />

      <nav className="navbar">
        <ul>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="auth-buttons">
        <Link to="/signup">
          <button className="signup-btn">Sign Up</button>
        </Link>
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
      </div>

      <div className="hamburger-btn" onClick={onHamburgerClick}>
          <FaBars size={28} color="white" />
      </div>
    </div>
  );
};

export default Navbar;
