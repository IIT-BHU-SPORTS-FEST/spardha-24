import React, { useState } from "react";
import styles from "./Espardha.module.css";
import poster from "./img/poster25.png";
import controler from "./img/control.png";
// import pdf from "./ESPARDHA24.pdf";
import valorent from "./img/valorent.png";
import bgmi from "./img/bgmi.png";
// import freefire from "./img/freefire1.png";
import cod from "./img/CODM.png";
import fifa from "./img/FIFA.png";
import polygonb from "./img/poly.png";
// import polygonw from "./img/polyw.png";
// import polygonwi from "./img/polywi.png"
import valorant_rulebook from "./rulebook/VALORANT_RULEBOOK.pdf";
import bgmi_rulebook from "./rulebook/BGMI_RULEBOOK.pdf";
// import freefire_rulebook from "./rulebook/FREEFIRE_RULEBOOK.pdf";
import codm_rulebook from "./rulebook/CODM_Rulebook.pdf";
import fifa_rulebook from "./rulebook/FIFA_rulebook.pdf";

const eventsData = [
  {
    title: "Valorant E-Spardha 2025",
    img: valorent,
    fee: "₹100/Person",
    regLink: "https://forms.gle/zS9TLeaJyWBShVcH6",
    rulebook: valorant_rulebook,
  },
  {
    title:"BGMI E-Spardha \n2025",
    img: bgmi,
    fee: "Free",
    regLink: "https://forms.gle/MP4LPtveVJhpzbLs5",
    rulebook: bgmi_rulebook,
  },
  // {
  //   title: "Free Fire E-Spardha 2025",
  //   img: freefire,
  //   fee: "₹120/Person",
  //   regLink: "https://forms.gle/ef5ExuEMofxjL9SP9",
  //   rulebook: freefire_rulebook,
  // },
  {
    title: "Call Of Duty Mobile E-Spardha 2025",
    img: cod,
    fee: "₹100/Person",
    regLink: "https://forms.gle/4dFXAJd9adsvZqq1A",
    rulebook: codm_rulebook,
  },
  {
    title: "Fifa E-Spardha 2025",
    img: fifa,
    fee: "₹100/Person",
    regLink: "https://forms.gle/77mKg5YV3dHAP9yaA",
    rulebook: fifa_rulebook,
  },
  ];

const Espardha = () => {
  const [isCardVisible, setCardVisible] = useState(false);

  const handleRegisterClick = () => setCardVisible(true);
  const handleBackClick = () => setCardVisible(false);

  return (
    <>
  {/* <crousel /> */}
    <div 
      style={{
        backgroundImage: "url('/images/bg/hero-bg1-blur.png')",
        width: "100%",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
        overflow:"scroll"
      }}
    >
  <div className={styles.outermostdiv}>
    
  <img src={polygonb} alt="polygon" className={styles.polygonbg} />
    

    <section id="espardha" className={`${styles.ftco_section} ${styles.events}`}>
      <div className={styles.title}>
        <h2>E-Spardha</h2>
      </div>

      {/* Poster & Description */}
      <div className={styles.maindiv}>
        <div className={styles.poster}>
          <img src={poster} alt="poster" width="400px" height="500px" />
          <p style={{ color: "white" }}>🏆 #Espardha2025 🎮</p>
        </div>

        <div className={styles.content}>
          <div className={styles.top}>
            <img
              src={controler}
              style={{ filter: "invert(100%)" }}
              alt="controler"
            />
          </div>

          <div className={styles.middle}>
            <div className={styles.discription}>
              Join us as we write history in the world of esports. Gather your
              team, sharpen your skills, and mark your calendars because Espardha
              is about to set the gaming world on fire! 🔥
            </div>
            

            {/* Buttons */}
            <div className={styles.buttons}>
              <button
                className={`${styles.registerbtn} ${styles.btnclass}`}
                style={{ display: isCardVisible ? "none" : "block" }}
                onClick={handleRegisterClick}
              >
                Register Now
              </button>

              <button
                className={`${styles.backbtn} ${styles.btnclass}`}
                style={{ display: isCardVisible ? "block" : "none" }}
                onClick={handleBackClick}
              >
                Back
              </button>

              {/* <a
                href={pdf}
                className={`${styles.btnclass} ${styles.downloadBtn}`}
                style={{ display: isCardVisible ? "none" : "inline-block" }}
                download
              >
                Download Brochure
              </a> */}
            </div>
          </div>

          {/* Event Cards */}
          {isCardVisible && (
            <div className={styles.cardmaindiv}>
              {eventsData.map((event, index) => (
                <a
                  href={event.regLink}
                  className={styles.formlink}
                  target="_blank"
                  key={index}
                  rel="noreferrer"
                >
                  <div className={styles.cardcon}>
                    <div className={styles.cardimg}>
                      <img src={event.img} alt={`${event.title} poster`} />
                    </div>
                    <div className={styles.cardbottom}>
                      <h4>{event.title}</h4>
                      <div className={styles.prizepool}>
                        <h6>Registration Fee: {event.fee}</h6>
                        <p>Register Here</p>
                        <a
                          href={event.rulebook}
                          className={styles.btnclass}
                          download
                        >
                          Rulebook
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>

    {/* 🔹 Bottom White Polygon */}
    
  </div>
</div>
</>

  );
};

export default Espardha;
