import React from "react";
import styles from "./OfferingsCard.module.css"; // Import CSS Module

const OfferingsCard = ({ offering, animationType }) => {
  return (
    <div className={`${styles.offeringsCard} ${styles[animationType]}`}>
      <img
        src={offering.image}
        alt={offering.title}
        className={styles.cardImage}
      />
      <div className={styles.cardContent}>
        <h3>{offering.title}</h3>
      </div>
    </div>
  );
};

export default OfferingsCard;
