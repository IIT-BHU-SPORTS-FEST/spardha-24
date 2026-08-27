import React, { useEffect, useState } from 'react';
import BlurText from './Blurtext';
import './HeroSection.css';

const HeroSection = () => {
  // Countdown target: 10th October (IST)
  const targetDate = new Date('2026-10-10T00:00:00+05:30').getTime();
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
        {/* LEFT DIV: countdown timer to 10th October */}
        <div className="countdown-tagline">
          <div className="countdown">
            {[days, hours, minutes].map((time, i) => (
              <React.Fragment key={i}>
                <div className="time-box">
                  <span>{String(time).padStart(2, '0')}</span>
                  <p>{['DAYS', 'HOURS', 'MINUTES'][i]}</p>
                </div>
                {i < 2 && <div className="divider"></div>}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div>
          <div className="opening-info">
            <h4>Opening Ceremony</h4>
            <p>~ 9th October 2026, 5 PM</p>
            <p>Gymkhana, IIT BHU, Varanasi</p>
          </div>

          <p className="tagline">
            "Where passion meets performance — Spardha"
          </p>
        </div>

        {/* Invisible spacer so countdown/opening stay in their original positions */}
        <div className="event-info" aria-hidden="true" style={{ visibility: 'hidden' }} />
      </div>
    </section>
  );
};

export default HeroSection;
