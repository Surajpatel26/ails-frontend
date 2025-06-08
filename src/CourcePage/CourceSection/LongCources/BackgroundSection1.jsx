import React, { useEffect, useRef } from "react";
import styles from "./BackgroundSection.module.css";
import CourseCarousel from "./CourseCarousel1";

const BackgroundSection = () => {
  const sectionRef = useRef();

  useEffect(() => {
    const section = sectionRef.current;

    // 1. Set low-res preview (fast & blurred)
    section.style.backgroundImage =
      "url('https://res.cloudinary.com/dkxp4qyhl/image/upload/f_auto,q_10,w_100/long-bg1_zz0pfl.webp')";
    section.style.backgroundSize = "cover";
    section.style.backgroundPosition = "center";

    // 2. Load high-res version behind the scenes
    const fullImage = new Image();
    fullImage.src =
      "https://res.cloudinary.com/dkxp4qyhl/image/upload/f_auto,q_auto,w_1600/long-bg1_zz0pfl.webp";

    fullImage.onload = () => {
      section.style.backgroundImage = `url('${fullImage.src}')`;
    };
  }, []);

  return (
    <div className={styles.quenchBackgroundSection} ref={sectionRef}>
      <h1 className={styles.sectionTitle} style={{color:'white'}}>BECOME A PRO WITH US</h1>
      <div className={styles.quenchTransparentOverlay}>
        <CourseCarousel />
      </div>
    </div>
  );
};

export default BackgroundSection;
