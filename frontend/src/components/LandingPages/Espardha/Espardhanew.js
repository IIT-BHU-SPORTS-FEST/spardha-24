import React, { useState, useEffect } from 'react';

import bgWallpaper from './e spardha wallpaper.jpg.jpeg';
import bgmiImg from './bgmi.jpg.png';
import ffImg from './FF.jpg.png';
import codImg from './COD.jpg.png';
import valoImg from './valo.jpg.png';

const games = [
  {
    id: 'bgmi', name: 'BGMI', emoji: '🎮', image: bgmiImg,
    description: `BGMI at e-Spardha is an intense battle-royale competition where teams compete through strategy, teamwork, communication, and individual skill to secure the highest possible score. Only officially registered players are permitted to participate, and all teams must join the designated lobby on time and follow the announced match format. Points will be awarded based on placement and eliminations. The use of hacks, cheats, scripts, exploits, modified files, or unauthorized software is strictly prohibited. Players must maintain fair play and report any technical issues, disputes, or suspicious activity to the tournament officials immediately. The decision of the e-Spardha organizing committee regarding any violation or dispute will be final.`
  },
  {
    id: 'ff', name: 'Free Fire MAX', emoji: '🔥', image: ffImg,
    description: `Free Fire at e-Spardha is a fast-paced battle-royale competition that challenges players to showcase their reflexes, strategy, teamwork, and survival skills. Only officially registered players may participate, and teams must join their assigned lobby within the scheduled time while following the announced tournament format and scoring system. Rankings will be determined based on placement and eliminations. The use of hacks, mods, scripts, exploits, third-party applications, or any unfair means of gaining an advantage is strictly prohibited. Players are expected to maintain sportsmanship throughout the tournament and report any technical issue or dispute to the officials immediately. The decision of the e-Spardha organizing committee shall be considered final.`
  },
  {
    id: 'cod', name: 'Call of Duty: Mobile', emoji: '🎯', image: codImg,
    description: `Call of Duty: Mobile at e-Spardha brings an action-packed competitive experience where teamwork, accuracy, tactical thinking, and quick decision-making determine the winner. Only officially registered players are permitted to participate, and all teams must follow the approved roster, match format, game settings, and schedule announced by the organizers. The use of hacks, cheats, scripts, modified clients, exploits, unauthorized applications, or any other unfair advantage is strictly forbidden. Players must join the assigned lobby on time, maintain proper conduct, and report technical problems, disputes, or suspected violations to the tournament officials immediately. The organizing committee reserves the right to impose penalties or disqualify teams for rule violations, and its decision shall be final.`
  },
  {
    id: 'valo', name: 'Valorant', emoji: '⚡', image: valoImg,
    description: `Valorant at e-Spardha is a tactical team-based competition where precision, strategy, communication, and coordination are key to victory. Only registered players using their approved accounts are allowed to compete, and teams must follow the announced match format, map selection, schedule, and tournament procedures. The use of cheats, hacks, scripts, exploits, unauthorized software, account sharing, or external assistance is strictly prohibited. Teams must be present in the designated lobby on time and immediately report any technical issue, suspected violation, or dispute to the tournament administrators. Any player or team found violating the rules may face penalties or disqualification, and the decision of the e-Spardha officials will be final.`
  },
];

const Espardhanew = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="espardha-container"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(10, 25, 50, 0.65), rgba(5, 12, 25, 0.9)), url('${bgWallpaper}')`
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Google+Sans:wght@400;500;700&display=swap');

        html {
          scroll-behavior: smooth;
        }

        .espardha-container {
          width: 100%;
          min-height: 100vh;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center top;
          background-attachment: fixed;
          color: #ffffff;
          padding-top: 140px;
          padding-bottom: 100px;
          box-sizing: border-box;
          overflow-x: hidden;
          position: relative;
        }

        .espardha-main-content {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 10;
          transition: transform 0.1s ease-out;
        }

        /* Top Header Titles Row */
        .espardha-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          width: 100%;
          padding-left: 10px;
          padding-right: 15px;
        }

        .espardha-yellow-title {
          color: #FFDE00 !important;
          font-family: 'Black Ops One', cursive, sans-serif !important;
          font-size: 3.2rem;
          font-weight: 400;
          margin: 0;
          letter-spacing: 2px;
          display: inline-block;
          text-shadow: 2px 2px 0px #000, 4px 4px 10px rgba(0,0,0,0.9), 0 0 20px rgba(255, 222, 0, 0.5);
          transition: transform 0.3s ease, text-shadow 0.3s ease;
        }

        .espardha-yellow-title:hover {
          transform: scale(1.05) translateY(-3px);
          text-shadow: 4px 6px 0px #000, 0 0 30px rgba(255, 222, 0, 0.9);
        }

        /* 4 Game Rows Grid */
        .espardha-games-grid {
          display: flex;
          flex-direction: column;
          gap: 35px;
        }

        .espardha-game-row {
          display: grid;
          grid-template-columns: 210px 1fr;
          gap: 30px;
          align-items: center;
          perspective: 1000px;
        }

        /* Left Card Poster with Dynamic 3D Tilt */
        .espardha-card-container {
          position: relative;
          width: 210px;
          height: 270px;
          border-radius: 22px;
          background: #081020;
          border: 2px solid rgba(255, 255, 255, 0.8);
          box-shadow: -10px 15px 30px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 150, 255, 0.2);
          transform-style: preserve-3d;
          transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.4s ease, border-color 0.4s ease;
          cursor: pointer;
        }

        .espardha-card-inner {
          position: absolute;
          inset: 0;
          border-radius: 20px;
          overflow: hidden;
        }

        .espardha-game-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .espardha-card-depth-frame {
          position: absolute;
          inset: 12px;
          border: 1.5px solid rgba(255, 222, 0, 0.6);
          border-radius: 12px;
          pointer-events: none;
          transform: translateZ(30px);
          transition: transform 0.4s ease, border-color 0.4s ease;
          box-shadow: inset 0 0 15px rgba(255, 222, 0, 0.2);
        }

        .espardha-card-container:hover {
          transform: rotateY(-12deg) rotateX(8deg) scale(1.03);
          border-color: #FFDE00;
          box-shadow: -20px 25px 45px rgba(0, 0, 0, 0.9), 0 0 30px rgba(255, 222, 0, 0.6);
        }

        .espardha-card-container:hover .espardha-game-card-img {
          transform: scale(1.1);
        }

        .espardha-card-container:hover .espardha-card-depth-frame {
          transform: translateZ(50px);
          border-color: #FFDE00;
        }

        /* Right Column Glassmorphic Rulebook Card */
        .espardha-rulebook-box {
          position: relative;
          overflow: hidden;
          width: 100%;
          height: auto;
          min-height: 270px;
          border-radius: 22px;
          background: linear-gradient(135deg, rgba(15, 35, 70, 0.65), rgba(5, 15, 35, 0.85));
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1.5px solid rgba(255, 255, 255, 0.25);
          box-shadow: 15px 20px 40px rgba(0, 0, 0, 0.7), inset 0 1px 1px rgba(255, 255, 255, 0.3);
          box-sizing: border-box;
          padding: 20px 22px;
          transform-style: preserve-3d;
          transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), border-color 0.4s ease, box-shadow 0.4s ease;
          cursor: pointer;
        }

        .espardha-rulebook-game-title {
          margin: 0 0 10px 0;
          font-family: 'Black Ops One', cursive, sans-serif;
          font-size: 1.1rem;
          color: #FFDE00;
          letter-spacing: 1px;
          text-shadow: 0 0 10px rgba(255, 222, 0, 0.4);
        }

        .espardha-rulebook-para {
          margin: 0;
          font-family: 'Google Sans', sans-serif;
          font-weight: 400;
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.6;
          letter-spacing: 0.1px;
          text-align: justify;
        }

        .espardha-rulebook-box:hover {
          transform: rotateY(8deg) rotateX(-4deg) scale(1.01);
          border-color: rgba(255, 222, 0, 0.8);
          box-shadow: 20px 30px 50px rgba(0, 0, 0, 0.85), 0 0 35px rgba(0, 140, 255, 0.4);
        }

        /* Bottom Sign Up Section */
        .espardha-signup-section {
          text-align: center;
          margin-top: 70px;
          width: 100%;
        }

        .espardha-signup-link {
          text-decoration: none;
          display: inline-block;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
        }

        .espardha-signup-title {
          color: #FFDE00 !important;
          font-family: 'Black Ops One', cursive, sans-serif !important;
          font-size: 3.8rem;
          font-weight: 400;
          margin: 0;
          cursor: pointer;
          display: inline-block;
          letter-spacing: 2px;
          text-shadow: 2px 2px 0px #000, 4px 4px 10px rgba(0,0,0,0.9), 0 0 25px rgba(255, 222, 0, 0.5);
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), text-shadow 0.3s ease;
        }

        .espardha-signup-link:hover .espardha-signup-title {
          transform: scale(1.1) translateY(-5px);
          text-shadow: 4px 8px 0px #000, 0 0 40px rgba(255, 222, 0, 0.9);
        }

        @media (max-width: 850px) {
          .espardha-header-row {
            flex-direction: column;
            gap: 15px;
          }
          .espardha-game-row {
            grid-template-columns: 1fr;
          }
          .espardha-card-container {
            width: 100%;
            max-width: 210px;
            margin: 0 auto;
          }
          .espardha-yellow-title {
            text-align: center;
          }
        }
      `}</style>

      {/* Main Grid Content Area */}
      <div
        className="espardha-main-content"
        style={{
          transform: `perspective(1000px) rotateY(${mousePos.x * 3}deg) rotateX(${-mousePos.y * 3}deg)`
        }}
      >
        {/* Top Headings Row */}
        <div className="espardha-header-row">
          <h1 className="espardha-yellow-title">CONTEST</h1>
          <h1 className="espardha-yellow-title">RULEBOOK</h1>
        </div>

        {/* Game Cards Rows */}
        <div className="espardha-games-grid">
          {games.map((game) => (
            <div key={game.id} className="espardha-game-row">
              {/* Contest Image Card */}
              <div className="espardha-card-container">
                <div className="espardha-card-inner">
                  <img src={game.image} alt={game.name} className="espardha-game-card-img" />
                </div>
                <div className="espardha-card-depth-frame" />
              </div>

              {/* Clean Dark Blue Rulebook Glass Card */}
              <div className="espardha-rulebook-box">
                <p className="espardha-rulebook-game-title">{game.emoji} {game.name}</p>
                <p className="espardha-rulebook-para">{game.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Heading: Sign Up with a valid safe link / anchor target placeholder */}
        <div className="espardha-signup-section">
          <a href="register/signup" className="espardha-signup-link">
            <h1 className="espardha-signup-title">SIGN UP</h1>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Espardhanew;