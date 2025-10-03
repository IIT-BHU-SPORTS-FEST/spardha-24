// import React from 'react';
// import styles from './Events.module.css';
// import { FaTimes } from 'react-icons/fa';

// // Import images
// import athletics from './image/athletics.png';
// import basketball from './image/basketball.png';
// import badminton from './image/badminton.png';
// import boxing from './image/boxing.png';
// import chess from './image/chess.png';
// import cricket from './image/cricket.png';
// import football from './image/football.png';
// import handball from './image/handball.png';
// import hockey from './image/hockey.png';
// import kabaddi from './image/kabaddi.png';
// import khokho from './image/kho-kho.png';
// import cycling from './image/cycling.png';
// import squash from './image/squash.png';
// import powerlifting from './image/powerlifting.png';
// import tabletennis from './image/table-tennis.png';
// import taekwondo from './image/taekwondo.png';
// import tennis from './image/tennis.png';
// import volleyball from './image/volleyball.png';
// import weightlifting from './image/weightlifting.png';

// Import PDFs
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


// ---------------- Person Class ----------------
class Person {
  constructor(name, contact, email) {
    this.name = name;
    this.contact = contact;
    this.email = email;
  }
}

// ---------------- Captain Data Export ----------------
export const eventCaptainData = {
  Athletics: {
    captainsArray: [
      new Person('Aman Ghasti (M)', '9108293153', 'aman.ghasti.eee22@itbhu.ac.in'), 
      new Person('Jigmat Tsomo (W)', '6006252670', 'jagmat.tsomo.mat24@itbhu.ac.in')
    ],
    viceCaptainsArray: [],
    rulebookPDF: AthleticsPDF
  },
  Badminton: {
    captainsArray: [
      new Person('Kushaan Mahajan (M)', '7009496579', 'kushaan.mahajan.ece23@itbhu.ac.in'), 
      new Person('Sanjana Garai (W)', '7483708383', 'sanjana.garai.mnc22@itbhu.ac.in')
    ],
    viceCaptainsArray: [],
    rulebookPDF: BadmintonPDF
  },
  Basketball: {
    captainsArray: [
      new Person('Prashant Tomar (M)', '8306579549', 'prashant.tomar.che22@itbhu.ac.in'), 
      new Person('Yuti (W)', '9429380539', 'yuti.student.phe22@itbhu.ac.in')
    ],
    viceCaptainsArray: [],
    rulebookPDF: BasketballPDF
  },
  Boxing: {
    captainsArray: [
      new Person('Sanyam Jain (M)', '8528645813', 'sanyam.jain.cd.civ22@itbhu.ac.in'), 
      new Person('Ria Patil (W)', '9833824513', 'ria.patil.phe23@itbhu.ac.in')
    ],
    viceCaptainsArray: [],
    rulebookPDF: BoxingPDF
  },
  Chess: {
    captainsArray: [
      new Person('Kartikey Thakur (M)', '9560879378', 'kartikey.thakur.cer22@itbhu.ac.in')
    ],
    viceCaptainsArray: [],
    rulebookPDF: ChessPDF
  },
  Cricket: {
    captainsArray: [
      new Person('Srinivas Jampani (M)', '6304664807', 'jampani.venkatas.cse22@itbhu.ac.in')
    ],
    viceCaptainsArray: [],
    rulebookPDF: CricketPDF
  },
  Cycling: {
    captainsArray: [
      new Person('M.S.Anantha Sri Krishnan (M)', '9381085140', 'msanantha.srikrishnan.chy22@itbhu.ac.in')
    ],
    viceCaptainsArray: [],
    rulebookPDF: CyclingPDF
  },
  Football: {
    captainsArray: [
      new Person('Chirag Meme (M)', '8219847411', 'chirag.meme.met23@itbhu.ac.in')
    ],
    viceCaptainsArray: [],
    rulebookPDF: FootballPDF
  },
  Handball: {
    captainsArray: [
      new Person('Arjun Meena (M)', '6378489217', 'arjunsingh.meena.bce23@itbhu.ac.in')
    ],
    viceCaptainsArray: [],
    rulebookPDF: HandballPDF
  },
  Hockey: {
    captainsArray: [
      new Person('Sunny Sankhala (M)', '7877818023', 'sunny.sankhala.che23@itbhu.ac.in')
    ],
    viceCaptainsArray: [],
    rulebookPDF: HockeyPDF
  },
  Kabbadi: {
    captainsArray: [
      new Person('Shankar Dayal (M)', '6375643414', 'shankar.dayal.phe23@itbhu.ac.in')
    ],
    viceCaptainsArray: [],
    rulebookPDF: KabbadiPDF
  },
  Khokho: {
    captainsArray: [
      new Person('Patalavath Akash (M)', '9390902056', 'patalavath.akash.eee23@itbhu.ac.in'), 
      new Person('Velaga Swathi Prasuna (W)', '6305809838', 'velaga.swathiprasuna.eee23@itbhu.ac.in')
    ],
    viceCaptainsArray: [],
    rulebookPDF: KhoKhoPDF
  },
  Powerlifting: {
    captainsArray: [
      new Person('Parmesh Rana (M)', '8650731718', 'parmesh.rana.ece23@itbhu.ac.in')
    ],
    viceCaptainsArray: [],
    rulebookPDF: PowerliftingPDF
  },
  Squash: {
    captainsArray: [
      new Person('Dhruv Yadav (M)', '7849995384', 'dhruv.yadav.che23@itbhu.ac.in'), 
      new Person('Arunima Bhatnagar (W)', '9630886703', 'arunima.bhatnagar.che22@itbhu.ac.in')
    ],
    viceCaptainsArray: [],
    rulebookPDF: SquashPDF
  },
  TableTennis: {
    captainsArray: [
      new Person('Siva Sathyaseelan (M)', '8248633313', 'dnsiva.sathyaseelan.chy21@itbhu.ac.in'), 
      new Person('Ashirbani Majumdar (W)', '9957965384', 'ashirbani.majumdar.chy22@itbhu.ac.in')
    ],
    viceCaptainsArray: [],
    rulebookPDF: TableTennisPDF
  },
  Taekwondo: {
    captainsArray: [
      new Person('Ankit Chaudhary (M)', '9369825634', 'ankit.chaudhary.ece23@itbhu.ac.in'), 
      new Person('Anjali Bharti (W)', '8538937147', 'anjali.bharti.mat23@itbhu.ac.in')
    ],
    viceCaptainsArray: [],
    rulebookPDF: TaekwondoPDF
  },
  Tennis: {
    captainsArray: [
      new Person('Aaditya Agarwal (M)', '9971353744', 'aaditya.agarwal.cse23@itbhu.ac.in')
    ],
    viceCaptainsArray: [],
    rulebookPDF: TennisPDF
  },
  Volleyball: {
    captainsArray: [
      new Person('Sankalp Kumar (M)', '8627044927', 'sankalp.kumar.che22@itbhu.ac.in'), 
      new Person('Anita Murmu (W)', '8144479352', 'anita.murmu.cse22@itbhu.ac.in')
    ],
    viceCaptainsArray: [],
    rulebookPDF: VolleyballPDF
  },
  WeightLifting: {
    captainsArray: [
      new Person('Parmesh Rana (M)', '8650731718', 'parmesh.rana.ece23@itbhu.ac.in')
    ],
    viceCaptainsArray: [],
    rulebookPDF: WeightliftingPDF
  }
};