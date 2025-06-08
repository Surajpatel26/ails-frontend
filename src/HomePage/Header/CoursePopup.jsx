import React, { useState } from "react";
import styles from "./CoursePopup.module.css";
import RegisterButton from "../../CourcePage/CourceSection/QuenchYourThirst/RegistrationButton";

const CoursePopup = ({ course, onClose }) => {
  if (!course) return null;
  const [currency, setCurrency] = useState("INR");
  const exchangeRate = 83; // 1 USD = 83 INR

  const basePrice = Number(course.price) || 0;
  const priceWithGST = basePrice + basePrice * 0.18;
  const priceInUSD = (priceWithGST / exchangeRate).toFixed(2);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        {/* Close Button */}
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>

        {/* Course Image */}
        <img src={course.image_url} alt={course.title} className={styles.courseImage} />

        {/* Course Details */}
        <div className={styles.modalBody}>
          <h2 className={styles.courseTitle}>{course.title}</h2>
          <p className={styles.courseDescription}>
            <strong>Description:</strong> {course.description}
          </p>

          {/* Price with Currency Toggle */}
          <p className={styles.price}>
            {currency === "INR"
              ? `₹${basePrice} + 18% GST = ₹${priceWithGST.toFixed(2)}`
              : `$${priceInUSD} USD`}
          </p>

          <button className={styles.currencyToggle} onClick={() => setCurrency(currency === "INR" ? "USD" : "INR")}>
            Show in {currency === "INR" ? "USD" : "INR"}
          </button>
        </div>

        {/* Action Buttons */}
        <div className={styles.modalButtons}>
          <RegisterButton
          individualLink="https://forms.office.com/Pages/ResponsePage.aspx?id=CIucOnYmjEqmZbEylJ4-zvKBVJLcowNHpAJqsQIzQDZUMVFFTkgxME5OM1owMkYwWU5ETzlBVElDSS4u&embed=true" 
          groupLink="https://forms.office.com/Pages/ResponsePage.aspx?id=CIucOnYmjEqmZbEylJ4-zvKBVJLcowNHpAJqsQIzQDZUMDdWSjZOWkdMMDIxOVM2T0w0TEVWUVNFTi4u&embed=true" 
          />
          <a href={course.poc_url || "#"} target="_blank" rel="noopener noreferrer" className={styles.modalButton}>
            Download TOC
          </a>
          <a href="/training-menu" className={`${styles.modalButton} ${styles.explore}`}>
            Explore More
          </a>
        </div>
      </div>
    </div>
  );
};

export default CoursePopup;
