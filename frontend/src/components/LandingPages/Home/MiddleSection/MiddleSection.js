import React, { useState, useEffect } from "react";
import './MiddleSection.css';
import { toast, ToastContainer } from "react-toastify";
// import { NavHashLink } from 'react-router-hash-link';
import 'react-toastify/dist/ReactToastify.css';

function Mid() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const showNotification = () => {
    toast.error('Registrations closed!', {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      // event date in IST explicitly (9 Oct 2026 00:00:00 IST)
      const eventDate = new Date("2026-10-09T00:00:00+05:30");
      const currentDate = new Date();

      const timeDifference = eventDate - currentDate;

      if (timeDifference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
        showNotification();
        return;
      }

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
      const seconds = Math.floor((timeDifference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container-home">
      <div className="left-box">
        <div className="countdown-container">
          <p className="days-text">WELCOME TO</p>
          <div className="newimg"><img src="/images/logo/spardha26.jpeg" alt="spardha-logo" /></div>
          <p className="bold-text">UNLEASHING POTENTIAL</p>

          {/* Countdown Display */}
          {/* <div className="countdown-display">
            <p>{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s left</p>
          </div> */}
          
           
        </div>
         <div className="countdown">
          <div className="time-card">
            <div className="card-box"><span className="value">{String(timeLeft.days).padStart(2, '0')}</span></div>
            <span className="label">Days</span>
          </div>
          <span className="time-divider">:</span>
          <div className="time-card">
            <div className="card-box"><span className="value">{String(timeLeft.hours).padStart(2, '0')}</span></div>
            <span className="label">Hours</span>
          </div>
          <span className="time-divider">:</span>
          <div className="time-card">
            <div className="card-box"><span className="value">{String(timeLeft.minutes).padStart(2, '0')}</span></div>
            <span className="label">Minutes</span>
          </div>
          <span className="time-divider">:</span>
          <div className="time-card">
            <div className="card-box"><span className="value">{String(timeLeft.seconds).padStart(2, '0')}</span></div>
            <span className="label">Seconds</span>
          </div>
         </div>

        {/* <div className="button-container">
          <NavHashLink to="/matches">
            <button className="btn1">MATCHES</button>
          </NavHashLink>
        </div> */}
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
