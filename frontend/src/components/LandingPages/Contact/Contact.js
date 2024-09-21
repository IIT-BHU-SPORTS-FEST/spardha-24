import { useState } from 'react';
import './Contact.css';
import Carousel from '../Home/Carousel/Carouselhp';
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
        <Card  mainImage='/images/Contact/cimages/Convenor2.jpeg' name="Sarthak Gupta" position="Convener" email="sarthak.gupta.civ21@itbhu.ac.in"  isConvener={true} linkedin="https://www.linkedin.com/in/sarthak-gupta-4779b6227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" insta="https://www.instagram.com/sarthak._.gupta23?igsh=aWl3NHh5eWZseTBv"/>

        <Card mainImage='/images/Contact/cimages/Co-convenorw.jpg' name="Bhumika" position="Co-convener" email="bhumika.student.met21@itbhu.ac.in" isConvener={true} linkedin="https://www.linkedin.com/in/bhumika-batra-47782222a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" insta="https://www.instagram.com/bhumika_batra_05?igsh=bWU3NTExcTh4bHNy"/>

        <Card mainImage='/images/Contact/cimages/Co-convenor21.jpeg' name="Shubham Sahu" position="Co-convener" email="shubham.sahu.
        cer21@itbhu.ac.in" isConvener={true} linkedin="https://www.linkedin.com/in/shubhamsahu7240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" insta="https://www.instagram.com/shubham.sahu7240?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"/>

        <Card mainImage='/images/Contact/cimages/Co-convenor.jpeg' name="Adarsh Raj" position="Co-convener" email="adarsh.raj.met21@itbhu.ac.in" isConvener={true} linkedin="https://www.linkedin.com/in/adarsh-raj-a5b9b4244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" insta="https://www.instagram.com/adarsh_.raj._?igsh=bmg3ZG0zN3VodzNo"/>

        

        

        </>;
      case 'Publicity':
        return <>
        <Card name="Suraj Kumar" email="suraj.kumar.min22@itbhu.ac.in" phone=" 9304192920 "/>
        <Card name="Arya Meshram" email="arya.meshram.chy22@itbhu.ac.in" phone="9009073032"/>
        <Card name="Vivek Kumar" email="vivek.kumar.min22@itbhu.ac.in" phone="7033587357"/></>;
      case 'Marketing':
        return <>
        <Card name="Aditya Amarnath" email="aditya.amarnath.cer22@itbhu.ac.in" phone="9041327484"/>
        <Card name=" Sanyam Jain" email="sanyam.jain.cd.civ22@itbhu.ac.in" phone="8528645813"/>
        <Card name=" Prabhankur" email="prabhankur.student.civ22@itbhu.ac.in" phone="9369800256"/></>;
      case 'Events':
        return <>
        <Card name="Aryan Maurya" email="aryan.maurya.civ22@itbhu.ac.in " phone="8604099753"/> 
        <Card name="Adesh Meena" email="adesh.meena.ece22@itbhu.ac.in" phone="6350278428"/>
        </>; 
      case 'Hospitality':
      return <>
      <Card name="Ojas Raj " email="ojas.raj.civ22@itbhu.ac.in " phone="7974552339 "/>
      <Card name="Vinay Dadri " email="vinay.kumar.mec22@itbhu.ac.in" phone="8529552845"/>
      <Card name="Sandeep sarkar" email="Sandeep.sarkar.cse22@itbhu.ac.in" phone="7721877086"/>
      </>;
      default:
        return null;
    }
  };

  return (
    <>
      <section id='contactus'>
        <Carousel />
        <div className='container'>
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

