import styles from "./Location.module.css";

import { FaMapMarkerAlt } from 'react-icons/fa';

import "./extra.css"

const LocationCard = () => {

  return (

    <div className={styles.card}>

      <h2 className={styles.title}>
        LOCATION
        <FaMapMarkerAlt className={styles.locationIcon} />
      </h2>

      <div className={styles.content}>

        <div className={styles.imageContainer}>
          <img
            src="/images/general/electrical.png"
            alt="IIT BHU Building"
            width={500}
            height={350}
            className={styles.image}
          />
        </div>

        <div className={styles.details}>

          <div className={styles.addressBlock}>

            <h3 className={styles.addressTitle}>
              IIT (BHU), Varanasi
            </h3>

            <p className={styles.address}>
              A historic campus, iconic venues, and a
              city that knows how to make every
              occasion memorable.
            </p>

          </div>

          <a
            href="https://maps.app.goo.gl/Xkf8wT3ty3K53FMGA"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mapLink}
          >
            <button className={styles.mapButton}>
              <span className={styles.mapIcon}>⌖</span>
              <span>Map</span>
            </button>
          </a>

        </div>

      </div>

    </div>

  );
}

export default LocationCard;
