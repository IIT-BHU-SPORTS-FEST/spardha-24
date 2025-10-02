import './Contact.css';
import Card from './Card/Card';
import HomeContact from "../Home/Contact/Contact"



const Contact = () => {

  // const renderCards = () => {
  //   switch (selectedCategory) {
  //     case 'Conveners':
  //       return (
  //         <div className='cards-row'>
  //           <Card mainImage='/images/Contact/cimages/Convenor2.jpg' name="Devang Darpe" position="Convener" email="devang.darpe.cer22@itbhu.ac.in" isConvener={true} linkedin="https://www.linkedin.com/in/devang-darpe-a09501256?trk=contact-info"/>
  //           <Card mainImage='/images/Contact/cimages/Co-convenorw.jpg' name="Riddhi Rangari" position="Co-convener" email="riddhi.rangari.mst22@itbhu.ac.in" isConvener={true} linkedin="https://www.linkedin.com/in/riddhi-rangari-583a0125a" insta="https://www.instagram.com/riddhiii.i?igsh=enBvNHh4NGxsZzF1"/>
  //           <Card mainImage='/images/Contact/cimages/Co-convenor21.jpg' name="Suraj Kumar" position="Co-convener" email="suraj.kumar.min22@itbhu.ac.in" isConvener={true} linkedin="https://www.linkedin.com/in/suraj-kumar-3578a1258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" insta="https://www.instagram.com/kr_srj23?utm_source=qr&igsh=YXBwNWN0aTlxcHkz"/>
  //           <Card mainImage='/images/Contact/cimages/Co-convenor22.jpg' name="Aditya Amarnath" position="Co-convener" email="aditya.amarnath.cer22@itbhu.ac.in" isConvener={true} linkedin="https://www.linkedin.com/in/aditya-amarnath-82663a22b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" insta="https://www.instagram.com/aditya_amarnath18/"/>
  //         </div>
  //       );
  //     case 'Publicity':
  //       return (
  //         <div className='cards-row'>
  //           <Card name="Gudipati Pranav Reddy" email="gudipati.pranavreddy.min23@itbhu.ac.in" phone="9032348290"/>
  //           <Card name="Deepak" email="deepak.student.phe23@itbhu.ac.in" phone="8307778018"/>
  //           <Card name="Ajay Meena" email="ajay.meena.che23@itbhu.ac.in" phone="8076203750"/>
  //         </div>
  //       );
  //     case 'Marketing':
  //       return (
  //         <div className='cards-row'>
  //           <Card name="Sriyog Holkar" email="sriyog.holkar.cse23@itbhu.ac.in" phone="9019746667"/>
  //           <Card name="Abhishek Biradar" email="abhishek.biradar.phe23@itbhu.ac.in" phone="9380041488"/>
  //           <Card name="Md Kaif" email="md.kaif.cer23@itbhu.ac.in" phone="9142994832"/>
  //         </div>
  //       );
  //     case 'Events':

  //       return <>
  //       <Card name="Sasank Eswar Vamsy" email="psasank.eswarvamsy.phy23@itbhu.ac.in" phone="9010404545"/>
  //       <Card name="Grishma Tembhurne" email="grishma.stembhurne.che23@itbhu.ac.in" phone="9322192403"/> 
  //       <Card name="Pavan Punj Bais" email="pavanpunj.bais.min23@itbhu.ac.in" phone="9329008865"/>
  //       </>; 

  //     case 'Hospitality':
  //       return (
  //         <div className='cards-row'>
  //           <Card name="Ashok Kumar Meena" email="ashok.kmeena.civ23@itbhu.ac.in" phone="8306460439"/>
  //           <Card name="Piyush Kumar Pakad" email="piyushkr.pakad.cse23@itbhu.ac.in" phone="9351966135"/>
  //           <Card name="Shweta Singh" email="shweta.singh.cer23@itbhu.ac.in" phone="8439960289"/>
  //         </div>
  //       );
  //     case 'Technical':
  //       return (
  //         <div className='cards-row'>
  //           <Card name="Rohit Kumar" email="rohit.kumar.che23@itbhu.ac.in" phone="9350126101"/>
  //           <Card name="Roshan Mittal" email="roshan.mittal.che23@itbhu.ac.in" phone="9351966135"/>
  //         </div>
  //       );
  //     default:
  //       return null;
  //   }
  // };

  return (
    <section id="contactus" className="contactus-bg"  style={{
    backgroundImage: "url(/images/bg/hero-bg1.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
      <div className="conveners-block">
        <h1 className="conveners-title">OUR CONVENERS</h1>
        <p className="conveners-subtitle">
          "Behind the grandeur of Spardha stand our conveners, whose relentless efforts and inspiring leadership transform ideas into reality. With their guidance, the fest continues to grow as a symbol of energy, passion, and sporting excellence at IIT BHU."
        </p>
        <Card/>
      </div>
       <div style={{ backgroundColor: "rgb(23, 30, 41)"}}>
  <HomeContact/>
</div>
    </section>
  );
};

export default Contact;
