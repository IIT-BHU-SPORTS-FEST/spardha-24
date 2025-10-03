import React, { useState, useEffect } from 'react';
import './Sponsors.css';


const SPONSORS = [
  { name: 'Amul', website: 'https://amul.com', logo: '/images/sponsors/after2023/amul.png' },
  { name: 'Axis Bank', website: 'https://www.axisbank.com', logo: '/images/sponsors/after2023/axis-bank.png' },
  { name: 'Beardo', website: 'https://www.beardo.in', logo: '/images/sponsors/after2023/beardo.png' },
  { name: 'ixigo', website: 'https://www.ixigo.com', logo: '/images/sponsors/after2023/ixigo.png' },
  { name: 'Nestlé', website: 'https://www.nestle.in', logo: '/images/sponsors/after2023/nestle.png' },
  { name: 'Royal Enfield', website: 'https://www.royalenfield.com', logo: '/images/sponsors/after2023/royal-enfield.png' },
  { name: 'Volini', website: 'https://www.volini.com', logo: '/images/sponsors/after2023/volini.png' },
  { name: 'Real', website: 'https://www.realfruitpower.com', logo: '/images/sponsors/after2023/real.png' },
  { name: 'Traya', website: 'https://traya.health', logo: '/images/sponsors/after2023/traya.png' },
  { name: 'NTPC (Vindhyachal)', website: 'https://www.ntpc.co.in', logo: '/images/sponsors/after2023/ntpc.png' },
  { name: 'KRAFTON', website: 'https://www.krafton.com', logo: '/images/sponsors/after2023/krafton.png' },
  { name: 'SAIL', website: 'https://www.sail.co.in', logo: '/images/sponsors/after2023/sail.png' },
  { name: 'Physics Wallah', website: 'https://www.pw.live', logo: '/images/sponsors/after2023/physics-wallah.png' },
{ name: 'Unacademy', website: 'https://unacademy.com', logo: '/images/sponsors/after2023/unacademy.png' },
{ name: 'Asus', website: 'https://www.asus.com', logo: '/images/sponsors/after2023/asus.png' },
{ name: 'Pulse', website: 'https://www.dsgroup.com/our-brand/confectionery/pass-pass-pulse', logo: '/images/sponsors/after2023/pulse.png' },
{ name: 'Rajendra Toyota', website: 'https://www.toyotabharat.com', logo: '/images/sponsors/after2023/rajendra-toyota.png' },
{ name: 'Babolat', website: 'https://www.babolat.com', logo: '/images/sponsors/after2023/babolat.png' },
{ name: 'Vyapari Network', website: 'https://vyaparinetwork.com', logo: '/images/sponsors/after2023/vyapari-network.png' },




  // Provided local brands/placeholders
{ name: 'Festee', website: null, logo: '/images/sponsors/after2023/festee.png' },
{ name: 'The Chaskaa', website: null, logo: '/images/sponsors/after2023/the-chaskaa.png' },
{ name: 'Kaiyo', website: null, logo: '/images/sponsors/after2023/kaiyo.png' },
{ name: 'Vishal Bakers', website: null, logo: '/images/sponsors/after2023/vishal-bakers.png' },
{ name: 'Garlic Facctry', website: null, logo: '/images/sponsors/after2023/garlic-facctry.png' },
{ name: 'The Cric Store', website: null, logo: '/images/sponsors/after2023/the-cric-store.png' },
{ name: 'Govind Vastralaya', website: null, logo: '/images/sponsors/after2023/govind-vastralaya.png' },
{ name: 'May I Help You? (Mayank Shah)', website: null, logo: '/images/sponsors/after2023/may-i-help-you.png' },
{ name: 'NAB', website: null, logo: '/images/sponsors/after2023/nab.png' },
{ name: "De' Once More Restaurant", website: null, logo: '/images/sponsors/after2023/de-once-more.png' },
{ name: 'Sports Villa', website: null, logo: '/images/sponsors/after2023/sports-villa.png' },
{ name: 'Rento – Make Rides Easier', website: null, logo: '/images/sponsors/after2023/rento.png' },
{ name: 'Piplani Cycle & Co.', website: null, logo: '/images/sponsors/after2023/piplani-cycle.png' },
{ name: 'Cimaya', website: null, logo: '/images/sponsors/after2023/cimaya.png' },
{ name: 'Holly Waffle', website: null, logo: '/images/sponsors/after2023/holly-waffle.png' },
{ name: 'Safe House', website: null, logo: '/images/sponsors/after2023/safe-house.png' },
{ name: 'Shrawan Care', website: null, logo: '/images/sponsors/after2023/shrawan-care.png' },

];

function initialsOf(name) {
  const words = name.replace(/[^A-Za-z0-9 ]/g, '').trim().split(/\s+/).slice(0, 2);
  return words.map(w => (w[0] ? w[0].toUpperCase() : '')).join('');
}

export default function Sponsors() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
  document.querySelector('.mobile-sidebar')?.classList.remove('open');
  document.querySelector('.sidebar-backdrop')?.classList.remove('active');
}, []);

  useEffect(() => {
    // Set mounted state after a small delay
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 50);
    
    return () => clearTimeout(timer);
  }, []);

  // Force remount when route changes
  useEffect(() => {
    // This will run every time the component is mounted
    window.scrollTo(0, 0);
    
    return () => {
      // Cleanup when component unmounts
      setIsMounted(false);
    };
  }, []);

  return (
    <div className={`sponsors-page ${isMounted ? 'mounted' : ''}`}>
      {/* Hero Section with Sports Arena Image */}
      <section className="sponsors-hero">
        <div className="hero-overlay"></div>
        <h1>Our Valued Sponsors</h1>
        <p>Powering exceptional sporting experiences</p>
      </section>

      {/* Intro Text Section */}
      <section className="sponsors-intro">
        <div className="container">
          <h2>Our Past Sponsors</h2>
          <p>
            "With Spardha, our annual sports fest, 
            we strive to bridge students with industry while celebrating the spirit of sports. 
            Our sponsors make this possible by fueling our vision with both resources and experience."
          </p>
        </div>
      </section>

      {/* Sponsors Grid Section */}
      <section className="sponsors-main">
        <div className="container">
          <div className="sponsors-grid">
            {SPONSORS.map((sponsor) => (
              <div key={sponsor.name} className="sponsor-card">
                <a
                  href={sponsor.website || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${sponsor.name}`}
                >
                  <div className="card-inner">
                    {sponsor.logo ? (
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        loading="lazy"
                        className="sponsor-logo"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          const fallback = e.target.nextSibling;
                          if (fallback && fallback.classList.contains('logo-fallback')) {
                            fallback.style.display = 'flex';
                          }
                        }}
                      />
                    ) : null}
                    <div className="logo-fallback" style={sponsor.logo ? {display: 'none'} : {}}>
                      {initialsOf(sponsor.name)}
                    </div>
                  </div>
                  <span className="sponsor-name">{sponsor.name}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}