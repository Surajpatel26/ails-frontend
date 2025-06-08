import React from "react";
import { motion } from "framer-motion";
import styles from "./AboutSection.module.css";
import robotImage from "../../assets/aboutus-image.png";

const AboutSection = () => {
  return (
    <motion.div
      className={styles.homepageAboutSection}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className={styles.aboutContent}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.homeAboutHeading}>About AI Learning Solutions</h2>
        <p className={styles.aboutText}>
          <strong>AI Learning Solutions</strong> is a premier
          <strong> e-learning platform</strong> dedicated to
          <strong> Microsoft technologies</strong>, including
          <strong> Power BI, Azure, and cloud computing</strong>.
        </p>
        <p className={styles.aboutText}>
          Our <strong>expert-led courses</strong> are tailored for
          <strong> beginners to advanced learners</strong>, ensuring
          hands-on experience with <strong>real-world projects</strong>.
        </p>
        <motion.button
          className={styles.aboutButton}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Know More...
        </motion.button>
      </motion.div>

      <motion.div
        className={styles.homeAboutImage}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className={styles.lightRays}></div>
        <motion.img
          src={robotImage}
          alt="AI-powered learning innovation"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
      </motion.div>
    </motion.div>
  );
};

export default AboutSection;
