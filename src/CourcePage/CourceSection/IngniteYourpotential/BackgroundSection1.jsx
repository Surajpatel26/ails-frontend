import React, { useEffect, useRef } from "react";
import styles from "./BackgroundSection.module.css";
import CourseCarousel from "./CourseCarousel1";

const BackgroundSection = () => {
  const sectionRef = useRef();

  useEffect(() => {
    const section = sectionRef.current;

    // First, set a low-res blurred background
    section.style.backgroundImage =
      "url('https://res.cloudinary.com/dkxp4qyhl/image/upload/f_auto,q_10,w_100/fire1_jd6t7o.webp')";
    section.style.backgroundSize = "cover";
    section.style.backgroundPosition = "center";

    // Load the high-res version in the background
    const fullImage = new Image();
    fullImage.src =
      "https://res.cloudinary.com/dkxp4qyhl/image/upload/f_auto,q_auto,w_1600/fire1_jd6t7o.webp";
    fullImage.onload = () => {
      // Replace with high-quality image once loaded
      section.style.backgroundImage = `url('${fullImage.src}')`;
    };
  }, []);

  return (
    <div className={styles.quenchBackgroundSection} ref={sectionRef}>
      <div className={styles.quenchOverlayLayer}></div> {/* Overlay here */}
      <h1 className={styles.sectionTitle} style={{color:'white'}}>IGNITE YOUR SKILLS</h1>
      <div className={styles.quenchTransparentOverlay}>
        <CourseCarousel />
      </div>
    </div>
  );
};

export default BackgroundSection;
