import React from 'react';
import styles from './Espardha.module.css';
import Carousel from '../Home/Carousel/Carouselhp';
import poster from './img/poster24.jpg';
import controler from './img/control.png';
import pdf from './ESPARDHA24.pdf'
import bgmi from "./img/bgmi.png"
import road_to_valor from "./img/roadtovalor.png"
import bullet_echo from "./img/bulletecho.png"
import realcricket from "./img/realcricket.png"
import { useState } from 'react';
import valorent from './img/valorent.png'

import bgmi_rulebook from './rulebook/BGMI_RULEBOOK.pdf'
import realcricket_rulebook from './rulebook/Real_Cricket_rulebook.pdf'
import road_to_valor_rulebook from './rulebook/Road_to_valor_rulebook.pdf'
import bullet_echo_rulebook from './rulebook/Bullet_Echo_Rulebook.pdf'
import valorant_rulebook from './rulebook/VALORANT_RULEBOOK.pdf'


const Espardha = () => {
  const [isCardVisible, setCardVisible] = useState(false);
  const handleRegisterClick = () => {
    setCardVisible(true);
  };
  const handleBackClick = () => {
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
                  <img src={controler} style={{ filter: "invert(100%" }} alt='controler' />
                  <h1>ESpardha</h1>
                </div>
                <div className={`${styles.middle}`}>
                  <div className={`${styles.discription}`}>
                    Join us as we write history in the world of esports. Gather
                    your team, sharpen your skills, and mark your calendars
                    because Espardha is about to set the gaming world on fire!
                    🔥
                  </div>
                  <p style={{ color: "white" }}> 🏆 #Espardha2025 🎮</p>
                  <div className={`${styles.buttons}`}>
                    {/* <Link to="/registration_form"> hello </Link> */}
                    <button className={`${styles.registerbtn} ${styles.btnclass}`} style={{ display: isCardVisible ? 'none' : 'block' }} onClick={handleRegisterClick}>Register Now</button>
                    <button className={`${styles.backbtn} ${styles.btnclass}`} style={{ display: isCardVisible ? 'block' : 'none' }} onClick={handleBackClick}>Back</button>
                    <a href={pdf} style={{ display: isCardVisible ? 'none' : 'block' }} download>
                      Download Brochure
                    </a>
                  </div>
                </div>
                {/* my try start*/}
                <div className={`${styles.cardmaindiv}`} style={{ display: isCardVisible ? 'flex' : 'none' }}>
                  <a href="https://forms.gle/fvo7NtGHoXLgGNcP6" className={`${styles.formlink}`} target='blank'>
                    <div className={`${styles.cardcon}`}>
                      <div className={`${styles.cardimg}`}>
                        <img src={valorent} alt='Valorant poster'></img>
                      </div>
                      <div className={`${styles.cardbottom}`}>
                        <h4 style={{ fontWeight: "bold" }}>Valorant E-Spardha  2025</h4>
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
                        <h4 style={{ fontWeight: "bold" }}> BGMI E-Spardha 2025</h4>
                        <div className={`${styles.prizepool}`}><h6>Registration Fee: ₹ 110/Person</h6>
                          <a href="https://forms.gle/E4qDU2kADYZuLL7Z9" className={`${styles.formlink}`} target='blank'>   <p> Register Here</p></a>
                          <a href={bgmi_rulebook} className={`${styles.btnclass}`} download>
                            Rulebook
                          </a>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="https://forms.gle/Ew8GVSMY1e2xCetr6" className={`${styles.formlink}`} target='blank'>
                    <div className={`${styles.cardcon}`}>
                      <div className={`${styles.cardimg}`}>
                        <img src={bullet_echo} alt='Bullet Echo poster'></img>
                      </div>
                      <div className={`${styles.cardbottom}`}>
                        <h4 style={{ fontWeight: "bold" }}>Bullet Echo E-Spardha  2025</h4>
                        <div className={`${styles.prizepool}`}><h6>Registration Fee: Free</h6>
                          <a href="https://forms.gle/Ew8GVSMY1e2xCetr6" className={`${styles.formlink}`} target='blank'>   <p> Register Here</p></a>
                          <a href={bullet_echo_rulebook} className={`${styles.btnclass}`} download>
                            Rulebook
                          </a>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="https://forms.gle/BxqY8G1YXY45qMMN8" className={`${styles.formlink}`} target='blank'>
                    <div className={`${styles.cardcon}`}>
                      <div className={`${styles.cardimg}`}>
                        <img src={road_to_valor} alt='Valorant poster'></img>
                      </div>
                      <div className={`${styles.cardbottom}`}>
                        <h4 style={{ fontWeight: "bold" }}>Road To Valor E-Spardha  2025</h4>
                        <div className={`${styles.prizepool}`}><h6>Registration Fee: Free</h6>
                          <a href="https://forms.gle/BxqY8G1YXY45qMMN8" className={`${styles.formlink}`} target='blank'>   <p> Register Here</p></a>
                          <a href={road_to_valor_rulebook} className={`${styles.btnclass}`} download>
                            Rulebook
                          </a>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="https://forms.gle/jHcXKDf5tSNLek386" className={`${styles.formlink}`} target='blank'>
                    <div className={`${styles.cardcon}`}>
                      <div className={`${styles.cardimg}`}>
                        <img src={realcricket} alt='Valorant poster'></img>
                      </div>
                      <div className={`${styles.cardbottom}`}>
                        <h4 style={{ fontWeight: "bold" }}>Real Cricket E-Spardha  2025</h4>
                        <div className={`${styles.prizepool}`}><h6>Registration Fee: Free</h6>
                          <a href="https://forms.gle/jHcXKDf5tSNLek386" className={`${styles.formlink}`} target='blank'>   <p> Register Here</p></a>
                          <a href={realcricket_rulebook} className={`${styles.btnclass}`} download>
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
