import { useState } from 'react';
import './Contact.css';
import Carousel from '../Home/Carousel/Carouselhp';
import Card from './Card/Card';

const Contact = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
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
      case 'All':
        return <><Card  mainImage='/images/Contact/cimages/Convenor2.jpeg' name="Sarthak Gupta" position="Convenor"/>
        <Card mainImage='/images/Contact/cimages/Co-convenor.jpeg' name="Adarsh Raj" position="Co-convenor"/>
        <Card mainImage='/images/Contact/cimages/Co-convenor21.jpeg' name="Shubham Sahu" position="Co-convenor"/>
        <Card mainImage='/images/Contact/cimages/Co-convenorw.jpg' name="Bhumika" position="Co-convenor"/>
        <Card /><Card /><Card /><Card /><Card /></>;
      case 'Convenors':
        return <>
        <Card  mainImage='/images/Contact/cimages/Convenor2.jpeg' name="Sarthak Gupta" position="Convenor"/>
        <Card mainImage='/images/Contact/cimages/Co-convenor.jpeg' name="Adarsh Raj" position="Co-convenor"/>
        <Card mainImage='/images/Contact/cimages/Co-convenor21.jpeg' name="Shubham Sahu" position="Co-convenor"/>
        <Card mainImage='/images/Contact/cimages/Co-convenorw.jpg' name="Bhumika" position="Co-convenor"/>
        </>;
      case 'Publicity':
        return <><Card /><Card /><Card /><Card /></>;
      case 'Marketing':
        return <><Card /><Card /></>;
      case 'Others':
        return <><Card /></>;
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
            <li
              onClick={() => handleCategoryClick('All')}
              className={selectedCategory === 'All' ? 'selected' : ''}
            >
              <h3>All</h3>
            </li>
            <li
              onClick={() => handleCategoryClick('Convenors')}
              className={selectedCategory === 'Convenors' ? 'selected' : ''}
            >
              <h3>Convenors</h3>
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
              onClick={() => handleCategoryClick('Others')}
              className={selectedCategory === 'Others' ? 'selected' : ''}
            >
              <h3>Others</h3>
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

