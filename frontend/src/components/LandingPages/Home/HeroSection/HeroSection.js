import React from 'react';
import BlurText from './Blurtext';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './HeroSection.css';
import Confetti from './Confetti';
import { ConfettiSideCannons } from './ConfettiSideCannons';

const HeroSection = () => {
  const handleAnimationComplete = () => console.log('Animation completed!');

  return (
    <section
      className="hero-section"
      style={{ backgroundImage: 'url(/images/bg/hero-bg1.jpg)' }}
    >
      <div className="overlay"></div>

      <Confetti />
      <ConfettiSideCannons />

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
        {/* LEFT DIV: replaces countdown with opening ceremony info */}
        <div className="countdown-tagline">
          <div className="opening-info">
            <h4>Opening Ceremony</h4>
            <p>~ 9th October 2025, 5 PM</p>
            <p>Gymkhana, IIT BHU, Varanasi</p>
          </div>
        </div>

        {/* RIGHT DIV: event location */}
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
