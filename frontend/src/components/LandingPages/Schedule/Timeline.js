// TimelinePage.js
import React from "react";
import "./Timeline.css";
import heroBg from '../../../assets/bg/hero-bg1.jpg';

const events = [
  {
    date: "Day 1: October 12",
    title: "Opening Ceremony",
    desc: "The grand inauguration of Spardha with the lighting of the torch, march past, and an inaugural address by esteemed dignitaries."
  },
  {
    date: "Day 1: October 12",
    title: "Athletics Heats & Football Kickoff",
    desc: "Athletics preliminary heats begin and the first round of inter-college football tournament is held on the main ground."
  },
  {
    date: "Day 2: October 13",
    title: "Team Sports League Matches",
    desc: "Exciting league matches for basketball, volleyball, and hockey. Simultaneous group stage matches for cricket and badminton."
  },
  {
    date: "Day 2: October 13",
    title: "Solo & Doubles Events",
    desc: "Table tennis, chess, and badminton singles and doubles continue throughout the day across various venues."
  },
  {
    date: "Day 3: October 14",
    title: "Semi-finals & Fun Games",
    desc: "Intense semi-final rounds for all major sports followed by informal games and mini-challenges for all participants."
  },
  {
    date: "Day 3: October 14",
    title: "Finals & Closing Ceremony",
    desc: "All finals and medal matches, followed by the closing ceremony, prize distribution, and cultural performances to celebrate the spirit of Spardha."
  }
];

function TimelinePage() {
  return (
    <div className="timeline-container" 
    style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${heroBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <h1 className="timeline-title">Spardha Timeline</h1>
      <p className="timeline-subtitle">
        Follow the exciting lineup for Spardha, IIT BHU's premier intercollegiate sports festival
      </p>
      <div className="timeline">
        <div className="timeline-line"></div>
        {events.map((event, idx) => (
          <div
            className={`timeline-event ${idx % 2 === 0 ? "left" : "right"}`}
            key={idx}
          >
            <div className="timeline-circle">{`Day ${Math.floor(idx / 2) + 1}`}</div>
            <div className="timeline-content">
              <h3>{event.title}</h3>
              <span className="timeline-date">{event.date}</span>
              <p>{event.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TimelinePage;
