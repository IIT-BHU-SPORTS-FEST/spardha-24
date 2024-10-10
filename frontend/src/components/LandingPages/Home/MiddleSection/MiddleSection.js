import React, { useState, useEffect } from 'react';
import './MiddleSection.css';
import { NavHashLink } from 'react-router-hash-link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Mid() {
  const [daysLeft, setDaysLeft] = useState(0);

  const showNotification = () => {
    toast.error('Registrations closed!', {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const eventDate = new Date('2024-10-18');
      const currentDate = new Date();
      const timeDifference = eventDate - currentDate;
      const days = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
      setDaysLeft(days);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container-home">
      <div className="left-box">
        <div className="countdown-container">
          <div className="count">
            <span className="before-day">{daysLeft - 1}</span>
            <span className="current-day">{daysLeft}</span>
            <span className="after-day">{daysLeft + 1}</span>
          </div>
          <div className="days">
            <p className="days-text">DAYS TO GO</p>
          </div>
        </div>

        <div className="button-container">
          <button onClick={showNotification} className="btn2">
            REGISTER
          </button>

          <NavHashLink to="/matches">
            <button className="btn1">MATCHES</button>
          </NavHashLink>
        </div>
      </div>
      <ToastContainer
        style={{
          zIndex: '10', 
          position: 'fixed',
          top: '20%', 
          left: '70%', 
          transform: 'translate(-50%, -50%)', 
          width: 'fit-content',
        }}
      />
    </div>
  );
}

export default Mid;
