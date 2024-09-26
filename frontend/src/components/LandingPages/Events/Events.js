import React, { useState } from 'react';
// import aquatics from './image/aquatics.png';
// import aquaticshover from './image/aquaticshover.png';
import athletics from './image/athletics.png';
import athleticshover from './image/athleticshover.png';
import basketball from './image/basketball.png';
import basketballhover from './image/basketballhover.png';
import badminton from './image/badminton.png';
import badmintonhover from './image/badmintonhover.png';
import boxing from './image/boxing.png';
import boxinghover from './image/boxinghover.png';
// import carrom from './carrom.png'
import chess from './image/chess.png';
import chesshover from './image/chesshover.png';
import cricket from './image/cricket.png';
import crickethover from './image/crickethover.png';
import football from './image/football.png';
import footballhover from './image/footballhover.png';
import handball from './image/handball.png';
import handballhover from './image/handballhover.png';
//import question from './question.png';
import hockey from './image/hockey.png';
import hockeyhover from './image/hockeyhover.png';
import kabaddi from './image/kabaddi.png';
import kabaddihover from './image/kabaddihover.png';
import khokho from './image/kho-kho.png';
import khokhohover from './image/kho-khohover.png';
import cycling from './image/cycling.png';
import cyclinghover from './image/cyclinghover.png';
import squash from './image/squash.png';
import squashhover from './image/squashhover.png';
import powerlifting from './image/powerlifting.png';
import powerliftinghover from './image/powerliftinghover.png';
import tabletennis from './image/table-tennis.png';
import tabletennishover from './image/tabletennishover.png';
import taekwondo from './image/taekwondo.png';
import taekwondohover from './image/taekwondohover.png';
import tennis from './image/tennis.png';
import tennishover from './image/tennishover.png';
import volleyball from './image/volleyball.png';
import volleyballhover from './image/volleyballhover.png';
import weightlifting from './image/weightlifting.png';
import weightliftinghover from './image/weightliftinghover.png';
import styles from './Events.module.css';
import { Link } from 'react-router-dom';
// import Carousel from '../Home/Carousel/Carouselhp';
import {
  // Aquatics,
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
} from './Events_Components.js';

const Events = () => {
  const [showResults0, setShowResults0] = useState(false);
  const [showResults1, setShowResults1] = useState(false);
  const [showResults2, setShowResults2] = useState(false);
  const [showResults3, setShowResults3] = useState(false);
  const [showResults4, setShowResults4] = useState(false);
  const [showResults5, setShowResults5] = useState(false);
  const [showResults6, setShowResults6] = useState(false);
  const [showResults7, setShowResults7] = useState(false);
  const [showResults8, setShowResults8] = useState(false);
  const [showResults9, setShowResults9] = useState(false);
  const [showResults10, setShowResults10] = useState(false);
  const [showResults11, setShowResults11] = useState(false);
  const [showResults12, setShowResults12] = useState(false);
  const [showResults13, setShowResults13] = useState(false);
  const [showResults14, setShowResults14] = useState(false);
  const [showResults15, setShowResults15] = useState(false);
  const [showResults16, setShowResults16] = useState(false);
  const [showResults17, setShowResults17] = useState(false);
  const [showResults18, setShowResults18] = useState(false);
  const [showResults19, setShowResults19] = useState(false);
console.log(showResults19);

  const [athletics1, setathletics1] = useState(athletics);
  const athleticsMouseEnter = () => {
    setathletics1(athleticshover);
  };
  const athleticsMouseLeave = () => {
    setathletics1(athletics);
  };
  const [basketball1, setbasketball1] = useState(basketball);
  const basketballMouseEnter = () => {
    setbasketball1(basketballhover);
  };
  const basketballMouseLeave = () => {
    setbasketball1(basketball);
  };
  const [badminton1, setbadminton1] = useState(badminton);
  const badmintonMouseEnter = () => {
    setbadminton1(badmintonhover);
  };
  const badmintonMouseLeave = () => {
    setbadminton1(badminton);
  };
  const [boxing1, setboxing1] = useState(boxing);
  const boxingMouseEnter = () => {
    setboxing1(boxinghover);
  };
  const boxingMouseLeave = () => {
    setboxing1(boxing);
  };
  const [cricket1, setcricket1] = useState(cricket);
  const cricketMouseEnter = () => {
    setcricket1(crickethover);
  };
  const cricketMouseLeave = () => {
    setcricket1(cricket);
  };
  const [football1, setfootball1] = useState(football);
  const footballMouseEnter = () => {
    setfootball1(footballhover);
  };
  const footballMouseLeave = () => {
    setfootball1(football);
  };
  const [handball1, sethandball1] = useState(handball);
  const handballMouseEnter = () => {
    sethandball1(handballhover);
  };
  const handballMouseLeave = () => {
    sethandball1(handball);
  };
  const [hockey1, sethockey1] = useState(hockey);
  const hockeyMouseEnter = () => {
    sethockey1(hockeyhover);
  };
  const hockeyMouseLeave = () => {
    sethockey1(hockey);
  };
  const [kabaddi1, setkabaddi1] = useState(kabaddi);
  const kabaddiMouseEnter = () => {
    setkabaddi1(kabaddihover);
  };
  const kabaddiMouseLeave = () => {
    setkabaddi1(kabaddi);
  };
  const [khokho1, setkhokho1] = useState(khokho);
  const khokhoMouseEnter = () => {
    setkhokho1(khokhohover);
  };
  const khokhoMouseLeave = () => {
    setkhokho1(khokho);
  };
  const [cycling1, setcycling1] = useState(cycling);
  const cyclingMouseEnter = () => {
    setcycling1(cyclinghover);
  };
  const cyclingMouseLeave = () => {
    setcycling1(cycling);
  };
  const [squash1, setsquash1] = useState(squash);
  const squashMouseEnter = () => {
    setsquash1(squashhover);
  };
  const squashMouseLeave = () => {
    setsquash1(squash);
  };
  const [tabletennis1, settabletennis1] = useState(tabletennis);
  const tabletennisMouseEnter = () => {
    settabletennis1(tabletennishover);
  };
  const tabletennisMouseLeave = () => {
    settabletennis1(tabletennis);
  };
  const [powerlifting1, setpowerlifting1] = useState(powerlifting);
  const powerliftingMouseEnter = () => {
    setpowerlifting1(powerliftinghover);
  };
  const powerliftingMouseLeave = () => {
    setpowerlifting1(powerlifting);
  };
  const [weightlifting1, setweightlifting1] = useState(weightlifting);
  const weightliftingMouseEnter = () => {
    setweightlifting1(weightliftinghover);
  };
  const weightliftingMouseLeave = () => {
    setweightlifting1(weightlifting);
  };
  const [taekwondo1, settaekwondo1] = useState(taekwondo);
  const taekwondoMouseEnter = () => {
    settaekwondo1(taekwondohover);
  };
  const taekwondoMouseLeave = () => {
    settaekwondo1(taekwondo);
  };
  const [tennis1, settennis1] = useState(tennis);
  const tennisMouseEnter = () => {
    settennis1(tennishover);
  };
  const tennisMouseLeave = () => {
    settennis1(tennis);
  };
  const [volleyball1, setvolleyball1] = useState(volleyball);
  const volleyballMouseEnter = () => {
    setvolleyball1(volleyballhover);
  };
  const volleyballMouseLeave = () => {
    setvolleyball1(volleyball);
  };
  const [chess1, setchess1] = useState(chess);
  const chessMouseEnter = () => {
    setchess1(chesshover);
  };
  const chessMouseLeave = () => {
    setchess1(chess);
  };
  // const [aquatics1, setaquatics1] = useState(aquatics);
  // const aquaticsMouseEnter = () => {
  //   setaquatics1(aquaticshover);
  //   console.log("entered");
  // };
  // const aquaticsMouseLeave = () => {
  //   setaquatics1(aquatics);
  // };


  const onClick0 = () => {
    setShowResults0(!showResults0);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(false);
    setShowResults18(false);
    setShowResults19(false);
  };
  const onClick1 = () => {
    setShowResults0(false);
    setShowResults1(!showResults1);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(false);
    setShowResults18(false);
    setShowResults19(false);
  };
  const onClick2 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(!showResults2);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(false);
    setShowResults18(false);
    setShowResults19(false);
  };
  const onClick3 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(!showResults3);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(false);
    setShowResults18(false);
    setShowResults19(false);
  };
  const onClick4 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(!showResults4);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(false);
    setShowResults18(false);
    setShowResults19(false);
  };
  const onClick5 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(!showResults5);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(false);
    setShowResults18(false);
    setShowResults19(false);
  };
  const onClick6 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(!showResults6);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(false);
    setShowResults18(false);
    setShowResults19(false);
  };
  const onClick7 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(!showResults7);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(false);
    setShowResults18(false);
    setShowResults19(false);
  };
  const onClick8 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(!showResults8);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(false);
    setShowResults18(false);
    setShowResults19(false);
  };
  const onClick9 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(!showResults9);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(false);
    setShowResults18(false);
    setShowResults19(false);
  };
  const onClick10 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(!showResults10);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(false);
    setShowResults18(false);
    setShowResults19(false);
  };
  const onClick11 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(!showResults11);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(false);
    setShowResults18(false);
    setShowResults19(false);
  };
  const onClick12 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(!showResults12);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(false);
    setShowResults18(false);
    setShowResults19(false);
  };
  const onClick13 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(!showResults13);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(false);
    setShowResults18(false);
    setShowResults19(false);
  };
  const onClick14 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(!showResults14);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(false);
    setShowResults18(false);
    setShowResults19(false);
  };
  const onClick15 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(!showResults15);
    setShowResults16(false);
    setShowResults17(false);
    setShowResults18(false);
    setShowResults19(false);
  };
  const onClick16 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(!showResults16);
    setShowResults17(false);
    setShowResults18(false);
    setShowResults19(false);
  };
  const onClick17 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(!showResults17);
    setShowResults18(false);
    setShowResults19(false);
  };
  const onClick18 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(false);
    setShowResults18(!showResults18);
    setShowResults19(false);
  };
  // const onClick19 = () => {
  //   setShowResults0(false);
  //   setShowResults1(false);
  //   setShowResults2(false);
  //   setShowResults3(false);
  //   setShowResults4(false);
  //   setShowResults5(false);
  //   setShowResults6(false);
  //   setShowResults7(false);
  //   setShowResults8(false);
  //   setShowResults9(false);
  //   setShowResults10(false);
  //   setShowResults11(false);
  //   setShowResults12(false);
  //   setShowResults13(false);
  //   setShowResults14(false);
  //   setShowResults15(false);
  //   setShowResults16(false);
  //   setShowResults17(false);
  //   setShowResults18(false);
  //   setShowResults19(!showResults18);
  // };
  
  return (
    <div className='blk'>
    <section id="events" className={`${styles.ftco_section} ${styles.events}`}>
      {/* <div className='bg'>
        <Carousel />
      </div> */}
      <div className={`${styles.container} ${styles.pb_1}`}>
        <div
          className={`${styles.row} ${styles.justify_content_center} ${styles.mb_5}`}
        >
          <div
            className={`${styles.col_md_7} ${styles.heading_section} ${styles.text_center}`}
          >
          
          </div>
        </div>
        <div className={styles.maindiv}>
          <div className={styles.title}>

            <div><h2 className={`${styles.mb_1} ${styles.H2}`} >
              EVENTS
            </h2></div>
            <div>
              <Link to="/register/signup/" className={styles.registerbtn}>Register Now</Link>
            </div>
          </div>
          {/* <div className={styles.scrollablediv}> */}
            <div className={`${styles.row}`}>
             
              <div
                className={`${styles.col_2} ${styles.padding} `}
                id="0" onMouseEnter={athleticsMouseEnter}
                onMouseLeave={athleticsMouseLeave}
                onClick={onClick0}
              >
                <img
                  className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
                  src={athletics1}
                  alt=""
                 
                />
                <p>Athletics</p>
              </div>
              {showResults0 ? (
                <Athletics changeState={(showResult0) => setShowResults0(false)} />
              ) : null}

              <div
                className={`${styles.col_2} ${styles.padding} `}
                id="1"
                onMouseEnter={badmintonMouseEnter}
                onMouseLeave={badmintonMouseLeave}
                onClick={onClick1}
              >
                <img
                  className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
                  src={badminton1}
                  alt=""
                 
                />
                <p>Badminton</p>


              </div>
              {showResults1 ? (
                <Badminton changeState={(showResult1) => setShowResults1(false)} />
              ) : null}
              <div
                className={`${styles.col_2} ${styles.padding} `}
                id="2"
                onMouseEnter={basketballMouseEnter}
                onMouseLeave={basketballMouseLeave}
                onClick={onClick2}
              >
                <img
                  className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
                  src={basketball1}
                  alt=""
                  
                />
                <p>Basketball</p>
              </div>
              {showResults2 ? (
                <Basketball changeState={(showResult2) => setShowResults2(false)} />
              ) : null}
              <div
                className={`${styles.col_2} ${styles.padding} `}
                id="3"
                onMouseEnter={boxingMouseEnter}
                onMouseLeave={boxingMouseLeave}
                onClick={onClick3}
              >
                <img
                  className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
                  src={boxing1}
                  alt=""
                 
                />
                <p>Boxing</p>
              </div>
              {showResults3 ? (
                <Boxing changeState={(showResult3) => setShowResults3(false)} />
              ) : null}
            </div>

            <div className={`${styles.row}`}>


              <div
                className={`${styles.col_2} ${styles.padding} `}
                id="0"
                onMouseEnter={chessMouseEnter}
                onMouseLeave={chessMouseLeave}
                onClick={onClick4}
              >
                <img
                  className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
                  src={chess1}
                  alt=""
                 
                />
                <p>Chess</p>
              </div>
              {showResults4 ? (
                <Chess changeState={(showResult4) => setShowResults4(false)} />
              ) : null}
              <div
                className={`${styles.col_2} ${styles.padding} `}
                id="1"
                onMouseEnter={cricketMouseEnter}
                onMouseLeave={cricketMouseLeave}
                onClick={onClick5}
              >
                <img
                  className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
                  src={cricket1}
                  alt=""
                 
                />
                <p>Cricket</p>
              </div>
              {showResults5 ? (
                <Cricket changeState={(showResult5) => setShowResults5(false)} />
              ) : null}
              <div
                className={`${styles.col_2} ${styles.padding} `}
                id="2"
                onMouseEnter={cyclingMouseEnter}
                onMouseLeave={cyclingMouseLeave}
                onClick={onClick6}
              >
                <img
                  className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
                  src={cycling1}
                  alt=""

                />
                <p>Cycling</p>

              </div>
              {showResults6 ? (
                <Cycling changeState={(showResult6) => setShowResults6(false)} />
              ) : null}
              <div
                className={`${styles.col_2} ${styles.padding} `}
                id="3"
                onMouseEnter={footballMouseEnter}
                onMouseLeave={footballMouseLeave}
                onClick={onClick7}
              >
                <img
                  className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
                  src={football1}
                  alt=""
                
                />
                <p>Football</p>

              </div>


              {showResults7 ? (
                <Football changeState={(showResult7) => setShowResults7(false)} />
              ) : null}
            </div>

            <div className={`${styles.row}`}>
              <div
                className={`${styles.col_2} ${styles.padding} `}
                id="0"
                onMouseEnter={handballMouseEnter}
                onMouseLeave={handballMouseLeave}
                onClick={onClick8}
              >
                <img
                  className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
                  src={handball1}
                  alt=""
                  
                />
                <p>Handball</p>

              </div>
              {showResults8 ? (
                <Handball changeState={(showResult8) => setShowResults8(false)} />
              ) : null}

              <div
                className={`${styles.col_2} ${styles.padding} `}
                id="1"
                onMouseEnter={hockeyMouseEnter}
                onMouseLeave={hockeyMouseLeave}
                onClick={onClick9}
              >
                <img
                  className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
                  src={hockey1}
                  alt=""
                  
                />
                <p>Hockey</p>

              </div>
              {showResults9 ? (
                <Hockey changeState={(showResult9) => setShowResults9(false)} />
              ) : null}
              <div
                className={`${styles.col_2} ${styles.padding} `}
                id="2"
                onMouseEnter={kabaddiMouseEnter}
                onMouseLeave={kabaddiMouseLeave}
                onClick={onClick10}
              >
                <img
                  className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
                  src={kabaddi1}
                  alt=""
                 
                />
                <p>Kabaddi</p>

              </div>
              {showResults10 ? (
                <Kabbadi changeState={(showResult10) => setShowResults10(false)} />
              ) : null}
              <div
                className={`${styles.col_2} ${styles.padding} `}
                id="3"
                onMouseEnter={khokhoMouseEnter}
                onMouseLeave={khokhoMouseLeave}
                onClick={onClick11}
              >
                <img
                  className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
                  src={khokho1}
                  alt=""
                 
                />
                <p>kho-kho</p>

              </div>
              
              {showResults11 ? (
                <Khokho changeState={(showResult11) => setShowResults11(false)} />
              ) : null}
            </div>

            <div className={`${styles.row}`}>
              <div
                className={`${styles.col_2} ${styles.padding} `}
                id="0"
                onMouseEnter={powerliftingMouseEnter}
                onMouseLeave={powerliftingMouseLeave}
                onClick={onClick12}
              >
                <img
                  className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
                  src={powerlifting1}
                  alt=""
                 
                />
                <p>Powerlifting</p>

              </div>
              {showResults12 ? (
                <Powerlifting
                  changeState={(showResult12) => setShowResults12(false)}
                />
              ) : null}

              <div
                className={`${styles.col_2} ${styles.padding} `}
                id="1"
                onMouseEnter={squashMouseEnter}
                onMouseLeave={squashMouseLeave}
                onClick={onClick13}
              >
                <img
                  className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
                  src={squash1}
                  alt=""
                 
                />
                <p>Squash</p>

              </div>
              {showResults13 ? (
                <Squash changeState={(showResult13) => setShowResults13(false)} />
              ) : null}

              <div
                className={`${styles.col_2} ${styles.padding} `}
                id="2"
                onMouseEnter={tabletennisMouseEnter}
                onMouseLeave={tabletennisMouseLeave}
                onClick={onClick14}
              >
                <img
                  className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
                  src={tabletennis1}
                  alt=""
                 
                />
                <p>TableTennis</p>

              </div>
              {showResults14 ? (
                <TableTennis
                  changeState={(showResult14) => setShowResults14(false)}
                />
              ) : null}

              <div
                className={`${styles.col_2} ${styles.padding} `}
                id="3"
                onMouseEnter={taekwondoMouseEnter}
                onMouseLeave={taekwondoMouseLeave}
                onClick={onClick15}
              >
                <img
                  className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
                  src={taekwondo1}
                  alt=""
                 
                />
                <p>Taekwondo</p>

              </div>
             
              {showResults15 ? (
                <Taekwondo
                  changeState={(showResult15) => setShowResults15(false)}
                />
              ) : null}
            </div>

            <div className={`${styles.row} ${styles.lastrow} `}>
             
              <div
                className={`${styles.col_2} ${styles.padding} `}
                id="0"
                onMouseEnter={tennisMouseEnter}
                onMouseLeave={tennisMouseLeave}
                onClick={onClick16}
              >
                <img
                  className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
                  src={tennis1}
                  alt=""
                
                />
                <p>Tennis</p>

              </div>
              {showResults16 ? (
                <Tennis changeState={(showResult16) => setShowResults16(false)} />
              ) : null}

              <div
                className={`${styles.col_2} ${styles.padding} `}
                id="1"
                onMouseEnter={volleyballMouseEnter}
                onMouseLeave={volleyballMouseLeave}
                onClick={onClick17}
              >
                <img
                  className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
                  src={volleyball1}
                  alt=""
                 
                />
                <p>Volleyball</p>

              </div>
              {showResults17 ? (
                <Volleyball
                  changeState={(showResult17) => setShowResults17(false)}
                />
              ) : null}

              <div
                className={`${styles.col_2} ${styles.padding} `}
                id="2"
                onMouseEnter={weightliftingMouseEnter}
                onMouseLeave={weightliftingMouseLeave}
                onClick={onClick18}
              >
                <img
                  className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
                  src={weightlifting1}
                  alt=""
                
                />
                <p>Weightlifting</p>

              </div>
              {showResults18 ? (
                <WeightLifting
                  changeState={(showResult18) => setShowResults18(false)}
                />
              ) : null}

              {/* <div
                className={`${styles.col_2} ${styles.padding} `}
                id="2"
                onMouseEnter={aquaticsMouseEnter}
                onMouseLeave={aquaticsMouseLeave}
                onClick={onClick19}
              >
                <img
                  className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
                  src={aquatics1}
                  alt=""
                 
                />
                <p>Aquatics</p>

              </div> */}

              {/* {showResults19 ? (
                <Aquatics
                  changeState={(showResult19) => setShowResults19(false)}
                />
              ) : null} */}
            </div>
          {/* </div> */}
        </div>
      </div>

    </section>
    </div>
  );
};

export default Events;
