import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ResultFixture.css';
import versus from './icon/vs.png'
// import cricket_img from '../Events/image/crickethover.png';
// import badminton_img from '../Events/image/badmintonhover.png';
const Fixtures = ({ selectedSport , selectedDate}) => {
  const [matchData, setMatchData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_MICROSERVICE_URL;
    axios
      .get(`${apiUrl}/api/v1/games/`)
      .then((response) => {
        // console.log(response.data)
        setMatchData(response.data.data.reverse());
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);
  
    const filterMatches =
    selectedSport === 'All'
      ? matchData
      : matchData.filter((match) => match.game_name === selectedSport);

  const filteredMatches =
    selectedDate === 'All'
      ? filterMatches
      : filterMatches.filter((match) => match.game_start.slice(0,10) === selectedDate);

  return (
    <div className="Supreme">
      {loading ? (
        <p style={{ color: 'white' }}>Loading data...</p>
      ) : (
        filteredMatches.map((data, index) => (
          <div className="displayBox" key={index}>
            <div className="row1">
              <div style={{ display: 'flex' }}>
                {/* <img
                  src={data.icon}
                  style={{ height: '25px' }}
                  alt="sport icon"
                /> */}
                {data.game_name}
              </div>
              Time:&nbsp;{data.game_start.slice(11,16)}
            </div>
            <div className="row2">Venue:&nbsp;
              {data.game_venue}
              {/* | Round {data.round }*/}
            </div>
                  {
data.team2 ===" "? " ":
            <div className="row3" style={{ color: 'white' }}>
              <div className="row4">
                {/* <div className="rectangle"></div> */}
                {data.team1}
              </div>
              <span className="x">
                <img src={versus} alt='vs'/>
              </span>
              <div className="row4">
                {/* <div className="rectangle"></div> */}
                {data.team2}
              </div>
            </div>
                  }
          </div>
        ))
      )}
    </div>
  );
};

export default Fixtures;
