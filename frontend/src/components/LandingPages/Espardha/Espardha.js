import React from 'react';
import styles from './Espardha.module.css';
import Carousel from '../Home/Carousel/Carouselhp';
import poster from './img/poster24.png';
import controler from './img/control.png';
import pdf from './ESPARDHA24.pdf'
import bgmi from "./img/bgmi.png"
import { useState } from 'react';
import freefire from './img/freefire.png'
import valorent from './img/valorent.png'
import bgmi_rulebook from './rulebook/BGMI_RULEBOOK.pdf'
import freefire_rulebook from './rulebook/FREEFIRE_RULEBOOK.pdf'
import valorant_rulebook from './rulebook/VALORANT_RULEBOOK.pdf'


const Espardha = () => {
  const [isCardVisible, setCardVisible] = useState(false);
  const handleRegisterClick = () => {
    setCardVisible(true);
  };
  const handleBackClick= () =>{
    setCardVisible(false);
  };

    // const handleRegisterClick = () => {
    //  document.getElementById("cardmaindiv").style.display="flex";
    // };
  return (
    <>
      <Carousel />
      <div className={`${styles.outermostdiv}`} >
        <section
          id="espardha"
          className={`${styles.ftco_section} ${styles.events}`}
        >
          <div className={`${styles.container}`}>
            <div className={`${styles.maindiv}`}>
              <div className={`${styles.poster}`}>
                <img
                  src={poster}
                  alt="poster"
                  width={'250px'}
                  height={'354px'}
                />
              </div>
              <div className={`${styles.content}`}>
                <div className={`${styles.top}`}>
                  <img src={controler} style={{filter:"invert(100%"}} alt='controler' />
                  <h1>ESpardha</h1>
                </div>
                <div className={`${styles.middle}`}>
                  <div className={`${styles.discription}`}>
                    Join us as we write history in the world of esports. Gather
                    your team, sharpen your skills, and mark your calendars
                    because Espardha is about to set the gaming world on fire!
                    🔥
                  </div>
                  <p style={{ color: "white" }}> 🏆 #Espardha2024 🎮</p>
                  <div className={`${styles.buttons}`}>
                    {/* <Link to="/registration_form"> hello </Link> */}
                    <button className={`${styles.registerbtn} ${styles.btnclass}`} style={{display: isCardVisible ? 'none' : 'block'}}  onClick={handleRegisterClick}>Register Now</button>
                    <button className={`${styles.backbtn} ${styles.btnclass}`} style={{display: isCardVisible ? 'block' : 'none'}}  onClick={handleBackClick}>Back</button>
                    <a href={pdf} style={{display: isCardVisible ? 'none' : 'block'}} download>
                      Download Brochure
                    </a>
                  </div>
                </div>
                {/* my try start*/}
                <div className={`${styles.cardmaindiv}` } style={{display: isCardVisible ? 'flex' : 'none'}}>
                <a href="https://forms.gle/LMGudFmq3dLez9dr6" className={`${styles.formlink}`} target='blank'> 
                  <div className={`${styles.cardcon}`}>
                    <div className={`${styles.cardimg}`}>
                      <img src={freefire} alt='Freefire Poster'></img>
                    </div>
                    <div className={`${styles.cardbottom}`}>
                      <h4 style={{ fontWeight:"bold"}}>Freefire E-Spardha 2024</h4>
                      <div className={`${styles.prizepool}`}><h6>Registration Fee: ₹ 100/Person</h6>
                      <a href="https://forms.gle/LMGudFmq3dLez9dr6" className={`${styles.formlink}`} target='blank'>   <p> Register Here</p></a>
                      <a href={freefire_rulebook} className={`${styles.btnclass}`} download>
                      Rulebook
                    </a>
                      </div>
                    </div>
                  </div>
                  </a>
                  <a href="https://forms.gle/fvo7NtGHoXLgGNcP6"  className={`${styles.formlink}`}target='blank'> 
                  <div className={`${styles.cardcon}`}>
                    <div className={`${styles.cardimg}`}>
                      <img src={valorent} alt='Valorant poster'></img>
                    </div>
                    <div className={`${styles.cardbottom}`}>
                      <h4 style={{ fontWeight:"bold"}}>Valorant E-Spardha  2024</h4>
                      <div className={`${styles.prizepool}`}><h6>Registration Fee: ₹ 100/Person</h6>
                      <a href="https://forms.gle/fvo7NtGHoXLgGNcP6" className={`${styles.formlink}`} target='blank'>   <p> Register Here</p></a>
                      <a href={valorant_rulebook} className={`${styles.btnclass}`} download>
                      Rulebook
                    </a>
                      </div>
                    </div>
                  </div>
                  </a>
                  <a href="https://forms.gle/E4qDU2kADYZuLL7Z9" className={`${styles.formlink}`} target='blank'> 
                  <div className={`${styles.cardcon}`}>
                    <div className={`${styles.cardimg}`}>
                      <img src={bgmi} alt='BGMI Poster'></img>
                    </div>
                    <div className={`${styles.cardbottom}`}>
                    <h4 style={{ fontWeight:"bold"}}> BGMI E-Spardha 2024</h4>
                    <div className={`${styles.prizepool}`}><h6>Registration Fee: ₹ 110/Person</h6>
                      <a href="https://forms.gle/E4qDU2kADYZuLL7Z9" className={`${styles.formlink}`} target='blank'>   <p> Register Here</p></a>
                      <a href={bgmi_rulebook} className={`${styles.btnclass}`} download>
                      Rulebook
                    </a>
                      </div>
                    </div>
                  </div>
                  </a>
                </div>
                {/* my try end*/}
                <div className={`${styles.bottom}`}>
                  <div className={`${styles.bottom_heading}`}>
                    <div className={`${styles.hr}`}></div>
                    <h3>Contact</h3>
                    <div className={`${styles.hr}`}></div>
                  </div>

                  <div className={`${styles.contacts}`}>
                    <div className={`${styles.contact_card}`}>
                      <h5>Krishna</h5>
                      <p>+91 7483686131</p>
                    </div>
                    <div className={`${styles.contact_card}`}>
                      <h5>Aryan Agarwal</h5>
                      <p>+91 6375457623</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Espardha;
