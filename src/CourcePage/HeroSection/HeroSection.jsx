import React from "react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroHeading} style={{color : "white"}}>
          Unlock Your Potential with <span>AI-Powered Learning</span>
        </h1 >
        <p className={styles.heroSubheading}>
          Discover expert-led courses designed to elevate your skills and transform your career.
        </p>
        <button className={styles.heroButton}>Explore Courses</button>
      </div>
      <div className={styles.heroGlow}></div>
    </div>
  );
};

export default HeroSection; 