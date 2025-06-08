import React from "react";
import styles from "./CustomSection.module.css"; // Importing module CSS

const CustomSection = () => {
  return (
    <div className={styles.customSection}>
      <div className={styles.customContent}>
        <h1 style={{ color: "white" }} className={styles.customTitle}>
          Customize Your Course <span>Your Way!</span>
        </h1>
        <p className={styles.customDescription}>
          Explore tailored learning experiences designed just for you. Don’t
          wait—start your journey today!
        </p>
        <div className={styles.customButtons}>
          <a
            href="https://calendly.com/ytta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={`${styles.customBtn} ${styles.bookDemo}`}>
              Book a Free Demo
            </button>
          </a>{" "}
          <button className={`${styles.customBtn} ${styles.customizeCourse}`}>
            Customize Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomSection;
