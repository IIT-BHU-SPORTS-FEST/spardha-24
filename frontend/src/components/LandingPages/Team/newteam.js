import React, { useState } from 'react';
import { FaLinkedin, FaEnvelope, FaInstagram, FaPhone } from 'react-icons/fa';
import styles from './newteam.module.css';

// Importing local team images
import AmitNaikImg from './Amit Naik.webp';
import abhishekpandeyImg from './abhishekpandey.jpeg';
import ayushkumarImg from './ayushkumar.jpeg';
import boddu from './boddu.jpeg';
import dhruv from './dhruv.jpeg';
import kumarabhishek from './kumarabhishek.jpeg';
import nikhilyadav from './nikhilyadav.jpeg';
import sindhuja from './sindhuja.jpeg';
import sumitverma from './sumitverma.jpeg';
import vansh from './vanshShah.jpeg';
import AshokKumarMeenaImg from './Ashok Kumar Meena.jpg';
import AyushChaurasiaImg from './Ayush Chaurasia.png';
import BabyHaraniImg from './Baby Harani Bailapudi.jpg';
import DeshkarSamirImg from './Deshkar Samir Dipak.jpg';
import DharavathShivaniImg from './Dharavath Shivani.jpg';
import KhushhalKumrawatImg from './Khushhal Kumrawat.png';
import KothaRakshithaImg from './Kotha Rakshitha.jpg';
import OmKulshreeImg from './Om Kulshree Sahu.jpg';
import PrakharImg from './Prakhar.jpg';
import ShaneshrajeImg from './Shaneshraje Sandeep Kadu.jpg';
import ShouryaDiwakarImg from './Shourya Diwakar.jpg';
import UmidAgarwalaImg from './Umid Agarwala.jpg';
import VarnitSainiImg from './Varnit Saini.jpeg';
import MalothMohithImg from './malothmohithnaik.jpeg';
import maruthikumarImg from './maruthikumar.jpeg';
import yeduguruumeshreddyImg from './yeduguruumeshreddy.jpeg';
import mdkaifImg from './mdkaif.jpeg';
import noneImg from './none.jpeg';

const teamData = [
  // --- SECRETARIES & CONVENERS ---
  {
    id: 0,
    name: 'MD KAIF',
    role: 'CONVENER',
    vertical: 'Convener',
    image: mdkaifImg,
    phone: '',
    email: '',
  },
  {
    id: 1,
    name: 'OM KULSHREE SAHU',
    role: 'CO-CONVENER',
    vertical: 'Co-Conveners',
    image: OmKulshreeImg,
    phone: '6260111459',
    email: 'mailto:omkulshree.sahu.cer23@itbhu.ac.in',
  },
  {
    id: 2,
    name: 'SHANESHRAJE KADU',
    role: 'CO-CONVENER',
    vertical: 'Co-Conveners',
    image: ShaneshrajeImg,
    phone: '8669937273',
    email: 'mailto:shaneshraje.skadu.chy23@itbhu.ac.in',
  },
  {
    id: 3,
    name: 'ASHOK KUMAR MEENA',
    role: 'CO-CONVENER',
    vertical: 'Co-Conveners',
    image: AshokKumarMeenaImg,
    phone: '8306460439',
    email: 'mailto:ashok.kmeena.civ23@itbhu.ac.in',
  },

    // --- MARKETING ---
  {
    id: 17,
    name: 'MALOTH MOHITH NAIK',
    role: 'TEAM MEMBER',
    vertical: 'Marketing',
    image: MalothMohithImg,
    phone: '',
    email: '',
  },
  {
    id: 18,
    name: 'YEDUGURU UMESH REDDY',
    role: 'TEAM MEMBER',
    vertical: 'Marketing',
    image: yeduguruumeshreddyImg,
    phone: '',
    email: '',
  },
  {
    id: 19,
    name: 'EALAVATH MARUTHI KUMAR',
    role: 'TEAM MEMBER',
    vertical: 'Marketing',
    image: maruthikumarImg,
    phone: '8897570112',
    email: 'mailto:eslavath.maruthik.ece24@itbhu.ac.in',
  },

   // --- TECH ---
  {
    id: 26,
    name: 'KHUSHHAL KUMRAWAT',
    role: 'TECH TEAM',
    vertical: 'Tech',
    image: KhushhalKumrawatImg,
    phone: '8236071713',
    email: 'mailto:khushhal.kumrawat.cer24@itbhu.ac.in',
  },
  {
    id: 27,
    name: 'SAMIR DESHKAR',
    role: 'TECH TEAM',
    vertical: 'Tech',
    image: DeshkarSamirImg,
    phone: '8482931748',
    email: 'mailto:deshkar.samird.cer24@itbhu.ac.in',
  },
  {
    id: 28,
    name: 'VARNIT SAINI',
    role: 'TECH TEAM',
    vertical: 'Tech',
    image: VarnitSainiImg,
    phone: '8077400112',
    email: 'mailto:varnit.saini.cer24@itbhu.ac.in',
  },

  // --- EVENTS ---
  {
    id: 9,
    name: 'SHOURYA DIWAKAR',
    role: 'TEAM MEMBER',
    vertical: 'Events',
    image: ShouryaDiwakarImg,
    phone: '8923559452',
    email: 'mailto:shourya.diwakar.chy24@itbhu.ac.in',
  },
  {
    id: 10,
    name: 'ABHISKEK KUMAR PANDEY',
    role: 'TEAM MEMBER',
    vertical: 'Events',
    image: abhishekpandeyImg,
    phone: '',
    email: '',
  },
  {
    id: 11,
    name: 'HRITIK ROSHAN',
    role: 'TEAM MEMBER',
    vertical: 'Events',
    image: noneImg,
    phone: '',
    email: '',
  },

  // --- PUBLIC RELATIONS ---
  {
    id: 20,
    name: 'DHRUV PANKAJ BAVISKAR',
    role: 'TEAM MEMBER',
    vertical: 'Public Relations',
    image: dhruv,
    phone: '',
    email: '',
  },
  {
    id: 21,
    name: 'SINDHUJA',
    role: 'TEAM MEMBER',
    vertical: 'Public Relations',
    image: sindhuja,
    phone: '',
    email: '',
  },
  {
    id: 22,
    name: 'AMIT NAIK',
    role: 'TEAM MEMBER',
    vertical: 'Public Relations',
    image: AmitNaikImg,
    phone: '8328885331',
    email: 'mailto:amit.naik.che24@itbhu.ac.in',
  },

  // --- PUBLICITY ---
  {
    id: 23,
    name: 'DHARAVATH SHIVANI',
    role: 'TEAM MEMBER',
    vertical: 'Publicity',
    image: DharavathShivaniImg,
    phone: '9030011685',
    email: 'mailto:dharavath.shivani.min24@itbhu.ac.in',
  },
  {
    id: 24,
    name: 'KOTHA RAKSHITHA',
    role: 'TEAM MEMBER',
    vertical: 'Publicity',
    image: KothaRakshithaImg,
    phone: '8885332907',
    email: 'mailto:kotha.rakshitha.min24@itbhu.ac.in',
  },
  {
    id: 25,
    name: 'BODDU SRAYAN ROY',
    role: 'TEAM MEMBER',
    vertical: 'Publicity',
    image: boddu,
    phone: '6304993307',
    email: 'mailto:bsrayan.roy.min24@itbhu.ac.in',
  },

  // --- DESIGN ---
  {
    id: 4,
    name: 'PRAKHAR',
    role: 'TEAM MEMBER',
    vertical: 'Design',
    image: PrakharImg,
    phone: '8002108970',
    email: 'mailto:prakhar.student.apd24@itbhu.ac.in',
  },
  {
    id: 5,
    name: 'AYUSH CHAURASIA',
    role: 'TEAM MEMBER',
    vertical: 'Design',
    image: AyushChaurasiaImg,
    phone: '8650450625',
    email: 'mailto:ayush.chaurasia.apd24@itbhu.ac.in',
  },

  // --- SOCIAL MEDIA ---
  {
    id: 6,
    name: 'SHUBH BANERJEE',
    role: 'TEAM MEMBER',
    vertical: 'Social Media',
    image: noneImg,
    phone: '',
    email: '',
  },
  {
    id: 7,
    name: 'NIKHIK YADAV',
    role: 'TEAM MEMBER',
    vertical: 'Social Media',
    image: nikhilyadav,
    phone: '',
    email: '',
  },
  {
    id: 8,
    name: 'VANSH VAIBHAV SHAH',
    role: 'TEAM MEMBER',
    vertical: 'Social Media',
    image: vansh,
    phone: '',
    email: '',
  },

  // --- OPERATIONS ---
  {
    id: 12,
    name: 'BABY HARANI BAILAPUDI',
    role: 'TEAM MEMBER',
    vertical: 'Operations',
    image: BabyHaraniImg,
    phone: '8309024665',
    email: 'mailto:bharani.bailapudi.mec24@itbhu.ac.in',
  },
  {
    id: 13,
    name: 'SUMIT VERMA',
    role: 'TEAM MEMBER',
    vertical: 'Operations',
    image: sumitverma,
    phone: '',
    email: '',
  },

  // --- HOSPITALITY ---
  {
    id: 14,
    name: 'AYUSH KUMAR',
    role: 'TEAM MEMBER',
    vertical: 'Hospitality',
    image: ayushkumarImg,
    phone: '9216154784',
    email: 'mailto:ayush.kumar.min24@itbhu.ac.in',
  },
  {
    id: 15,
    name: 'UMID AGARWALA',
    role: 'TEAM MEMBER',
    vertical: 'Hospitality',
    image: UmidAgarwalaImg,
    phone: '7478281621',
    email: 'mailto:umid.agarwala.che24@itbhu.ac.in',
  },
  {
    id: 16,
    name: 'ABHISHEK KUMAR',
    role: 'TEAM MEMBER',
    vertical: 'Hospitality',
    image: kumarabhishek,
    phone: '9065290038',
    email: 'mailto:kumar.abhishek.che24@itbhu.ac.in',
  },
  
];

const verticalsList = [
  'All',
  'Convener',
  'Co-Conveners',
  'Marketing',
  'Tech',
  'Events',
  'Public Relations',
  'Publicity',
  'Design',
  'Social Media',
  'Operations',
  'Hospitality',
];

// Sub-component for individual cards to handle toggle state
const TeamCard = ({ member }) => {
  const [activeContact, setActiveContact] = useState(null); // 'email' | 'phone' | null

  // Strips "mailto:" if present in the data for clean presentation
  const cleanEmail = member.email ? member.email.replace(/^mailto:/, '') : '';

  const handleEmailToggle = () => {
    setActiveContact((prev) => (prev === 'email' ? null : 'email'));
  };

  const handlePhoneToggle = () => {
    setActiveContact((prev) => (prev === 'phone' ? null : 'phone'));
  };

  return (
    <div className={styles.verticalCard}>
      <div className={styles.cardTopInfo}>
        <h3 className={styles.cardMemberName}>{member.name}</h3>
        <p className={styles.cardMemberRole}>{member.role}</p>
      </div>

      <div className={styles.cardImageContainer}>
        {member.image ? (
          <img 
            src={member.image} 
            alt={member.name} 
            className={styles.cardImg}
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.target.style.display = 'none';
              if (e.target.nextSibling) {
                e.target.nextSibling.style.display = 'flex';
              }
            }}
          />
        ) : null}
        <div 
          className={styles.imagePlaceholderBox} 
          style={{ display: member.image ? 'none' : 'flex' }}
        >
          <span>NO IMAGE AVAILABLE</span>
        </div>
      </div>

      <div className={styles.cardBottomSocials}>
        {member.linkedin ? (
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className={`${styles.cardIcon} ${styles.linkedinIcon}`} />
          </a>
        ) : null}
        {member.instagram ? (
          <a href={member.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className={`${styles.cardIcon} ${styles.instagramIcon}`} />
          </a>
        ) : null}
        {cleanEmail ? (
          <button 
            type="button"
            className={styles.iconButton}
            onClick={handleEmailToggle}
            aria-label="Show Email"
          >
            <FaEnvelope className={`${styles.cardIcon} ${styles.emailIcon}`} />
          </button>
        ) : null}
        {member.phone ? (
          <button 
            type="button"
            className={styles.iconButton}
            onClick={handlePhoneToggle}
            aria-label="Show Phone"
          >
            <FaPhone className={`${styles.cardIcon} ${styles.phoneIcon}`} />
          </button>
        ) : null}
      </div>

      {/* Visible contact details displayed directly below icons */}
      {activeContact === 'email' && cleanEmail && (
        <div className={styles.contactDetailsBox}>
          <a href={`mailto:${cleanEmail}`} className={styles.contactText}>
            {cleanEmail}
          </a>
        </div>
      )}

      {activeContact === 'phone' && member.phone && (
        <div className={styles.contactDetailsBox}>
          <a href={`tel:${member.phone}`} className={styles.contactText}>
            {member.phone}
          </a>
        </div>
      )}
    </div>
  );
};

export default function NewTeam() {
  const [selectedVertical, setSelectedVertical] = useState('All');

  const filteredMembers = selectedVertical === 'All'
    ? teamData
    : teamData.filter((member) => member.vertical === selectedVertical);

  const displayedCategories = selectedVertical === 'All'
    ? Array.from(new Set(teamData.map((m) => m.vertical)))
    : [selectedVertical];

  return (
    <div className={styles.darkTeamWrapper}>
      <h1 className={styles.teamPageTitle}>THE FORCE BEHIND SPARDHA</h1>

      <div className={styles.filterNav}>
        {verticalsList.map((category) => (
          <button
            key={category}
            className={`${styles.filterTabBtn} ${selectedVertical === category ? styles.active : ''}`}
            onClick={() => setSelectedVertical(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {displayedCategories.map((categoryName) => {
        const categoryMembers = filteredMembers.filter((m) => m.vertical === categoryName);
        if (categoryMembers.length === 0) return null;

        const isSecretaries = categoryName === 'Secretaries';
        const conveners = isSecretaries ? categoryMembers.filter((m) => m.role === 'CONVENER') : [];
        const coConveners = isSecretaries ? categoryMembers.filter((m) => m.role === 'CO-CONVENER') : [];

        return (
          <div key={categoryName} className={styles.categoryGroup}>
            <h2 className={styles.categoryTitle}>{categoryName.toUpperCase()}</h2>

            {isSecretaries ? (
              <div className={styles.secretariesWrapper}>
                {conveners.length > 0 && (
                  <div className={styles.convenerRow}>
                    {conveners.map((member) => <TeamCard key={member.id} member={member} />)}
                  </div>
                )}
                {coConveners.length > 0 && (
                  <div className={styles.coConvenersRow}>
                    {coConveners.map((member) => <TeamCard key={member.id} member={member} />)}
                  </div>
                )}
              </div>
            ) : (
              <div className={styles.cardsGrid}>
                {categoryMembers.map((member) => <TeamCard key={member.id} member={member} />)}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}