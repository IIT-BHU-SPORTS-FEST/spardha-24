import React from 'react';
import styles from './Espardha.module.css';
import Carousel from '../Home/Carousel/Carouselhp';
import poster from './img/poster.png';
import controler from './img/control.png';
import pdf from './ESPARDHA.pdf';
import FooterMain from '../Footer/Footer';

const Espardha = () => {
  return (
    <>
      <Carousel />
      <div className={styles.espardhaWrapper}>
        <section
          id="espardha"
          className={`${styles.ftco_section} ${styles.events}`}
        >
          <div className={styles.container}>
            <div className={styles.maindiv}>
              <div className={styles.poster}>
                <img
                  src={poster}
                  alt="poster"
                  width={'250px'}
                  height={'354px'}
                />
              </div>
              <div className={styles.content}>
                <div className={styles.top}>
                  <img src={controler} alt='controler' />
                  <h1>ESpardha</h1>
                </div>
                <div className={styles.middle}>
                  <div className={styles.discription}>
                    Join us as we write history in the world of esports. Gather
                    your team, sharpen your skills, and mark your calendars
                    because Espardha is about to set the gaming world on fire!
                    🔥🔥
                  </div>
                  <p>🏆 #Espardha2023 🎮</p>
                  <div className={styles.buttons}>
                    <a href="http://zenet.co.in/" target="_blank" rel="noopener noreferrer">
                      Register Now
                    </a>
                    <a href={pdf} download>
                      Download Brochure
                    </a>
                  </div>
                </div>
                <div className={styles.bottom}>
                  <div className={styles.bottom_heading}>
                    <div className={styles.hr}></div>
                    <h3>Contact</h3>
                    <div className={styles.hr}></div>
                  </div>

                  <div className={styles.contacts}>
                    <div className={styles.contact_card}>
                      <h5>Dhruv Jain</h5>
                      <p>+91 9548962930</p>
                    </div>
                    <div className={styles.contact_card}>
                      <h5>Devang Darpe</h5>
                      <p>+91 6350107038</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <FooterMain />
    </>
  );
};

export default Espardha;
