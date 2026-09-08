import React from 'react';

import bgWallpaper from './e spardha wallpaper.jpg.jpeg';
import bgmiImg from './bgmi.jpg.png';
import ffImg from './FF.jpg.png';
import codImg from './COD.jpg.png';
import valoImg from './valo.jpg.png';

const games = [
  { id: 'bgmi', name: 'BGMI', image: bgmiImg },
  { id: 'ff', name: 'Free Fire MAX', image: ffImg },
  { id: 'cod', name: 'Call of Duty Mobile', image: codImg },
  { id: 'valo', name: 'Valorant', image: valoImg },
];

const Espardhanew = () => {
  return (
    <div 
      className="espardha-container"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(10, 25, 50, 0.55), rgba(5, 12, 25, 0.85)), url('${bgWallpaper}')`
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Irish+Grover&display=swap');

        .espardha-container {
          width: 100%;
          min-height: 100vh;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center top;
          background-attachment: fixed;
          color: #ffffff;
          padding-top: 140px;
          padding-bottom: 80px;
          box-sizing: border-box;
        }

        .espardha-main-content {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Top Titles Grid */
        .espardha-header-row {
          display: grid;
          grid-template-columns: 190px 1fr;
          gap: 25px;
          align-items: center;
          margin-bottom: 25px;
        }

        /* Yellow Figma Font for Contest, Rulebook */
        .espardha-yellow-title {
          color: #FFDE00 !important;
          font-family: 'Irish Grover', cursive, sans-serif !important;
          font-size: 3rem;
          font-weight: 400;
          margin: 0;
          letter-spacing: 1px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9), 0 0 10px rgba(255, 222, 0, 0.4);
          display: inline-block;
          cursor: pointer;
          transition: transform 0.3s ease, text-shadow 0.3s ease, color 0.3s ease;
        }

        /* Hover effect for Contest & Rulebook */
        .espardha-yellow-title:hover {
          transform: translateY(-3px) scale(1.05);
          text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.9), 0 0 22px rgba(255, 222, 0, 0.95);
        }

        /* 4 Game Rows */
        .espardha-games-grid {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .espardha-game-row {
          display: grid;
          grid-template-columns: 190px 1fr;
          gap: 25px;
          align-items: center;
        }

        /* Compact Game Poster Card */
        .espardha-card-container {
          width: 190px;
          height: 250px;
          border-radius: 20px;
          overflow: hidden;
          border: 2px solid rgba(255, 255, 255, 0.75);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .espardha-card-container:hover {
          transform: scale(1.02);
        }

        .espardha-game-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Glassmorphic Curved Rectangle Box */
        .espardha-rulebook-box {
          width: 100%;
          height: 250px;
          border-radius: 20px;
          background: rgba(20, 50, 95, 0.35);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1.5px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
          box-sizing: border-box;
          padding: 20px;
        }

        /* Bottom Sign Up Section */
        .espardha-signup-section {
          text-align: center;
          margin-top: 45px;
        }

        .espardha-signup-link {
          text-decoration: none;
          display: inline-block;
        }

        .espardha-signup-title {
          color: #FFDE00 !important;
          font-family: 'Irish Grover', cursive, sans-serif !important;
          font-size: 3.4rem;
          font-weight: 400;
          margin: 0;
          cursor: pointer;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9), 0 0 12px rgba(255, 222, 0, 0.5);
          display: inline-block;
          transition: transform 0.3s ease, text-shadow 0.3s ease;
        }

        /* Hover effect for Sign Up */
        .espardha-signup-title:hover {
          transform: translateY(-4px) scale(1.08);
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9), 0 0 28px rgba(255, 222, 0, 1);
        }

        @media (max-width: 850px) {
          .espardha-header-row, .espardha-game-row {
            grid-template-columns: 1fr;
          }
          .espardha-card-container {
            width: 100%;
            max-width: 190px;
            margin: 0 auto;
          }
          .espardha-yellow-title {
            text-align: center;
          }
        }
      `}</style>

      <div className="espardha-main-content">
        {/* Top Section Titles */}
        <div className="espardha-header-row">
          <h1 className="espardha-yellow-title">Contest</h1>
          <h1 className="espardha-yellow-title">Rulebook</h1>
        </div>

        {/* 4 Games & Rulebook Grid */}
        <div className="espardha-games-grid">
          {games.map((game) => (
            <div key={game.id} className="espardha-game-row">
              {/* Decreased Game Poster Logo */}
              <div className="espardha-card-container">
                <img src={game.image} alt={game.name} className="espardha-game-card-img" />
              </div>

              {/* Glassmorphic Curved Rectangle Box */}
              <div className="espardha-rulebook-box">
                {/* Content for rulebook goes here */}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Clickable Sign Up Link */}
        <div className="espardha-signup-section">
          <a href="" className="espardha-signup-link">
            <h1 className="espardha-signup-title">Sign Up</h1>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Espardhanew;