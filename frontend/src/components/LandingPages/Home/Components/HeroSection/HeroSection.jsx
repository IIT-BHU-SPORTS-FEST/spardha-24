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
      class="hero-section"
      style={{ backgroundImage: "url(/hero-bg1.jpg)" }}
    >
      <div class="overlay"></div>

      {/* TOP BAR */}
      <div class="top-bar">
        <img src="/spardha2025.png" alt="Spardha Logo" class="logo" />

        {/* Desktop Navbar */}
        <nav class="navbar">
          <ul>
            {routes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </nav>

        {/* Auth buttons */}
        <div class="auth-buttons">
          <button class="signup-btn">Sign Up</button>
          <button class="login-btn">Login</button>
        </div>

        {/* Hamburger for mobile+tablet */}
        <div class="hamburger-btn" onClick={() => setSidebarOpen(true)}>
          <FaBars size={28} color="white" />
        </div>
      </div>

      {/* Backdrop */}
      <div
        class={`sidebar-backdrop ${sidebarOpen ? "active" : ""}`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Sidebar for mobile+tablet */}
      <div class={`mobile-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div class="close-btn" onClick={() => setSidebarOpen(false)}>
          <FaTimes size={28} color="white" />
        </div>
        <ul>
          {routes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div class="mobile-auth-buttons">
          <button class="signup-btn">Sign Up</button>
          <button class="login-btn">Login</button>
        </div>
      </div>

      {/* CENTER HEADING */}
      <div class="center-heading">
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
      <div class="bottom-row">
        <div class="countdown-tagline">
          <div class="countdown">
            {[days, hours, minutes].map((time, i) => (
              <React.Fragment key={i}>
                <div class="time-box">
                  <span>{String(time).padStart(2, "0")}</span>
                  <p>{["DAYS", "HOURS", "MINUTES"][i]}</p>
                </div>
                {i < 2 && <div class="divider"></div>}
              </React.Fragment>
            ))}
          </div>

          <p class="tagline">
            "Where passion meets performance — Spardha, IIT BHU’s ultimate
            sports fest."
          </p>
        </div>

        <div class="event-info">
          <div class="location-box">
          <FaMapMarkerAlt class="location-logo" color="black" />
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
