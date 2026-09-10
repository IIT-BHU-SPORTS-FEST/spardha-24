import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HeroSectionStadium.css';

const STATS = [
  { value: '10+', label: 'SPORTS' },
  { value: '40+', label: 'TEAMS' },
  { value: '800+', label: 'ATHLETES' },
  { value: '100+', label: 'MATCHES' },
];

function HeroSectionStadium() {
  useEffect(() => {
    const onScroll = () => {
      const layout = document.querySelector('.home-layout');
      if (layout) layout.classList.toggle('scrolled', window.scrollY > 28);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollDown = () => {
    const hero = document.getElementById('hs-hero');
    if (hero) {
      window.scrollTo({
        top: hero.offsetTop + hero.offsetHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hs-hero" className="hs-hero">
      <div className="hs-bg" aria-hidden="true" />
      <div className="hs-glow hs-glow-l" aria-hidden="true" />
      <div className="hs-glow hs-glow-r" aria-hidden="true" />

      <div className="hs-body">
        <div className="hs-content">
          <div className="hs-kicker hs-a1">
            <span className="hs-kicker-line" />
            THE GAME IS ON
          </div>

          <h1 className="hs-title hs-a2">
            WHERE
            <br />
            CHAMPIONS
            <br />
            <span className="hs-title-accent">ARE MADE</span>
          </h1>

          <div className="hs-rule hs-a2" aria-hidden="true" />

          <p className="hs-sub hs-a3">Compete. Conquer. Create History.</p>
          <p className="hs-meta hs-a3">
            <span>IIT (BHU) VARANASI</span>
            <span className="hs-meta-dot" aria-hidden="true" />
            <span>SPORTS FEST</span>
          </p>

          <div className="hs-actions hs-a4">
            <Link to="/register/signup" className="hs-btn hs-primary">
              REGISTER NOW
            </Link>
            <Link to="/events" className="hs-btn hs-ghost">
              EXPLORE EVENTS
            </Link>
          </div>
        </div>
      </div>

      <div className="hs-stats" aria-hidden="true">
        {STATS.map((s, i) => (
          <div className="hs-stat" key={s.label}>
            <span className="hs-stat-val">{s.value}</span>
            <span className="hs-stat-lab">{s.label}</span>
            {i < STATS.length - 1 && <span className="hs-stat-sep" />}
          </div>
        ))}
      </div>

      <div className="hs-side" aria-hidden="true">
        SEASON 2026
      </div>

      <button type="button" className="hs-scroll" onClick={scrollDown} aria-label="Scroll to explore">
        <span className="hs-scroll-txt">SCROLL TO EXPLORE</span>
        <span className="hs-chevron" aria-hidden="true">
          <span />
          <span />
        </span>
      </button>
    </section>
  );
}

export default HeroSectionStadium;