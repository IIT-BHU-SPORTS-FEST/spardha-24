import React from 'react';
import styles from './Events.module.css';
import { FaTimes } from 'react-icons/fa';
import athletics from './image/athletics.png';
import basketball from './image/basketball.png';
import badminton from './image/badminton.png';
import boxing from './image/boxing.png';
import chess from './image/chess.png';
import cricket from './image/cricket.png';
import football from './image/football.png';
import handball from './image/handball.png';
import hockey from './image/hockey.png';
import kabaddi from './image/kabaddi.png';
import khokho from './image/kho-kho.png'
import cycling from './image/cycling.png';
import squash from './image/squash.png';
import powerlifting from './image/powerlifting.png';
import tabletennis from './image/table-tennis.png';
import taekwondo from './image/taekwondo.png';
import tennis from './image/tennis.png';
import volleyball from './image/volleyball.png';
import weightlifting from './image/weightlifting.png';
import aquatics from './image/aquatics.png';
import AthleticsPDF from './athletics.pdf';
import BadmintonPDF from './badminton.pdf';
import BasketballPDF from './basketball.pdf';
import BoxingPDF from './boxing.pdf';
import CricketPDF from './cricket.pdf';
import ChessPDF from './chess.pdf';
import CyclingPDF from './CyclingPDF.pdf';
import FootballPDF from './football.pdf';
import HandballPDF from './handball.pdf';
import HockeyPDF from './hockey.pdf';
import KabbadiPDF from './kabbadi.pdf';
import KhoKhoPDF from './khokho.pdf';
import PowerliftingPDF from './powerlifting.pdf';
import SquashPDF from './squash.pdf';
import TableTennisPDF from './tabletennis.pdf';
import TennisPDF from './tennis.pdf';
import VolleyballPDF from './volleyball.pdf';
import WeightliftingPDF from './weightlifting.pdf';
import TaekwondoPDF from './taekwondo.pdf';

const EventCard = (props) => {
  return (
    <div className={`${styles.main_event_div}`}>
      <div className={`${styles.events_main_block}`}>
        <div className={`${styles.events_main_block_div1}`} >
          <div style={{ right: "5%", top: "5%", position: "absolute" }}>
            <button
              className={`${styles.fa} ${styles.fa_times}`}
              id="0x"
              onClick={() => props.changeState(false)}
            >
              <FaTimes />
            </button>
          </div>
          <div className={`${styles.event_white_block}`} />
          <div className={`${styles.event_line_right}`} />
          <div className={`${styles.event_line_left}`} />
          <div className={`${styles.evnet_content_box}`}>
            <div className={`${styles.event_show_block1}`}>
              <div className={`${styles.main_header}`}>CAPTAIN</div>
              <div className={`${styles.person_details_container}`}>
                {props.captainsArray && props.captainsArray.map((captain, i) => (
                  <PersonDetails key={i} name={captain.name} contact={captain.contact} email={captain.email} />
                ))}
              </div>
            </div>
            {props.viceCaptainsArray && props.viceCaptainsArray.length > 0 && (
              <div className={`${styles.event_show_block2}`}>
                <div className={`${styles.main_header}`}>VICE-CAPTAIN</div>
                <div className={`${styles.person_details_container}`}>
                  {props.viceCaptainsArray.map((captain, i) => (
                    <PersonDetails key={i} name={captain.name} contact={captain.contact} email={captain.email} />
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className={`${styles.event_box_header}`}>Contacts:</div>
          <img className={`${styles.event_image}`} alt=" " src={props.imageSrc} />
          <div className={`${styles.event_box_name}`}>{props.eventName}</div>
          <div className={`${styles.rule_book_box}`}>
            <div style={{
              color: "#760E53",
              fontSize: 18,
              fontFamily: "Poppins",
              fontWeight: 600,
              textAlign: "center",
              wordWrap: "break-word"
            }}>
              <a href={props.rulebookPDF} target="_blank" rel="noreferrer" className={`${styles.rulebook}`}>
                View Rulebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PersonDetails = (props) => {
  return (
    <div className={`${styles.person_details}`}>
    <br />
      <span className={`${styles.content_header}`}>{props.name}<br /></span>
      <span className={`${styles.content}`}>{props.contact}<br /></span>
      <span className={`${styles.content}`}>{props.email}<br /><br /></span>
    </div>
  );
};
class Person {
  constructor (name, contact, email) {
    this.name = name;
    this.contact = contact;
    this.email = email;
  }
}


const Aquatics = (props) => {
  return (
    <EventCard
      captainsArray={[ new Person("Bisesh Agarwal (M)", "7001782556", )]}
      imageSrc={aquatics}
      eventName="Aquatics"
      rulebookPDF={AthleticsPDF}
      {...props}
    />
  );
};

const Athletics = (props) => {
  return (
    <EventCard
      captainsArray={[new Person("Ankit Mishra (M)", "9518478065", "tagaram.kirankumar.cer20@itbhu.ac.in"), new Person("Prachi (W)", "9532072319", "anchal.dhar.mec21@itbhu.ac.in")]}
      imageSrc={athletics}
      eventName="Athletics"
      rulebookPDF={AthleticsPDF}
      {...props}
    />
  );
};
const Badminton = (props) => {
  return (
    <EventCard
      captainsArray={[new Person("Rishi Kaushik (M)", "8005983306", "rishi.kaushik.eee21@itbhu.ac.in"), new Person("Manisha Bishnoi (W)", "8290451829", "manisha.bishnoi.mec21@itbhu.ac.in")]}
      imageSrc={badminton}
      eventName="Badminton"
      rulebookPDF={BadmintonPDF}
      {...props}
    />
  );
};

const Basketball = (props) => {
  return (
    <EventCard
      captainsArray={[new Person("Pratyaksh Sharma (M)", "7725911213", "pratyaksh.sharma.civ21@itbhu.ac.in"), new Person("Chhaya Umbarkar (W)", "7249784702", "chhaya.umbarkar.mst20@itbhu.ac.in")]}
      imageSrc={basketball}
      eventName="Basketball"
      rulebookPDF={BasketballPDF}
      {...props}
    />
  );
};

const Boxing = (props) => {
  return (
    <EventCard
      captainsArray={[new Person("Ayush Sahu (M)", "8085733084", "suyash.baloni.bme20@itbhu.ac.in"), new Person("Sukriti Sharma (W)", "8824973337", "saloni.agrawal.mat20@itbhu.ac.in")]}
      imageSrc={boxing}
      eventName="Boxing"
      rulebookPDF={BoxingPDF}
      {...props}
    />
  );
};

const Chess = (props) => {
  return (
    <EventCard
      captainsArray={[new Person("Harshraj Joshi (M)", "N/A", "harshraj.joshi.che21@itbhu.ac.in")]}
      imageSrc={chess}
      eventName="Chess"
      rulebookPDF={ChessPDF}
      {...props}
    />
  );
};

const Cricket = (props) => {
  return (
    <EventCard
      captainsArray={[new Person("Jai Patel (M)", "7023064941", "shashanksp.met18@itbhu.ac.in")]}
      imageSrc={cricket}
      eventName="Cricket"
      rulebookPDF={CricketPDF}
      {...props}
    />
  );
};

const Cycling = (props) => {
  return (
    <EventCard
      captainsArray={[new Person("K.M.Preetham Sai (M)", "9640200693", "kmpreetham.sai.mec21@iitbhu.ac.in")]}
      viceCaptainsArray={[new Person("Aashu Singh (M)", "8442085903", "aashu.singh.cd.met21@itbhu.ac.in")]}
      imageSrc={cycling}
      eventName="Cycling"
      rulebookPDF={CyclingPDF}
      {...props}
    />
  );
};

const Football = (props) => {
  return (
    <EventCard
      captainsArray={[new Person("Soham Nandy (M)", "9580058180", "soham.nandy.cd.mst21@itbhu.ac.in")]}
      viceCaptainsArray={[new Person("Harsh Raj Singh (M)", "9142697620", "harsh.raj.chy21@itbhu.ac.in")]}
      imageSrc={football}
      eventName="Football"
      rulebookPDF={FootballPDF}
      {...props}
    />
  );
};

const Handball = (props) => {
  return (
    <EventCard
      captainsArray={[new Person("Patel Avi (M)", "6352926616", "patelavi.nihilkumar.mec21@itbhu.ac.in")]}
      imageSrc={handball}
      eventName="Handball"
      rulebookPDF={HandballPDF}
      {...props}
    />
  );
};

const Hockey = (props) => {
  return (
    <EventCard
      captainsArray={[new Person("Abhishek Meena (M)", "8840041931", "abhishek.meena.mec19@itbhu.ac.in")]}
      imageSrc={hockey}
      eventName="Hockey"
      rulebookPDF={HockeyPDF}
      {...props}
    />
  );
};

const Kabbadi = (props) => {
  return (
    <EventCard
      captainsArray={[new Person("Peddinti Sai Siva Kumar (M)", "7569965571", "peddinti.saiskumar.cer19@itbhu.ac.in"), new Person("Kodurupaka Mallika (W)", "6302471817", "kodurupaka.mallika.mec21@itbhu.ac.in")]}
      imageSrc={kabaddi}
      eventName="Kabbadi"
      rulebookPDF={KabbadiPDF}
      {...props}
    />
  );
};

const Khokho = (props) => {
  return (
    <EventCard
      captainsArray={[new Person("Yandapalli Gireesh Reddy (M)", "6303606994", "ygireesh.reddy.eee21@itbhu.ac.in"), new Person("Saloni Sharma (W)", "8392940227", "saloni.sharma.civ22@itbhu.ac.in")]}
      imageSrc={khokho}
      eventName="Khokho"
      rulebookPDF={KhoKhoPDF}
      {...props}
    />
  );
};

const Powerlifting = (props) => {
  return (
    <EventCard
      captainsArray={[new Person("Dhahal Brahma", "9101401340", "dhahal.brahma.cer19@itbhu.ac.in")]}
      imageSrc={powerlifting}
      eventName="Powerlifting"
      rulebookPDF={PowerliftingPDF}
      {...props}
    />
  );
};

const Squash = (props) => {
  return (
    <EventCard
      captainsArray={[new Person("Hemank Vats (M)", "N/A", "hemank.vats.apd20@itbhu.ac.in"), new Person("Toko Yanu (W)", "8258872098", "saloni.sharma.civ22@itbhu.ac.in")]}
      imageSrc={squash}
      eventName="Squash"
      rulebookPDF={SquashPDF}
      {...props}
    />
  );
};

const TableTennis = (props) => {
  return (
    <EventCard
      captainsArray={[new Person("Yashwardhan Sable (M)", "8839679648", "yashwardhan.sable.phy20@itbhu.ac.in"), new Person("Guddaji Sri Prada (W)", "N/A", "guddaji.sriprada.cse20@itbhu.ac.in")]}
      imageSrc={tabletennis}
      eventName="TableTennis"
      rulebookPDF={TableTennisPDF}
      {...props}
    />
  );
};

const Taekwondo = (props) => {
  return (
    <EventCard
      captainsArray={[new Person("Divyanshu Bharti (M)", "N/A", "divyanshu.bharti.chy21@itbhu.ac.in"), new Person("Sameeksha Murdia (W)", "9660339180", "sameeksha.murdia.phy20@itbhu.ac.in")]}
      imageSrc={taekwondo}
      eventName="Taekwondo"
      rulebookPDF={TaekwondoPDF}
      {...props}
    />
  );
};

const Tennis = (props) => {
  return (
    <EventCard
      captainsArray={[new Person("Trinabh Vashistha (M)", "8502959213", "trinabh.vashistha.min21@itbhu.ac.in"), new Person("Pranjali Gupta (W)", "N/A", "pranjali.gupta.mst19@itbhu.ac.in")]}
      imageSrc={tennis}
      eventName="Tennis"
      rulebookPDF={TennisPDF}
      {...props}
    />
  );
};

const Volleyball = (props) => {
  return (
    <EventCard
      captainsArray={[new Person("Pawan Kumar (M)", "9110142092", "pawan.kumar.ece20@itbhu.ac.in"), new Person("Boddu Bhavana (W)", "9390085089", "boddu.bhavana.mec20@itbhu.ac.in")]}
      imageSrc={volleyball}
      eventName="Volleyball"
      rulebookPDF={VolleyballPDF}
      {...props}
    />
  );
};

const WeightLifting = (props) => {
  return (
    <EventCard
      captainsArray={[new Person("Harsh Agrawal (M)", "9759877847", "harshagrawal789789@gmail.com")]}
      imageSrc={weightlifting}
      eventName="WeightLifting"
      rulebookPDF={WeightliftingPDF}
      {...props}
    />
  );
};


export {
  Athletics,
  Badminton,
  Basketball,
  Boxing,
  // Carrom,
  Chess,
  Cricket,
  Cycling,
  Football,
  Handball,
  Hockey,
  Kabbadi,
  Khokho,
  Powerlifting,
  Squash,
  TableTennis,
  Taekwondo,
  Tennis,
  Volleyball,
  WeightLifting,
  Aquatics,
};
