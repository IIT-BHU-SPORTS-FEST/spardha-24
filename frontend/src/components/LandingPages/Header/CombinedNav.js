import  { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './CombinedNav.css';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Events', path: '/events' },
  // { name: 'E-Spardha', path: '/espardha' },
  { name: 'Contact Us', path: '/contactus' },
  { name: 'Sponsors', path: '/sponsors' },
];

export const Navbar = ({ onHamburgerClick }) => {

  return (
    <div className="top-bar">
      <img src="/images/logo/white_logo_25.png" alt="Spardha Logo" className="logo" />

      <div className="nav-links">
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
        <Link to="/register/signup">
          <button className="signup-btn">Sign Up</button>
        </Link>
        <Link to="/register/login">
          <button className="login-btn">Login</button>
        </Link>
      </div>
      </div>

      <div className="hamburger-btn" onClick={onHamburgerClick}>
        <FaBars size={28} color="white" />
      </div>
    </div>
  );
};

export const Sidebar = ({ isOpen, onClose }) => {

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [isOpen]);


  return (
    <>
      <div className={`sidebar-backdrop ${isOpen ? 'active' : ''}`} onClick={onClose}></div>
      <div className={`mobile-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="close-btn" onClick={onClose}>
          <FaTimes size={28} color="white" />
        </div>
        <ul>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link to={link.path} onClick={onClose}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div className="mobile-auth-buttons">
          <Link to="/register/signup"><button className="signup-btn">Sign Up</button></Link>
          <Link to="/register/login"><button className="login-btn">Login</button></Link>
        </div>
      </div>
    </>
  );
};