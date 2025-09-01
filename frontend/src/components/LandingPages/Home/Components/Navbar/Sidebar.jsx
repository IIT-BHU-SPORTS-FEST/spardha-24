import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import './Sidebar.css';
import { useEffect } from 'react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Events', path: '/events' },
  { name: 'E-Spardha', path: '/espardha' },
  { name: 'Contact Us', path: '/contactus' },
];


const Sidebar = ({ isOpen, onClose }) => {

  // Lock/unlock scroll when sidebar opens/closes
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Cleanup on unmount
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
          <Link to="/signup"><button className="signup-btn">Sign Up</button></Link>
          <Link to="/login"><button className="login-btn">Login</button></Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
