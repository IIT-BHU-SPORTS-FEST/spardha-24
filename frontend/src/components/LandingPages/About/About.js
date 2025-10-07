import "./About.css"
import ImageMasonry from "./ImageMasonry";
import Footer from "../Footer/footer";
import bg_img from "./image.png"

const About = () => {
  return (
    <div className="bg-onset">
      <div 
        style={{
          backgroundImage: `url(${bg_img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed", 
          minHeight: "100vh",
          width: "100%"
        }}
      >
        <div className="top-div">
          <div className="pentagon-flipped dark-theme"></div>
          <div className="main-heading">
            ABOUT US
          </div>
          <div className="rectangle-1">
            <p className="para">
              Spardha is the annual sports festival of IIT (BHU), Varanasi. In its glorious history of over 39 years, Spardha has grown to become the largest and one of the most awaited sports festival of northern India where athletic competition is drawn from throughout the country. Each year, over a thousand participants compete in an array of sports like hockey, basketball, cricket, boxing, tennis and many more, creating a stunning spectacle of exceptional fervidness in athletic talent. The event, embraced by one of the best gatherings of celebrated sports personalities and spirited audience, has always enthused a zest for continuously scaling new zeniths in the pursuit of excellence and vibrancy among one and all. At present, Spardha has a team of over 500 and is also associated with numerous renowned firms and sports organizations. These exhilarating days have many resounding experiences for participants and supporters alike, creating a lifetime of memories. Gear up yourself to witness the thrilling and frolicsome SPARDHA.
            </p>
          </div>
          <div className="container-1">
            <div className="rectangle-2">
              <p className="second-heading">HYPE AROUND SPARDHA</p>
              <p className="para">
                For starters, 2025 will witness the 40th edition of Spardha, a festival which has grown from strength to strength ever since its inception. After all these successful editions, Spardha, today stands as the largest inter-collegiate sporting event of India.
              </p>
            </div>
            <div className="rectangle-2">
              <p className="second-heading">THE TALK OF THE TOWN</p>
              <p className="para">
                Each year thousands of participants at Spardha put their hard work to test in a vast array of sports. If this doesn't catch your attention, the bustle of 45,000 people on the campus streets surely will. Its them who make Spardha the festival it is.
              </p>
            </div>
            <div className="rectangle-2">
              <p className="second-heading">WHAT YOU TAKE BACK</p>
              <p className="para">
                Every time you win a race, or lose your voice cheering for your team, it adds up to your moments. We at Spardha make sure that you get an experience worth cherishing and some beautiful memories to treasure forever!
              </p>
            </div>
          </div>

          <div className="gallery">
            <div className="tag">Opening</div>
            <ImageMasonry folderName={"about-us-images"}/>
            <div className="tag">Team-Moments</div>
            <ImageMasonry folderName={"team"}/>
            <div className="tag">Badminton</div>
            <ImageMasonry folderName={"badminton"}/>
            <div className="tag">Basketball</div>
            <ImageMasonry folderName={"basketball"}/>
            <div className="tag">Boxing</div>
            <ImageMasonry folderName={"boxing"}/>
            <div className="tag">Chess</div>
            <ImageMasonry folderName={"chess"}/>
            <div className="tag">Football</div>
            <ImageMasonry folderName={"football"}/>
            <div className="tag">Hockey</div>
            <ImageMasonry folderName={"hockey"}/>
            <div className="tag">Cricket</div>
            <ImageMasonry folderName={"cricket"}/>
            <div className="tag">Volleyball</div>
            <ImageMasonry folderName={"volleyball"}/>
            <div className="tag">Athletics</div>
            <ImageMasonry folderName={"athletics"}/>
            <div className="tag">Handball</div>
            <ImageMasonry folderName={"handball"}/>
            <div className="tag">Aquatics</div>
            <ImageMasonry folderName={"aquatics"}/>
            <div className="tag">Taekwondo</div>
            <ImageMasonry folderName={"taekwondo"}/>
            <div className="tag">Khokho</div>
            <ImageMasonry folderName={"khokho"}/>
            <div className="tag">Powerlifting</div>
            <ImageMasonry folderName={"powerlifting"}/>
            <div className="tag">Closing</div>
            <ImageMasonry folderName={"closing"}/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;