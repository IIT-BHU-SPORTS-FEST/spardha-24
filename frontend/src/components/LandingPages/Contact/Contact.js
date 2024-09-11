import React from 'react';
import styles from './Contact.module.css';
import Carousel from '../Home/Carousel/Carouselhp';



const Contact = () => {
  return (
    <>
      <section id="contactus">
        <Carousel />
        <footer
          className={`${styles.ftco_footer} ${styles.ftco_section} ${styles.img}`}
        >
          <div className={styles.container}>
            <div className={styles.heading123}>
              <h2><b><u>Contact Us</u></b></h2>
            </div>
            <div className={styles.content123}>
              <div className={styles.convpubl}>
                <div className={styles.convenor}>
                  <div>
                    <h5><b>Convenor:</b></h5>
                    <h6 className={styles.name}>Sarthak Gupta</h6>
                    <h6>sarthak.gupta.civ.21@itbhu.ac.in</h6>
                  </div>
                  <div>
                    <h5><b>Co-convenors:</b></h5>
                    <h6 className={styles.name}>Bhumika Batra</h6>
                    <h6>bhumika.student.met21@itbhu.ac.in</h6>
                    <h6 className={styles.name}>Shubham Sahu</h6>
                    <h6>shubham.sahu.cer21@itbhu.ac.in</h6>
                    <h6 className={styles.name}>Adarsh Raj</h6>
                    <h6>adarsh.raj.civ21@itbhu.ac.in</h6>
                  </div>
                </div>
                <div className={styles.publicity}>
                  <h5><b>Publicity:</b></h5>
                  <h6 className={styles.name}>Suraj Kumar</h6>
                  <h6>suraj.kumar.min22@itbhu.ac.in</h6>
                  <h6>+91 93041 92920</h6>
                  <h6 className={styles.name}>Arya Meshram</h6>
                  <h6>aarya.meshram.chy22@itbhu.ac.in</h6>
                  <h6>+91 90090 73032</h6>
                  <h6 className={styles.name}>Vivek Kumar</h6>
                  <h6>vivek.kumar.min22@itbhu.ac.in</h6>
                  <h6>+91 70335 87357</h6>
                </div>
              </div>
              <div className={styles.evehosp}>
                <div className={styles.events}>
                  <h5><b>Events:</b></h5>
                  <h6 className={styles.name}>Aryan Maurya</h6>
                  <h6>aryan.maurya.civ22@itbhu.ac.in</h6>
                  <h6>+91 86040 99753</h6>
                  <h6 className={styles.name}>Adesh Meena</h6>
                  <h6>adesh.meena.ece22@itbhu.ac.in</h6>
                  <h6>+91 63502 78428</h6>
                </div>
                <div className={styles.hospitality}>
                  <h5><b>Hospitality:</b></h5>
                  <h6 className={styles.name}>Ojas Raj</h6>
                  <h6>ojas.raj.civ22@itbhu.ac.in</h6>
                  <h6>+91 79745 52339</h6>
                  <h6 className={styles.name}>Vinay Dadri</h6>
                  <h6>vinay.kumar.mec22@itbhu.ac.in </h6>
                  <h6>+91 85295 52845</h6>
                  <h6 className={styles.name}>Divyanshi Gautam</h6>
                  <h6>deepanshu.student.cer21@itbhu.ac.in</h6>
                  <h6>+91 87070 90583</h6>
                </div>
              </div>
              <div className={styles.linkfollow}>
                <div className={styles.links}>
                  <div className={styles.logo}>
                    <i class="fa-solid fa-envelope fa-2xl"></i>
                    <a href="mailto:spardha@itbhu.ac.in" className={styles.link}>spardha@itbhu.ac.in</a>
                  </div>
                  <div className={styles.logo} style={{
                    display: "flex",
                    flexDirection: "row"
                  }}>
                    <i className="fa-solid fa-location-dot fa-2xl" style={{
                      translate: "3px 10px"
                    }}></i>
                    <div >
                      <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.3239763295937!2d82.98692631503495!3d25.259684835361114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e33d4b53c5a85%3A0x5e36cad9ac063d23!2sIIT+Gymkhana!5e0!3m2!1sen!2s!4v1502537110030" className={styles.link}>IIT (BHU) Varanasi, Uttar Pradesh-221005</a>
                    </div>
                  </div>
                  <div className={styles.logo}>
                    <i class="fa-solid fa-globe fa-2xl"></i>
                    <a href="spardha.org.in" className={styles.link}>spardha.org.in</a>
                  </div>
                  <div className={`${styles.logo}`}>
                  <h5>For Tech Related Query</h5>
                  <a href="mailto:tech@spardha.org.in" className={styles.link}>tech@spardha.org.in</a>
                  </div>
                  <br />
                  <br />
                </div>
                <div className={styles.followus}>
                  <h5><b>Follow us:</b></h5>
                  <br />
                  <span>
                    <a href="https://www.facebook.com/Spardha.IIT.BHU/" target="_blank" rel="noopener noreferrer">
                      <img className={styles.socialmedia} src="/images/icons/icons8-facebook.svg" alt="facebook logo"></img>
                    </a>
                    <a href="https://www.linkedin.com/company/spardha/about/" target="_blank" rel="noopener noreferrer">
                      <img className={styles.socialmedia} src="/images/icons/icons8-linkedin.svg" alt="linkedin logo"></img>
                    </a>
                    <a href="https://www.instagram.com/spardha_iitbhu/" target="_blank" rel="noopener noreferrer">
                      <img className={styles.socialmedia} src="/images/icons/icons8-instagram.svg" alt="instagram logo"></img>
                    </a>
                  </span>
              </div>
            </div>
          </div>
          </div>
        </footer>
      </section>
    </>
  );
};
export default Contact;
