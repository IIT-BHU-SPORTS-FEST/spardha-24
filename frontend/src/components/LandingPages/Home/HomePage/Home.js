// import React from 'react';
import './Home.css';
import HeroSection from '../HeroSection/HeroSectionStadium';
import HomeContact from '../Contact/ContactNew';
import About from '../About_section/newAbout';
import LocationCard from '../LocationCard/LocationCardNew';

import FootballCountdown from '../Countdown/FootballCountdown.js';
// import Footer from '../Footer/Footer';

function App() {
  return (
      <div className="sctn">
        <HeroSection/>
        <FootballCountdown/>
        <div className='second-container'>
          <About/>
          <LocationCard/>
          {/* <ContactForm /> */}
        </div>
        <HomeContact/>
      </div>
  );
}

export default App;
