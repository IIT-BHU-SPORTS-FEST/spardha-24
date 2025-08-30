import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaBars, FaTimes } from "react-icons/fa";
import BlurText from "./Blurtext";
import "./HeroSection.css";

const HeroSection = () => {
  const targetDate = new Date("2025-10-10T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

  const handleAnimationComplete = () => console.log("Animation completed!");

  const routes = ["Home", "About Us", "Events", "Spardha", "Contact Us"];

  return (
    <section
      className="hero-section"
      style={{ backgroundImage: "url(/images/bg/hero-bg1.jpg)" }}
    >
      <div className="overlay"></div>

      {/* TOP BAR */}
      <div className="top-bar">
        <img src="/images/bg/spardha2025.png" alt="Spardha Logo" className="logo" />

        {/* Desktop Navbar */}
        <nav className="navbar">
          <ul>
            {routes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </nav>

        {/* Auth buttons */}
        <div className="auth-buttons">
          <button className="signup-btn">Sign Up</button>
          <button className="login-btn">Login</button>
        </div>

        {/* Hamburger for mobile+tablet */}
        <div className="hamburger-btn" onClick={() => setSidebarOpen(true)}>
          <FaBars size={28} color="white" />
        </div>
      </div>

      {/* Backdrop */}
      <div
        className={`sidebar-backdrop ${sidebarOpen ? "active" : ""}`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Sidebar for mobile+tablet */}
      <div className={`mobile-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="close-btn" onClick={() => setSidebarOpen(false)}>
          <FaTimes size={28} color="white" />
        </div>
        <ul>
          {routes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="mobile-auth-buttons">
          <button className="signup-btn">Sign Up</button>
          <button className="login-btn">Login</button>
        </div>
      </div>

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
        <div className="countdown-tagline">
          <div className="countdown">
            {[days, hours, minutes].map((time, i) => (
              <React.Fragment key={i}>
                <div className="time-box">
                  <span>{time}</span>
                  <p>{["DAYS", "HOURS", "MINUTES"][i]}</p>
                </div>
                {i < 2 && <div className="divider"></div>}
              </React.Fragment>
            ))}
          </div>
          <p className="tagline">
            "Where passion meets performance — Spardha, IIT BHU’s ultimate
            sports fest."
          </p>
        </div>

        <div className="event-info">
          <FaMapMarkerAlt />
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
