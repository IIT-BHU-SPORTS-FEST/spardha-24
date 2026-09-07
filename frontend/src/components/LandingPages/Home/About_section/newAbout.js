import { useEffect, useRef } from "react";
import styles from "./newAbout.module.css";
import "./newAbout2.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const statsRef = useRef([]);

  useEffect(() => {
    statsRef.current.forEach((el, idx) => {
      const endValues = [21, 250, 45000, 475000];
      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: endValues[idx],
          duration: 2,
          ease: "power1.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "restart pause resume reset",
          },
          snap: { innerText: 1 },
          onUpdate: function () {
            el.innerText = Math.floor(el.innerText).toLocaleString();
          },
        }
      );
    });
  }, []);

  return (
    <section className={styles.about}>
      <div className={styles.cardContainer}>
        {/* Left Card: About Us */}
        <div className={styles.card}>
          <h2 className={styles.heading}>ABOUT US</h2>
          <p className={styles.subHeadingTop}>Built for the ones who compete.</p>
          <p className={styles.description}>
            Spardha, the annual sports fest of IIT BHU, is a celebration of passion, endurance, and teamwork. Bringing together athletes from across the country, it stands as one of the largest student-organized sports festivals in India. With a perfect blend of competition and camaraderie, Spardha provides a platform where talent meets opportunity, inspiring participants to push their limits and embrace the true spirit of sportsmanship. (placeholder text)
          </p>
          
          <h2 className={styles.headingSmall}>WHAT TO EXPECT?</h2>
          <p className={styles.subHeadingBottom}>More than just a tournament.</p>
          <p className={styles.description}>
            "At Spardha, expect electrifying competitions, thrilling matches, and a vibrant atmosphere filled with energy and enthusiasm. From intense sporting clashes to fun-filled events, the fest offers something for everyone. Witness unmatched talent, cheer for your favorites, and experience the spirit of sportsmanship like never before." (placeholder text)
          </p>
        </div>

        {/* Right Card: Stats */}
        <div className={styles.card}>
          <h2 className={styles.heading}>STATS</h2>
          <div className={styles.statsWrapper}>
            <div className={styles.statItem}>
              <h3 ref={el => statsRef.current[0] = el}>21</h3>
              <p>Events</p>
            </div>
            <div className={styles.statItem}>
              <h3 ref={el => statsRef.current[1] = el}>250</h3>
              <p>REG. Colleges</p>
            </div>
            <div className={styles.statItem}>
              <h3 ref={el => statsRef.current[2] = el}>45000</h3>
              <p>Footfall</p>
            </div>
            <div className={styles.statItem}>
              <h3 ref={el => statsRef.current[3] = el}>475000</h3>
              <p>Reach</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}