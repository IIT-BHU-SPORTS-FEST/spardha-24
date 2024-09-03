import React from 'react';
import './Home.css';
import Mid from '../MiddleSection/MiddleSection';
import Carousel from '../Carousel/Carouselhp';
import CountdownTimer from '../Countdown/Countdown';
/*import Foot from '../HomeBottom/HomeBottom';*/
// import Footer from '../Footer/Footer';
import FooterMain from '../../Footer/Footer';

function App() {
  return (
    <>
    <div className="sctn">
      <div className="bg">
        <Carousel />
      </div>
      <div className="hehe">
        <div>
          <Mid />
          {/* <Footer/> */}
        </div>
        <div>
          {/*<Foot />*/}
          <CountdownTimer />
        </div>
      </div>
    </div>
     <FooterMain/>
    </>
  );
}

export default App;
