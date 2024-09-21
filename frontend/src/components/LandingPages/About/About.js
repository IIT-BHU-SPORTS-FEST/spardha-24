import React from 'react';
import styles from './About.module.css';
import talkofthetown from './talkoftown24.png';
import hype from './hype24.png';
import takeback from './takeback24.png'
import Greencounter from '../GreenCounter/Greencounter';
import Carousel from '../Home/Carousel/Carouselhp';
import Gallery from '../Gallery/Gallery'
import Footer from '../Footer/footer';
const About = () => {
  return (
    <>
      <Carousel />
      <div iclassName={styles.aboutus}>
        <section className={styles.maindiv}>
          {/* <h2
            className={styles['mb-1']}
            style={{
              // fontSize: '3.5em',
              fontfamily: 'Poppins',
              margin: '0px',
              color: 'rgba(73, 130, 246, 1)',

              marginBottom: '20px',
              fontWeight: '700',
              fontSize: '40px ',
              letterSpacing: '2px',
              // textDecoration:"underline"

            }}
          >
            About&nbsp;Us
          </h2> */}
          <div className={styles.scrollcontainer}>
          <h2
            className={styles['mb-1']}
            style={{
              // fontSize: '3.5em',
              fontfamily: 'Poppins',
              margin: '0px',
              color: 'rgba(73, 130, 246, 1)',

              marginBottom: '20px',
              fontWeight: '700',
              fontSize: '40px ',
              letterSpacing: '2px',
              // textDecoration:"underline"

            }}
          >
            About&nbsp;Us
          </h2>
            <div className={styles.container}>


              <div className={styles['row']}>
                <div className={styles['col-md-12']}>
                  <div className={styles['block-7']} id={styles['borderline']}>
                    <div className={styles['text-justify']}>

                      <p
                        style={{
                          fontFamily: 'Poppins',
                          fontSize: '18px',
                          lineHeight: '1.8',
                          fontWeight: '500',
                          color: 'White',
                        }}
                      >Spardha is the annual sports festival of IIT (BHU), Varanasi. In its glorious history of over 38 years, Spardha has grown to become the largest and one of the most awaited sports festival of northern India where athletic competition is drawn from throughout the country. Each year, over a thousand participants compete in an array of sports like hockey, basketball, cricket, boxing, tennis and many more, creating a stunning spectacle of exceptional fervidness in athletic talent. The event, embraced by one of the best gatherings of celebrated sports personalities and spirited audience, has always enthused a zest for continuously scaling new zeniths in the pursuit of excellence and vibrancy among one and all. At present, Spardha has a team of over 500 and is also associated with numerous renowned firms and sports organizations. These exhilarating days have many resounding experiences for participants and supporters alike, creating a lifetime of memories. Gear up yourself to witness the thrilling and frolicsome SPARDHA.
                      </p>
                    </div>
                  </div>

                </div>
                <div className={styles.midsection}>
                  <div className={styles['col-md-4']}>
                    <div className={styles['block-7']}>
                      <div style={{ textAlign: 'center' }}>
                        <img
                          src={hype}
                          alt="/"
                          style={{
                            width: '22%',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                          }}
                        />
                        <h3
                          className={styles['text-wrap']}
                          style={{
                            fontFamily: 'Poppins',
                            color: 'rgba(73, 130, 246, 1)',
                            fontSize: '22px',
                            lineHeight: '1.2',
                            fontWeight: 'bold',
                          }}
                        >
                          Hype&nbsp;Around Spardha
                        </h3>
                        <p className={`${styles.para1}`}>
                        For starters, 2024 will witness the 39th edition of Spardha, a festival which has grown from strength to strength ever since its inception. After all these successful editions, Spardha, today stands as the largest inter-collegiate sporting event of India.
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className={styles['col-md-4']}>
                    <div className={styles['block-7']}>
                      <div style={{ textAlign: 'center' }}>
                        <img
                          src={talkofthetown}
                          alt="/"
                          style={{
                            width: '21%',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                          }}
                        />
                        <h3
                          className={styles['text-wrap']}
                          style={{
                            fontSize: '22px',
                            paddingBottom:'16px',
                            fontFamily: 'Poppins',
                            color: 'rgba(73, 130, 246, 1)',
                            lineHeight: '1.4',
                            fontWeight: 'bold',
                          }}
                        >
                          The&nbsp;Talk&nbsp;Of The&nbsp;Town
                        </h3>
                        <p className={`${styles.para2}`}>
                        Each year thousands of participants at Spardha put their hard work to test in a vast array of sports. If this doesn't catch your attention, the bustle of 45,000 people on the campus streets surely will. Its them who make Spardha the festival it is, a celebration of four long days.
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className={styles['col-md-4']}>
                    <div className={styles['block-7']}>
                      <div style={{ textAlign: 'center' }}>
                        <img
                          src={takeback}
                          alt="/"
                          style={{
                            width: '22%',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                          }}
                        />
                        <h3
                          className={styles['text-wrap']}
                          style={{
                            fontSize: '22px',
                            fontFamily: 'Poppins',
                            
                            paddingBottom:'16px',
                            color: 'rgba(73, 130, 246, 1)',
                            lineHeight: '1.4',
                            fontWeight: 'bold',
                          }}
                        >
                          What&nbsp;You Take Back
                        </h3>
                        <p className={`${styles.para3}`}>
                        It's about making memories, and living them. Every time you win a race, or lose your voice cheering for your team, it adds up to your moments. We at Spardha make sure that you get an experience worth cherishing and some beautiful memories to treasure forever!
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Greencounter />
            <Gallery/>
          </div>
        </section>
      </div>
      <div style={{height:'30px'}}></div>
      <Footer/>
    </>
  );
};

export default About;
