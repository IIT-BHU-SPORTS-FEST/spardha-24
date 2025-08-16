import React, { useState } from 'react';
import styles from './Matches.module.css';
import Carousel from '../Home/Carousel/Carouselhp';
import Fixtures from './Fixtures';
import MatchResults from './Result';

const Matches = () => {
  const [activeTab, setActiveTab] = useState('Fixtures');
  const navItem = [
    'All',
    'Athletics',
    'Badminton',
    'Basketball',
    'Boxing',
    'Chess',
    'Cricket',
    'Cycling',
    'Football',
    'Handball',
    'Hockey',
    'Kabbadi',
    'Kho-kho',
    'Powerlifting',
    'Squash',
    'Table Tennis',
    'Taekwondo',
    'Tennis',
    'Volleyball',
    'Weight Lifting',
  ];
  const [selectedDate, setSelectedDate] = useState('2025-10-18'); 
  const [selectedSport, setSelectedSport] = useState('All');
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  const scrollNavbar = (direction) => {
    const navbar = document.getElementById('navbar');
    const step = 200; // Adjust the scroll step as needed
    if (direction === 'left') {
      navbar.scrollLeft -= step;
    } else {
      navbar.scrollLeft += step;
    }
  };
  
  return (
    <>
      <Carousel />
      <div>
        <section
          id="matches"
          className={`${styles.ftco_section} ${styles.events}`}
        >
          <div
            className={`${styles.container} ${styles.pb_1} ${styles.maindiv}`}
          >
            <div className={`${styles.maindiv_top}`}>
              <h2 className={`${styles.mb_1} ${styles.H2}`}>MATCHES</h2>
              <div className={`${styles.options}`}>
                <span onClick={() => setActiveTab('Fixtures')}>
                  <h3
                    style={{
                      color: activeTab === 'Fixtures' ? '#4982F6' : null,
                      borderBottom:
                        activeTab === 'Fixtures'
                          ? ' 0.1875rem solid #4982F6'
                          : null,
                      cursor:'pointer',
                    }}
                  >
                    Fixtures
                  </h3>
                </span>
                {/* <h3 style={{ fontWeight: 300 }}>|</h3>
                <span onClick={() => setActiveTab('Results')}>
                  <h3
                    style={{
                      color: activeTab === 'Results' ? '#760e53' : null,
                      borderBottom:
                        activeTab === 'Results'
                          ? ' 0.1875rem solid #760e53'
                          : null,
                        cursor:'pointer',
                    }}
                  >
                    Results
                  </h3>
                </span> */}
              </div>
            </div>
            <div className={`${styles.horizontal_navbar_container}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="19"
                viewBox="0 0 11 19"
                fill="white"
                className={`${styles.svg_arrow}`}
                onClick={() => scrollNavbar('left')}
              >
                <path
                  d="M10.3725 0.3675C9.8825 -0.1225 9.0925 -0.1225 8.6025 0.3675L0.2925 8.6775C-0.0975 9.0675 -0.0975 9.6975 0.2925 10.0875L8.6025 18.3975C9.0925 18.8875 9.8825 18.8875 10.3725 18.3975C10.8625 17.9075 10.8625 17.1175 10.3725 16.6275L3.1325 9.3775L10.3825 2.1275C10.8625 1.6475 10.8625 0.8475 10.3725 0.3675Z"
                  fill="white"
                />
              </svg>
              <div id="navbar" className={`${styles.horizontal_navbar}`}>
                {navItem.map((item, index) => (
                  <div
                    key={index}
                    className={`${styles.navbar_item}`}
                    onClick={() => setSelectedSport(item)}
                    style={{
                      backgroundColor:
                        selectedSport === item ? '#4982F6' : null,
                      color: selectedSport === item ? 'white' : null,
                      borderColor: selectedSport === item ? '#4982F6' : null,
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="19"
                viewBox="0 0 11 19"
                fill="white"
                className={`${styles.svg_arrow}`}
                onClick={() => scrollNavbar('right')}
              >
                <path
                  d="M0.368711 18.3981C0.85871 18.8881 1.64871 18.8881 2.13871 18.3981L10.4487 10.0881C10.8387 9.69812 10.8387 9.06813 10.4487 8.67813L2.13871 0.368124C1.64871 -0.121876 0.85871 -0.121876 0.368711 0.368124C-0.121289 0.858124 -0.121289 1.64812 0.368711 2.13812L7.60871 9.38813L0.358712 16.6381C-0.121287 17.1181 -0.121289 17.9181 0.368711 18.3981Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className={`${styles.date}`}>
              {/* <label htmlFor="dateSelect">Select a Date:</label> */}
              <select
                id="dateSelect"
                value={selectedDate}
                onChange={handleDateChange}
                style={{ color: 'white', backgroundColor: 'transparent' }}
              >
                <option style={{ color: 'black', backgroundColor: 'transparent' }} value="2025-10-18">October 18, 2025</option>
                <option style={{ color: 'black', backgroundColor: 'transparent' }}  value="2025-10-19">October 19, 2025</option>
                <option style={{ color: 'black', backgroundColor: 'transparent' }}  value="2025-10-20">October 20, 2025 </option>
                <option style={{ color: 'black', backgroundColor: 'transparent' }}  value="All">All</option>
              </select>
              {/* <p>Selected Date: {selectedDate}</p> */}
            </div>
            <div className={`${styles.scrollablediv}`}>
              {activeTab === 'Fixtures' ? (
                <Fixtures selectedSport={selectedSport} selectedDate={selectedDate} />
              ) : (
                <MatchResults selectedSport={selectedSport} selectedDate={selectedDate}/>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Matches;
