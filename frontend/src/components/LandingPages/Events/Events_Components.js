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
// import aquatics from './image/aquatics.png';
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
              color: "white",
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
      <span className={`${styles.content_header}`}><span className='newwh'>{props.name}</span><br /></span>
      <span><span className='newwh'>{props.contact}</span><br /></span>
      <span><span className='newwh'>{props.email}</span><br /><br /></span>
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


// const Aquatics = (props) => {
//   return (
//     <EventCard
//       captainsArray={[ new Person("Bisesh Agarwal (M)", "7001782556", )]}
//       imageSrc={aquatics}
//       eventName="Aquatics"
//       rulebookPDF={AthleticsPDF}
//       {...props}
//     />
//   );
// };

const Athletics = (props) => {
  return (
    <EventCard
      captainsArray={[new Person("Aman Ghasti (M)", "9108293153", "aman.ghasti.eee22@itbhu.ac.in"), new Person("Jigmat Tsomo (W)", "6006252670", "jagmat.tsomo.mat24@itbhu.ac.in")]}
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
      captainsArray={[new Person("Kushaan Mahajan (M)", "7009496579", "kushaan.mahajan.ece23@itbhu.ac.in"), new Person("Sanjana Garai (W)", "7483708383", "sanjana.garai.mnc22@itbhu.ac.in")]}
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
      captainsArray={[new Person("Prashant Tomar (M)", "8306579549", "prashant.tomar.che22@itbhu.ac.in"), new Person("Yuti (W)", "9429380539", "yuti.student.phe22@itbhu.ac.in")]}
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
      captainsArray={[new Person("Sanyam Jain (M)", "8528645813", "sanyam.jain.cd.civ22@itbhu.ac.in"), new Person("Ria Patil (W)", "9833824513", "ria.patil.phe23@itbhu.ac.in")]}
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
      captainsArray={[new Person("Kartikey Thakur (M)", "9560879378", "kartikey.thakur.cer22@itbhu.ac.in")]}
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
      captainsArray={[new Person("Srinivas Jampani (M)", "6304664807", "jampani.venkatas.cse22@itbhu.ac.in")]}
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
      captainsArray={[new Person("M.S.Anantha Sri Krishnan (M)", "9381085140", "msanantha.srikrishnan.chy22@itbhu.ac.in")]}
      // viceCaptainsArray={[new Person("Aashu Singh (M)", "8442085903", "aashu.singh.cd.met21@itbhu.ac.in")]}
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
      captainsArray={[new Person("Chirag Meme (M)", "8219847411", "chirag.meme.met23@itbhu.ac.in")]}
      // viceCaptainsArray={[new Person("")]}
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
      captainsArray={[new Person("Arjun Meena (M)", "6378489217", "arjunsingh.meena.bce23@itbhu.ac.in")]}
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
      captainsArray={[new Person("sunny sankhala (M)", "7877818023", "sunny.sankhala.che23@itbhu.ac.in")]}
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
      captainsArray={[new Person("Shankar Dayal (M)", "6375643414", "shankar.dayal.phe23@itbhu.ac.in")]}
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
      captainsArray={[new Person("Patalavath Akash  (M)", "9390902056", "patalavath.akash.eee23@itbhu.ac.in"), new Person("Velaga Swathi Prasuna  (W)", "6305809838", "velaga.swathiprasuna.eee23@itbhu.ac.in")]}
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
      captainsArray={[new Person("Parmesh Rana (M)", "8650731718", "parmesh.rana.ece23@itbhu.ac.in")]}
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
      captainsArray={[new Person("Dhruv Yadav  (M)", "7849995384", "dhruv.yadav.che23@itbhu.ac.in"), new Person("Arunima Bhatnagar  (W)", "9630886703", "arunima.bhatnagar.che22@itbhu.ac.in")]}
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
      captainsArray={[new Person("Siva Sathyaseelan (M)", "8248633313", "dnsiva.sathyaseelan.chy21@itbhu.ac.in"), new Person("Ashirbani Majumdar (W)", "9957965384 ", "ashirbani.majumdar.chy22@itbhu.ac.in")]}
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
      captainsArray={[new Person("Ankit Chaudhary (M)", "9369825634", "ankit.chaudhary.ece23@itbhu.ac.in"), new Person("Anjali Bharti (W)", "8538937147", "anjali.bharti.mat23@itbhu.ac.in")]}
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
      captainsArray={[new Person("Aaditya Agarwal   (M)", "9971353744", "aaditya.agarwal.cse23@itbhu.ac.in")]}
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
      captainsArray={[new Person("Sankalp Kumar (M)", "8627044927", "sankalp.kumar.che22@itbhu.ac.in"), new Person("Anita Murmu  (W)", "8144479352", "anita.murmu.cse22@itbhu.ac.in")]}
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
      captainsArray={[new Person("Parmesh Rana (M)", "8650731718", "parmesh.rana.ece23@itbhu.ac.in")]}
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
  // Aquatics,
};
