import React, { useEffect, useState } from 'react';
import BlurText from './Blurtext';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './HeroSection.css';


const HeroSection = () => {
  const targetDate = new Date('2025-10-10T00:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const diff = targetDate - now;
      setTimeLeft(diff > 0 ? diff : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);

  const handleAnimationComplete = () => console.log('Animation completed!');

  return (
    <section
      className="hero-section"
      style={{ backgroundImage: 'url(/images/bg/hero-bg1.jpg)' }}
    >
      <div className="overlay"></div>

      {/* CENTER HEADING */}
      <div className="center-heading">
        {/* <p
          style={{
            position: 'absolute',
            top: '20px',
            left: '43%',
            transform: 'translateX(-50%)',
            fontWeight: 'bold',
            color: '#fff',
            textAlign: 'center',
            fontSize: '20px',
            zIndex: 2
          }}
        >
          Register Opening Soon
        </p> */}
        <h1>
          <BlurText
            text="UNLEASH THE CHAMPION"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          <BlurText
            text="IN YOU AT SPARDHA"
            delay={250}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
        </h1>
      </div>

      {/* BOTTOM ROW */}
      <div className="bottom-row">
        <div className="countdown-tagline">
          <div className="countdown">
            {[days, hours, minutes].map((time, i) => (
              <React.Fragment key={i}>
                <div className="time-box">
                  <span>{String(time).padStart(2, "0")}</span>
                  <p>{["DAYS", "HOURS", "MINUTES"][i]}</p>
                </div>
                {i < 2 && <div className="divider"></div>}
              </React.Fragment>
            ))}
          </div>

         
          <p className="tagline">
            "Where passion meets performance — Spardha"
          </p>
        </div>

        <div className="event-info">
          <div className="location-box">
          <FaMapMarkerAlt className="location-logo" color="black" />
          </div>
          <div>
            <h4>10–12 OCTOBER, 2025</h4>
            <p>IIT BHU, VARANASI</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
