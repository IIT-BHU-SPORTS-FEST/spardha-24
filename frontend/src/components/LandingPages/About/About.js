import "./About.css"
import location_image from "./location_image.png"


const About = () => {
  return <div className="top-div">
    <div className="pentagon-flipped dark-theme"></div>
    <div className="main-heading">
      ABOUT US
    </div>
    <div className="rectangle-1">
      <div className="pentagon-flipped light-theme"></div>
      <div className="pentagon-not-flipped light-theme"></div>
      <p className="para">
        Spardha is the annual sports festival of IIT (BHU), Varanasi. In its glorious history of over 38 years, Spardha has grown to become the largest and one of the most awaited sports festival of northern India where athletic competition is drawn from throughout the country. Each year, over a thousand participants compete in an array of sports like hockey, basketball, cricket, boxing, tennis and many more, creating a stunning spectacle of exceptional fervidness in athletic talent. The event, embraced by one of the best gatherings of celebrated sports personalities and spirited audience, has always enthused a zest for continuously scaling new zeniths in the pursuit of excellence and vibrancy among one and all. At present, Spardha has a team of over 500 and is also associated with numerous renowned firms and sports organizations. These exhilarating days have many resounding experiences for participants and supporters alike, creating a lifetime of memories. Gear up yourself to witness the thrilling and frolicsome SPARDHA.
      </p>
    </div>
    <div className="container-1">
      <div className="rectangle-2">
      <div className="pentagon-flipped light-theme"></div>
      <div className="pentagon-not-flipped light-theme"></div>
        <p className="second-heading">HYPE AROUND SPARDHA</p>
        <p className="para">
          For starters, 2025 will witness the 39th edition of Spardha, a festival which has grown from strength to strength ever since its inception. After all these successful editions, Spardha, today stands as the largest inter-collegiate sporting event of India.
        </p>
      </div>
      <div className="rectangle-2">
      <div className="pentagon-flipped light-theme"></div>
      <div className="pentagon-not-flipped light-theme"></div>
        <p className="second-heading">THE TALK OF THE TOWN</p>
        <p className="para">
          Each year thousands of participants at Spardha put their hard work to test in a vast array of sports. If this doesn't catch your attention, the bustle of 45,000 people on the campus streets surely will. Its them who make Spardha the festival it is.
        </p>
      </div>
      <div className="rectangle-2">
      <div className="pentagon-flipped light-theme"></div>
      <div className="pentagon-not-flipped light-theme"></div>
        <p className="second-heading">WHAT YOU TAKE BACK</p>
        <p className="para">
          Every time you win a race, or lose your voice cheering for your team, it adds up to your moments. We at Spardha make sure that you get an experience worth cherishing and some beautiful memories to treasure forever!
        </p>
      </div>
    </div>
    <div className="rectangle-3">
      <div className="pentagon-flipped light-theme"></div>
      <div className="left-section">
        <div className="sub-heading-1">GET IN TOUCH</div>
        <div className="sub-heading-2">SPARDHA UNLEASHING POTENTIAL</div>
        <div className="form-data">
          <input type="text" className="input" placeholder="NAME"/>
          <input type="text" className="input" placeholder="EMAIL" />
          <textarea type="text" className="input msg" placeholder="MESSAGE" />
          <button className="submit">SUBMIT</button>
        </div>
      </div>
      <div className="seperator-1"></div>
      {/* eslint-disable-next-line */}
      <img src={location_image} alt="image not found" className="right-section"/>
    </div>

  </div>;
};

export default About;
