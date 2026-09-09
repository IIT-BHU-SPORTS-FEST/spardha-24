import React, { useEffect, useState } from 'react';
import './NewSponsors.css';
import stadiumBg from './stadium.jpeg';

const SPONSORS = [
  {
    name: 'Amul',
    website: 'https://amul.com',
    logo: '/images/sponsors/after2023/amul.png',
  },
  {
    name: 'Axis Bank',
    website: 'https://www.axisbank.com',
    logo: '/images/sponsors/after2023/axis-bank.png',
  },
  {
    name: 'Beardo',
    website: 'https://www.beardo.in',
    logo: '/images/sponsors/after2023/beardo.png',
  },
  {
    name: 'ixigo',
    website: 'https://www.ixigo.com',
    logo: '/images/sponsors/after2023/ixigo.png',
  },
  {
    name: 'Nestlé',
    website: 'https://www.nestle.in',
    logo: '/images/sponsors/after2023/nestle.png',
  },
  {
    name: 'Royal Enfield',
    website: 'https://www.royalenfield.com',
    logo: '/images/sponsors/after2023/royal-enfield.png',
  },
  {
    name: 'Volini',
    website: 'https://www.volini.com',
    logo: '/images/sponsors/after2023/volini.png',
  },
  {
    name: 'Real',
    website: 'https://www.realfruitpower.com',
    logo: '/images/sponsors/after2023/real.png',
  },
  {
    name: 'Traya',
    website: 'https://traya.health',
    logo: '/images/sponsors/after2023/traya.png',
  },
  {
    name: 'NTPC (Vindhyachal)',
    website: 'https://www.ntpc.co.in',
    logo: '/images/sponsors/after2023/ntpc.png',
  },
  {
    name: 'KRAFTON',
    website: 'https://www.krafton.com',
    logo: '/images/sponsors/after2023/krafton.png',
  },
  {
    name: 'SAIL',
    website: 'https://www.sail.co.in',
    logo: '/images/sponsors/after2023/sail.png',
  },
  {
    name: 'Physics Wallah',
    website: 'https://www.pw.live',
    logo: '/images/sponsors/after2023/physics-wallah.png',
  },
  {
    name: 'Unacademy',
    website: 'https://unacademy.com',
    logo: '/images/sponsors/after2023/unacademy.png',
  },
  {
    name: 'Asus',
    website: 'https://www.asus.com',
    logo: '/images/sponsors/after2023/asus.png',
  },
  {
    name: 'Pulse',
    website:
      'https://www.dsgroup.com/our-brand/confectionery/pass-pass-pulse',
    logo: '/images/sponsors/after2023/pulse.png',
  },
  {
    name: 'Rajendra Toyota',
    website: 'https://www.toyotabharat.com',
    logo: '/images/sponsors/after2023/rajendra-toyota.png',
  },
  {
    name: 'Babolat',
    website: 'https://www.babolat.com',
    logo: '/images/sponsors/after2023/babolat.png',
  },
  {
    name: 'Vyapari Network',
    website: 'https://vyaparinetwork.com',
    logo: '/images/sponsors/after2023/vyapari-network.png',
  },

  {
    name: 'Festee',
    website: null,
    logo: '/images/sponsors/after2023/festee.png',
  },
  {
    name: 'The Chaskaa',
    website: null,
    logo: '/images/sponsors/after2023/the-chaskaa.png',
  },
  {
    name: 'Kaiyo',
    website: null,
    logo: '/images/sponsors/after2023/kaiyo.png',
  },
  {
    name: 'Vishal Bakers',
    website: null,
    logo: '/images/sponsors/after2023/vishal-bakers.png',
  },
  {
    name: 'Garlic Facctry',
    website: null,
    logo: '/images/sponsors/after2023/garlic-facctry.png',
  },
  {
    name: 'The Cric Store',
    website: null,
    logo: '/images/sponsors/after2023/the-cric-store.png',
  },
  {
    name: 'Govind Vastralaya',
    website: null,
    logo: '/images/sponsors/after2023/govind-vastralaya.png',
  },
  {
    name: 'May I Help You? (Mayank Shah)',
    website: null,
    logo: '/images/sponsors/after2023/may-i-help-you.png',
  },
  {
    name: 'NAB',
    website: null,
    logo: '/images/sponsors/after2023/nab.png',
  },
  {
    name: "De' Once More Restaurant",
    website: null,
    logo: '/images/sponsors/after2023/de-once-more.png',
  },
  {
    name: 'Sports Villa',
    website: null,
    logo: '/images/sponsors/after2023/sports-villa.png',
  },
  {
    name: 'Rento – Make Rides Easier',
    website: null,
    logo: '/images/sponsors/after2023/rento.png',
  },
  {
    name: 'Piplani Cycle & Co.',
    website: null,
    logo: '/images/sponsors/after2023/piplani-cycle.png',
  },
  {
    name: 'Cimaya',
    website: null,
    logo: '/images/sponsors/after2023/cimaya.png',
  },
  {
    name: 'Holly Waffle',
    website: null,
    logo: '/images/sponsors/after2023/holly-waffle.png',
  },
  {
    name: 'Safe House',
    website: null,
    logo: '/images/sponsors/after2023/safe-house.png',
  },
  {
    name: 'Shrawan Care',
    website: null,
    logo: '/images/sponsors/after2023/shrawan-care.png',
  },
];

function initialsOf(name) {
  const words = name
    .replace(/[^A-Za-z0-9 ]/g, '')
    .trim()
    .split(/\s+/)
    .slice(0, 2);

  return words
    .map((word) => word.charAt(0).toUpperCase())
    .join('');
}

export default function Sponsors() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    document.querySelector('.mobile-sidebar')?.classList.remove('open');
    document.querySelector('.sidebar-backdrop')?.classList.remove('active');

    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 50);

    return () => {
      clearTimeout(timer);
      setIsMounted(false);
    };
  }, []);

  return (
    <div className={`sponsors-page ${isMounted ? 'mounted' : ''}`}>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="sponsors-hero"
        style={{ backgroundImage: `url(${stadiumBg})` }}
      >
        <div className="hero-overlay" />

        <div className="hero-content">
          <span className="hero-kicker">
            SPARDHA'26
          </span>

          <h1>
            Our Past
            <br />
            <em>Sponsors</em>
          </h1>

          <p>
            The brands and organizations that have supported
            the spirit of Spardha throughout the years.
          </p>
        </div>
      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}


      {/* =====================================================
          COLLAGE
      ===================================================== */}
      <section className="sponsors-stage" id="sponsors_bg">

        <div className="stage-light" />

        <div className="sponsors-plane">

          <div className="sponsors-grid">

            {SPONSORS.map((sponsor, index) => {

              const card = (
                <>
                  <div className="card-top">
                    <span className="card-brand">
                      SPARDHA
                    </span>

                    <span className="card-index">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>


                  <div className="card-center">

                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="sponsor-logo"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';

                        const fallback =
                          e.currentTarget.nextElementSibling;

                        if (fallback) {
                          fallback.style.display = 'flex';
                        }
                      }}
                    />

                    <div className="logo-fallback">
                      {initialsOf(sponsor.name)}
                    </div>

                  </div>


                  <div className="card-bottom">

                    <span className="card-name">
                      {sponsor.name}
                    </span>

                    <span className="card-arrow">
                      ↗
                    </span>

                  </div>
                </>
              );

              return (
                <div
                  key={sponsor.name}
                  className="sponsor-item"
                >
                  {sponsor.website ? (
                    <a
                      href={sponsor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sponsor-card"
                      aria-label={`Visit ${sponsor.name}`}
                    >
                      {card}
                    </a>
                  ) : (
                    <div className="sponsor-card">
                      {card}
                    </div>
                  )}
                </div>
              );
            })}

          </div>

        </div>

      </section>

    </div>
  );
}