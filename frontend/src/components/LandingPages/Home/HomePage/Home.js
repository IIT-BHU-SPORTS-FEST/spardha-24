// import React from 'react';
import './Home.css';
import HeroSection from '../HeroSection/HeroSection';
import HomeContact from '../Contact/Contact';
import About from '../About_section/About';
import LocationCard from '../LocationCard/LocationCard';

// import Footer from '../Footer/Footer';

function App() {
  return (
      <div className="sctn">
        <HeroSection/>
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
