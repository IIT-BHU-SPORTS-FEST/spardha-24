import { useState } from 'react';
import './Contact.css';
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
    const cardsData = {
      'Conveners': [
        { name: "Devang Darpe", position: "Convener", mainImage: '/images/Contact/cimages/Convenor2.jpg', email: "devang.darpe.cer22@itbhu.ac.in", linkedin: "https://linkedin.com/in/devangdarpe" },
        { name: "Riddhi Rangari", position: "Co-convener", mainImage: '/images/Contact/cimages/Co-convenorw.jpg', email: "riddhi.rangari.mst22@itbhu.ac.in" },
        { name: "Suraj Kumar", position: "Co-convener", mainImage: '/images/Contact/cimages/Co-convenor21.jpg', email: "suraj.kumar.min22@itbhu.ac.in" },
        { name: "Aditya Amarnath", position: "Co-convener", mainImage: '/images/Contact/cimages/Co-convenor22.jpg', email: "aditya.amarnath.cer22@itbhu.ac.in" }
      ],
      'Publicity': [
        { name: "Gudipati Pranav Reddy", email: "gudipati.pranavreddy.min23@itbhu.ac.in" },
        { name: "Deepak", email: "deepak.student.phe23@itbhu.ac.in" },
        { name: "Ajay Meena", email: "ajay.meena.che23@itbhu.ac.in" }
      ],
      'Marketing': [
        { name: "Sriyog Holkar", email: "sriyog.holkar.cse23@itbhu.ac.in" },
        { name: "Abhishek Biradar", email: "abhishek.biradar.phe23@itbhu.ac.in" },
        { name: "Md Kaif", email: "md.kaif.cer23@itbhu.ac.in" }
      ],
      'Events': [
        { name: "Psasank Eswarvamsy", email: "psasank.eswarvamsy.phy23@itbhu.ac.in" },
        { name: "Grishma Tembhurne", email: "grishma.stembhurne.che23@itbhu.ac.in" },
        { name: "Pavan Punj Bais", email: "pavanpunj.bais.min23@itbhu.ac.in" }
      ],
      'Hospitality': [
        { name: "Ashok Kumar Meena", email: "ashok.kmeena.civ23@itbhu.ac.in" },
        { name: "Piyush Kumar Pakad", email: "piyushkr.pakad.cse23@itbhu.ac.in" },
        { name: "Shweta Singh", email: "shweta.singh.cer23@itbhu.ac.in" }
      ],
      'Technical': [
        { name: "Rohit Kumar", email: "rohit.kumar.che23@itbhu.ac.in" },
        { name: "Roshan Mittal", email: "roshan.mittal.che23@itbhu.ac.in" }
      ]
    };

    return cardsData[selectedCategory].map((person, idx) => (
      <Card
        key={idx}
        mainImage={person.mainImage || '/images/default-profile.png'}
        name={person.name}
        position={person.position || ''}
        email={person.email}
        linkedin={person.linkedin}
        insta={person.insta}
      />
    ));
  };

  return (
    <section id='contactus'>
      <div className='container'>
        <h2 className='heading123'>OUR CONVENERS</h2>

        <ul className={`heading2 ${menuActive ? 'active' : ''}`}>
          {['Conveners', 'Publicity', 'Marketing', 'Events', 'Hospitality', 'Technical'].map(cat => (
            <li
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={selectedCategory === cat ? 'selected' : ''}
            >
              {cat}
            </li>
          ))}
        </ul>

        <button className='hamburger' onClick={toggleMenu}>
          &#9776;
        </button>

        <div className='selected-heading'>{selectedCategory}</div>

        <div className='content123'>
          {renderCards()}
        </div>
      </div>
    </section>
  );
};

export default Contact;
