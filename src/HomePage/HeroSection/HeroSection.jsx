import React, { useState, useEffect } from "react";
import styles from "./HeroSection.module.css"; // Import CSS Module
import { AiOutlineAppstoreAdd, AiOutlineLaptop, AiOutlineCloud } from "react-icons/ai"; // Custom icons
import heroImage1 from "../../assets/hero-image1.jpg"; // Adjust paths as needed
import heroImage2 from "../../assets/hero-image2.jpg";
import heroImage3 from "../../assets/hero-image3.jpg";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [heroImage1, heroImage2, heroImage3];
  const headings = [
    "Master Tomorrow’s Tech Today – Power Up with AI Learning Solutions!",
    "Explore Cutting-Edge Courses to Transform Your Career!",
    "Learn the Latest in Cloud, AI, and More!"
  ];
  const icons = [<AiOutlineAppstoreAdd />, <AiOutlineLaptop />, <AiOutlineCloud />];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === 2 ? 0 : prev + 1)); // Cycle through 3 images
    }, 3000);
    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div className={styles.heroSection}>
      <img src={images[currentIndex]} alt="Hero Background" className={styles.heroImage} />
      <div className={styles.heroOverlay}>
        {/* Carousel Heading */}
        <div className={styles.heroHeadingContainer}>
          <h1 className={styles.heroHeading}>{headings[currentIndex]}</h1>
        </div>
        <button className={styles.heroButton}>Explore our Courses!</button>
      </div>

      {/* Custom Icon for Each Image */}
      <div className={styles.iconContainer}>
        {icons[currentIndex]}
      </div>
    </div>
  );
};

export default HeroSection;
