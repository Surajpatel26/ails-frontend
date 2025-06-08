import React, { useEffect, useRef } from "react";
import styles from "./BackgroundSection.module.css"; // CSS module
import CourseCarousel from "./CourseCarousel";

const BackgroundSection = () => {
  const sectionRef = useRef();

  useEffect(() => {
    const section = sectionRef.current;

    // Set low-res blurred version first
    section.style.backgroundImage =
      "url('https://res.cloudinary.com/dkxp4qyhl/image/upload/f_auto,q_10,w_100/watersplash1_d3o8lj.webp')";
    section.style.backgroundSize = "cover";
    section.style.backgroundPosition = "center";

    // Load full-res version in background
    const fullImage = new Image();
    fullImage.src =
      "https://res.cloudinary.com/dkxp4qyhl/image/upload/f_auto,q_auto,w_1600/watersplash1_d3o8lj.webp";

    fullImage.onload = () => {
      section.style.backgroundImage = `url('${fullImage.src}')`;
    };
  }, []);

  return (
    <div className={styles.quenchBackgroundSection} ref={sectionRef}>
      <h1 className={styles.sectionTitle} style={{color:'white'}}>QUENCH YOUR THIRST</h1>
      <div className={styles.quenchTransparentOverlay}>
        <CourseCarousel />
      </div>
    </div>
  );
};

export default BackgroundSection;
