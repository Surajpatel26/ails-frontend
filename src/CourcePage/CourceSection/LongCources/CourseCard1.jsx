import React from "react";
import styles from "./CourseCard.module.css";

const CourseCard = ({ course }) => {
  return (
    <div className={styles.courseCard}>
      <img src={course.image_url} alt="Course" className={styles.courseImage} />
      <div className={styles.courseDetails}>
        <p className={styles.courseDescription}>{course.description}</p>
        <p className={styles.courseDuration}>
          Duration: {course.duration || "N/A"}
        </p>
        <p className={styles.coursePrice}>
          Price: {course.price || "Free"}
        </p>
        <div className={styles.cardButtons}>
          <button className={styles.registerButton}>Register Now</button>
          <a
            href={course.poc_url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadLink}
          >
            <button className={styles.downloadButton}>Download POC</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
