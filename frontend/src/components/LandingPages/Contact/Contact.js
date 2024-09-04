import { useState} from 'react';
import './Contact.css';
import Carousel from '../Home/Carousel/Carouselhp';
import Card from './Card/Card';

const Contact = () => {

  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const renderCards = () => {
    switch (selectedCategory) {
      case 'All':
        return <><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /></>;
      case 'Convenors':
        return <><Card /><Card /></>;
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
          <div className='heading2'>
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
          </div>
            <div className='content123'>
              {renderCards()}
            </div>
          </div>
      </section>
    </>
  );
};
export default Contact;
