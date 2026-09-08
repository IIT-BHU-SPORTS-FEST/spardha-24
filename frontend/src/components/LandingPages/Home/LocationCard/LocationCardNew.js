import styles from "./LocationNew.module.css";

import { FaMapMarkerAlt } from 'react-icons/fa';

import "./extra.css"

const LocationCard = () => {

  return (

    <div className={styles.card}>

      {/* =====================================================
          PHASE ONE - ARTISTIC IIT BHU MAP
          ===================================================== */}

      <div className={styles.mapPhase}>

        <div className={styles.mapAtmosphere}></div>

        <div className={styles.mapGrid}></div>

        <div className={`${styles.mapRoad} ${styles.roadOne}`}></div>
        <div className={`${styles.mapRoad} ${styles.roadTwo}`}></div>
        <div className={`${styles.mapRoad} ${styles.roadThree}`}></div>
        <div className={`${styles.mapRoad} ${styles.roadFour}`}></div>
        <div className={`${styles.mapRoad} ${styles.roadFive}`}></div>

        <div className={`${styles.mapArea} ${styles.areaOne}`}></div>
        <div className={`${styles.mapArea} ${styles.areaTwo}`}></div>
        <div className={`${styles.mapArea} ${styles.areaThree}`}></div>
        <div className={`${styles.mapArea} ${styles.areaFour}`}></div>
        <div className={`${styles.mapArea} ${styles.areaFive}`}></div>

        <div className={`${styles.mapLabel} ${styles.labelTop}`}>
          IIT (BHU)
        </div>

        <div className={`${styles.mapLabel} ${styles.labelLeft}`}>
          Academic Area
        </div>

        <div className={`${styles.mapLabel} ${styles.labelRight}`}>
          Main Gate
        </div>

        <div className={`${styles.mapLabel} ${styles.labelBottom}`}>
          Varanasi
        </div>

        <div className={styles.mapMarker}>

          <div className={styles.markerOuter}></div>

          <div className={styles.markerPulse}></div>

          <FaMapMarkerAlt />

        </div>

        <div className={styles.mapCaption}>

          <span>LOCATING</span>

          <strong>IIT (BHU), VARANASI</strong>

        </div>

      </div>


      {/* =====================================================
          PHASE TWO - LOCATION CARD
          ===================================================== */}

      <div className={styles.cardContent}>

        <div className={styles.titleRow}>

          <div className={styles.titleAccent}></div>

          <h2 className={styles.title}>
            LOCATION
          </h2>

          <FaMapMarkerAlt className={styles.locationIcon} />

        </div>


        <div className={styles.content}>

          <div className={styles.imageContainer}>

            <div className={styles.imageGlow}></div>

            <div className={styles.imageCornerTop}></div>

            <div className={styles.imageCornerBottom}></div>

            <img
              src="/images/general/electrical.png"
              alt="IIT BHU Building"
              width={500}
              height={350}
              className={styles.image}
            />

            <div className={styles.imageBadge}>
              <span className={styles.badgeDot}></span>
              IIT BHU
            </div>

          </div>


          <div className={styles.details}>

            <div className={styles.addressBlock}>

              <h3 className={styles.addressTitle}>
                IIT (BHU), Varanasi
              </h3>

              <div className={styles.addressLine}></div>

              <p className={styles.address}>
                A historic campus, iconic venues, and a
                city that knows how to make every
                occasion memorable.
              </p>

            </div>


            <div className={styles.detailsBottom}>

              <div className={styles.locationMeta}>

                <span>
                  VARANASI
                </span>

                <span className={styles.metaDivider}>
                  /
                </span>

                <span>
                  UTTAR PRADESH
                </span>

              </div>


              <a
                href="https://maps.app.goo.gl/Xkf8wT3ty3K53FMGA"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapLink}
              >

                <button className={styles.mapButton}>

                  <span className={styles.mapIcon}>
                    ⌖
                  </span>

                  <span>
                    Open Map
                  </span>

                  <span className={styles.buttonArrow}>
                    →
                  </span>

                </button>

              </a>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default LocationCard;
