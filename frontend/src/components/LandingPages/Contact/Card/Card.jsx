import { useState, useEffect, useRef } from 'react';
import '../Contact.css';
import CardItem from './CardItem';

const Card = () => {
  const [selectedCategory, setSelectedCategory] = useState('Conveners');
  const [menuActive, setMenuActive] = useState(false);
  const menuRef = useRef();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setMenuActive(false);
  };

  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuActive(false);
      }
    };
    if (menuActive) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuActive]);

  const cardsData = {
    'Conveners': [
      {
        name: "Devang Darpe",
        position: "Convener",
        mainImage: '/images/teams_images/heads/Convenor2.jpg',
        email: "devang.darpe.cer22@itbhu.ac.in",
        // phone: "+91-9000000001",
        linkedin: "https://www.linkedin.com/in/devang-darpe-a09501256",
        // insta: "https://instagram.com/devangdarpe"
      },
      {
        name: "Riddhi Rangari",
        position: "Co-convener",
        mainImage: '/images/teams_images/heads/Co-convenorw.jpg',
        email: "riddhi.rangari.mst22@itbhu.ac.in",
        // phone: "+91-9000000002",
        linkedin: "https://www.linkedin.com/in/riddhi-rangari-583a0125a",
        insta: "https://www.instagram.com/riddhiii.i"
      },
      {
        name: "Suraj Kumar",
        position: "Co-convener",
        mainImage: '/images/teams_images/heads/Co-convenor21.jpg',
        email: "suraj.kumar.min22@itbhu.ac.in",
        // phone: "+91-9000000003",
        linkedin: "https://www.linkedin.com/in/suraj-kumar-3578a1258",
        insta: "https://www.instagram.com/kr_srj23"
      },
      {
        name: "Aditya Amarnath",
        position: "Co-convener",
        mainImage: '/images/teams_images/heads/Co-convenor22.jpg',
        email: "aditya.amarnath.cer22@itbhu.ac.in",
        // phone: "+91-9000000004",
        linkedin: "https://www.linkedin.com/in/aditya-amarnath-82663a22b",
        insta: "https://www.instagram.com/aditya_amarnath18/"
      }
    ],
    'Publicity': [
      {
        name: "Gudipati Pranav Reddy",
        position: "",
        mainImage: '/images/teams_images/default.svg',
        email: "gudipati.pranavreddy.min23@itbhu.ac.in",
        phone: "+91 9032348290",
        // linkedin: "https://linkedin.com/in/pranavreddy",
        // insta: "https://instagram.com/pranavreddy"
      },
      {
        name: "Deepak",
        position: "",
        mainImage: '/images/teams_images/default.svg',
        email: "deepak.student.phe23@itbhu.ac.in",
        phone: "+91 8307778018",
        // linkedin: "https://linkedin.com/in/deepak",
        // insta: "https://instagram.com/deepak"
      },
      {
        name: "Ajay Meena",
        position: "",
        mainImage: '/images/teams_images/publi/ajay.jpg',
        email: "ajay.meena.che23@itbhu.ac.in",
        phone: "+91 8076203750",
        // linkedin: "https://linkedin.com/in/ajaymeena",
        // insta: "https://instagram.com/ajaymeena"
      }
    ],
    'Marketing': [
      {
        name: "Sriyog Holkar",
        position: "",
        mainImage: '/images/teams_images/marketing/sri.jpg',
        email: "sriyog.holkar.cse23@itbhu.ac.in",
        phone: "+91 9019746667",
        // linkedin: "https://linkedin.com/in/sriyogholkar",
        // insta: "https://instagram.com/sriyogholkar"
      },
      {
        name: "Abhishek Biradar",
        position: "",
        mainImage: '/images/teams_images/marketing/abhishek.jpg',
        email: "abhishek.biradar.phe23@itbhu.ac.in",
        phone: "+91 9380041488",
        // linkedin: "https://linkedin.com/in/abhishekbiradar",
        // insta: "https://instagram.com/abhishekbiradar"
      },
      {
        name: "Md Kaif",
        position: "",
        mainImage: '/images/teams_images/marketing/kaif.jpg',
        email: "md.kaif.cer23@itbhu.ac.in",
        phone: "+91 9142994832",
        // linkedin: "https://linkedin.com/in/kaif",
        // insta: "https://instagram.com/kaif"
      }
    ],
    'Events': [
      {
        name: "Psasank Eswarvamsy",
        position: "",
        mainImage: '/images/teams_images/Events/pasasnk.jpg',
        email: "psasank.eswarvamsy.phy23@itbhu.ac.in",
        phone: "+91 9010404545",
        // linkedin: "https://linkedin.com/in/psasankeswarvamsy",
        // insta: "https://instagram.com/psasankeswarvamsy"
      },
      {
        name: "Grishma Tembhurne",
        position: "",
        mainImage: '/images/teams_images/default.svg',
        email: "grishma.stembhurne.che23@itbhu.ac.in",
        phone: "+91 9322192403",
        // linkedin: "https://linkedin.com/in/grishma",
        // insta: "https://instagram.com/grishma"
      },
      {
        name: "Pavan Punj Bais",
        position: "",
        mainImage: '/images/teams_images/Events/pavan.jpg',
        email: "pavanpunj.bais.min23@itbhu.ac.in",
        phone: "+91 9329008865",
        // linkedin: "https://linkedin.com/in/pavanpunj",
        // insta: "https://instagram.com/pavanpunj"
      }
    ],
    'Hospitality': [
      {
        name: "Ashok Kumar Meena",
        position: "",
        mainImage: '/images/teams_images/hospi/ashok.jpg',
        email: "ashok.kmeena.civ23@itbhu.ac.in",
        phone: "+91 8306460439",
        // linkedin: "https://linkedin.com/in/ashokkumar",
        // insta: "https://instagram.com/ashokkumar"
      },
      {
        name: "Piyush Kumar Pakad",
        position: "",
        mainImage: '/images/teams_images/hospi/piyushpaakad.jpg',
        email: "piyushkr.pakad.cse23@itbhu.ac.in",
        phone: "+91 9351966135",
        // linkedin: "https://linkedin.com/in/piyushkumar",
        // insta: "https://instagram.com/piyushkumar"
      },
      {
        name: "Shweta Singh",
        position: "",
        mainImage: '/images/teams_images//hospi/swetha.jpg',
        email: "shweta.singh.cer23@itbhu.ac.in",
        phone: "+91 8439960289",
        // linkedin: "https://linkedin.com/in/shweta",
        // insta: "https://instagram.com/shweta"
      }
    ],
    'Technical': [
      {
        name: "Rohit Kumar",
        position: "Technical Head",
        mainImage: '/images/teams_images/Technical/Rohit_Kumar.jpg',
        email: "rohit.kumar.che23@itbhu.ac.in",
        phone: "+91 9350126101",
        linkedin: "https://linkedin.com/in/rohit-kumar2005",
        insta: "https://instagram.com/rohit.kumar.2005"
      },
      {
        name: "Roshan Mittal",
        position: "",
        mainImage: '/images/teams_images/Technical/roshan.jpg',
        email: "roshan.mittal.che23@itbhu.ac.in",
        phone: "+91 9508287199",
        // linkedin: "https://linkedin.com/in/roshanmittal",
        // insta: "https://instagram.com/roshanmittal"
      }
    ]
  };

  return (
    <section id='contactus'>
      <div className='container glass-card-container'>
        <div className="category-nav" ref={menuRef}>
          <button className='hamburger' onClick={toggleMenu}>
            &#9776;
          </button>
          <ul className={`heading2${menuActive ? ' active' : ''}`}>
            {Object.keys(cardsData).map(cat => (
              <li
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={selectedCategory === cat ? 'selected' : ''}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>
        <div className='selected-heading'>{selectedCategory}</div>
        <div className='content123'>
          {cardsData[selectedCategory].map((person, idx) => (
            <CardItem
              key={idx}
              mainImage={person.mainImage}
              name={person.name}
              position={person.position}
              email={person.email}
              phone={person.phone}
              linkedin={person.linkedin}
              insta={person.insta}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;
