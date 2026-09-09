// import React from 'react'
// import './ComingSoon.css'
// import Bgimg from '../Home/Images/newbg.jpg'

// const ComingSoon = () => {
//   return (
//     <div className='coming-soon'>
//         <div className="bg-img" style={{ backgroundImage: `url(${Bgimg})` }}></div>
//         <div className="overlay"></div>
//         <div className="content">
//             <h1>Coming Soon</h1>
//             <p>We are working hard to launch something amzing.Stay tuned!</p>
//             <div className='contact-no'>
//                <p>Contact</p>
//                <p>Devang Darpe</p>
//                <p>6350107038</p>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default ComingSoon;




import React from "react";
import "./ComingSoon.css";
import Bgimg from '../Home/Images/newbg.jpg'  // path to your background
//import Logo from "./images/logo/spardha26.jpeg";   // your gym logo

const ComingSoon = () => {
  return (
    <div className="coming-soon">
      {/* Background */}
      <div className="bg-img" style={{ backgroundImage: `url(${Bgimg})` }}></div>
      <div className="overlay"></div>

      {/* Content */}
      <div className="content">
        {/* Dumbbell */}
        <div className="dumbbell">
          {/* Left plates */}
          <div className="plate small"></div>
          <div className="plate medium"></div>
          <div className="plate big"></div>

            <div className="stopper stopper-left"></div>

          {/* Bar */}
          <div className="bar"></div>

          {/* Center circle with logo */}
          <div className="center-circle">
            <img src="/images/logo/spardha26.jpeg" alt="Logo" />
          </div>

          {/* Bar */}
          <div className="bar"></div>
  
           <div className="stopper stopper-right"></div>

          {/* Right plates */}
          <div className="plate big"></div>
          <div className="plate medium"></div>
          <div className="plate small"></div>
        </div>

        <h1>COMING SOON</h1>
        <p>Your Strength Awaits.</p>
        <p>Contact:</p>
        <p>Mohammad Kaif</p>
        <p>+91 : 9142994832</p>
        
      </div>
    </div>
  );
};

export default ComingSoon;
