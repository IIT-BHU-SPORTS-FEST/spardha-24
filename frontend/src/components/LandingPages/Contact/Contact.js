import { useState } from 'react';
import './Contact.css';
// import Carousel from '../Home/Carousel/Carouselhp';
import Card from './Card/Card';

const Contact = () => {
  const [selectedCategory, setSelectedCategory] = useState('Conveners');
  const [menuActive, setMenuActive] = useState(false); 

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setMenuActive(false); 
  };

  const toggleMenu = () => {
    setMenuActive(!menuActive); 
  };

  const renderCards = () => {
    switch (selectedCategory) {
      // case 'All':
      //   return <><Card  mainImage='/images/Contact/cimages/Convenor2.jpeg' name="Sarthak Gupta" position="Convener"/>
      //   <Card mainImage='/images/Contact/cimages/Co-convenor.jpeg' name="Adarsh Raj" position="Co-convener"/>
      //   <Card mainImage='/images/Contact/cimages/Co-convenor21.jpeg' name="Shubham Sahu" position="Co-convener"/>
      //   <Card mainImage='/images/Contact/cimages/Co-convenorw.jpg' name="Bhumika" position="Co-convener"/>
      //   <Card /><Card /><Card /><Card /><Card /></>;
      case 'Conveners':
        return <>
        <Card  mainImage='/images/Contact/cimages/Convenor2.jpg' name="Devang Darpe" position="Convener" email="devang.darpe.cer22@itbhu.ac.in"  isConvener={true} linkedin="https://www.linkedin.com/in/devang-darpe-a09501256?trk=contact-info"/>

        <Card mainImage='/images/Contact/cimages/Co-convenorw.jpg' name="Riddhi Rangari" position="Co-convener" email="riddhi.rangari.mst22@itbhu.ac.in" isConvener={true} linkedin="https://www.linkedin.com/in/riddhi-rangari-583a0125a" insta="https://www.instagram.com/riddhiii.i?igsh=enBvNHh4NGxsZzF1"/>

        <Card mainImage='/images/Contact/cimages/Co-convenor21.jpg' name="Suraj Kumar" position="Co-convener" email="suraj.kumar.min22@itbhu.ac.in" isConvener={true} linkedin="https://www.linkedin.com/in/suraj-kumar-3578a1258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" insta="https://www.instagram.com/kr_srj23?utm_source=qr&igsh=YXBwNWN0aTlxcHkz"/>

        <Card mainImage='/images/Contact/cimages/Co-convenor22.jpg' name="Aditya Amarnath" position="Co-convener" email="aditya.amarnath.cer22@itbhu.ac.in" isConvener={true} linkedin="https://www.linkedin.com/in/aditya-amarnath-82663a22b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" insta="https://www.instagram.com/aditya_amarnath18/"/>
   
        

        </>;
      case 'Publicity':
        return <>
        <Card name="Gudipati Pranav Reddy" email="gudipati.pranavreddy.min23@itbhu.ac.in" phone="9032348290"/>
        <Card name="Deepak" email="deepak.student.phe23@itbhu.ac.in" phone="8307778018"/>
        <Card name="Ajay Meena" email="ajay.meena.che23@itbhu.ac.in" phone="8076203750"/></>;
      case 'Marketing':
        return <>
        <Card name="Sriyog Holkar" email="sriyog.holkar.cse23@itbhu.ac.in" phone="9019746667"/>
        <Card name="Abhishek Biradar" email="abhishek.biradar.phe23@itbhu.ac.in" phone="9380041488"/>
        <Card name="Md Kaif" email="md.kaif.cer23@itbhu.ac.in" phone="9142994832"/></>;
      case 'Events':
        return <>
        <Card name="Sasank Eswar Vamsy" email="psasank.eswarvamsy.phy23@itbhu.ac.in" phone="9010404545"/>
        <Card name="Grishma Tembhurne" email="grishma.stembhurne.che23@itbhu.ac.in" phone="9322192403"/> 
        <Card name="Pavan Punj Bais" email="pavanpunj.bais.min23@itbhu.ac.in" phone="9329008865"/>
        </>; 
      case 'Hospitality':
      return <>
      <Card name="Ashok Kumar Meena" email="ashok.kmeena.civ23@itbhu.ac.in" phone="8306460439"/>
      <Card name="Piyush Kumar Pakad" email="piyushkr.pakad.cse23@itbhu.ac.in" phone="9351966135"/>
      <Card name="Shweta Singh" email="shweta.singh.cer23@itbhu.ac.in" phone="8439960289"/>
      </>;
      case 'Technical':
      return <>
      <Card name="Rohit Kumar" email="rohit.kumar.che23@itbhu.ac.in" phone="9350126101"/>
      <Card name="Roshan Mittal" email="roshan.mittal.che23@itbhu.ac.in" phone="9508287199"/>
      {/* <Card name="Shweta Singh" email="shweta.singh.cer23@itbhu.ac.in" phone="8439960289"/> */}
      </>;
      default:
        return null;
    }
  };

  return (
    <>
      <section id='contactus' className='contactus' style={{position: 'relative',
    overflow: 'hidden',}}>
       <div
    style={{
      position: 'absolute',
      inset: 0, // top:0, left:0, right:0, bottom:0
      backgroundImage: 'url(/images/bg/hero-bg1.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'blur(8px)',
      zIndex: -1,
    }}
  ></div>
        {/* <Carousel /> */}
        <div className='contactus-container'>
          <div className='heading123'>
            <h2>Contact Us</h2>
          </div>

      
          <div className='hamburger-container'>
         
            <button className='hamburger' onClick={toggleMenu}>
              &#9776; 
            </button>

           
            <div className='selected-heading'>
              {selectedCategory}
            </div>
          </div>

        
          <ul className={`heading2 ${menuActive ? 'active' : ''}`}>
            {/* <li
              onClick={() => handleCategoryClick('All')}
              className={selectedCategory === 'All' ? 'selected' : ''}
            >
              <h3>All</h3>
            </li> */}
            <li
              onClick={() => handleCategoryClick('Conveners')}
              className={selectedCategory === 'Conveners' ? 'selected' : ''}
            >
              <h3>Conveners</h3>
            </li>
            <li
              onClick={() => handleCategoryClick('Publicity')}
              className={selectedCategory === 'Publicity' ? 'selected' : ''}
            >
              <h3>Publicity</h3>
            </li>
            <li
              onClick={() => handleCategoryClick('Marketing')}
              className={selectedCategory === 'Marketing' ? 'selected' : ''}
            >
              <h3>Marketing</h3>
            </li>
            <li
              onClick={() => handleCategoryClick('Events')}
              className={selectedCategory === 'Events' ? 'selected' : ''}
            >
              <h3>Events</h3>
            </li>
            <li
              onClick={() => handleCategoryClick('Hospitality')}
              className={selectedCategory === 'Hospitality' ? 'selected' : ''}
            >
              <h3>Hospitality</h3>
            </li>
            <li
              onClick={() => handleCategoryClick('Technical')}
              className={selectedCategory === 'Technical' ? 'selected' : ''}
            >
              <h3>Technical</h3>
            </li>
          </ul>

          <div className='content123'>
            {renderCards()}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

