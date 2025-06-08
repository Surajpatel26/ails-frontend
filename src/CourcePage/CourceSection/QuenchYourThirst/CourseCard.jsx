import React, { useState } from "react";
import styles from "./CourseCard.module.css";
import RegisterButton from "./RegistrationButton";

const CourseCard = ({ course }) => {
  const [currency, setCurrency] = useState("INR");
  const exchangeRate = 83;

  // Truncate long descriptions
  const MAX_DESCRIPTION_LENGTH = 100;
  const description = course.description.length > MAX_DESCRIPTION_LENGTH
    ? `${course.description.substring(0, MAX_DESCRIPTION_LENGTH)}...`
    : course.description;

  const basePrice = Number(course.price) || 0;
  const priceWithGST = basePrice + basePrice * 0.18;
  const priceInUSD = (priceWithGST / exchangeRate).toFixed(2);

  return (
    <div className={styles.courseCard}>
      <div className={styles.imageContainer}>
        <img 
          src={course.image_url} 
          alt={course.title || "Course"} 
          className={styles.courseImage} 
          loading="lazy"
        />
      </div>
      <div className={styles.courseDetails}>
        <h3 className={styles.courseTitle}>{course.title}</h3>
        <div className={styles.descriptionContainer}>
          <p className={styles.courseDescription}>{description}</p>
        </div>

        <div className={styles.priceContainer}>
          <p className={styles.coursePrice}>
            {currency === "INR"
              ? `₹${basePrice} + 18% GST = ₹${priceWithGST.toFixed(2)}`
              : `$${priceInUSD} USD`}
          </p>
          <button
            className={styles.toggleButton}
            onClick={() => setCurrency(currency === "INR" ? "USD" : "INR")}
            aria-label={`Toggle currency to ${currency === "INR" ? "USD" : "INR"}`}
          >
            {currency === "INR" ? "$" : "₹"}
          </button>
        </div>

        <div className={styles.cardButtons}>
          <RegisterButton
            individualLink="https://forms.office.com/Pages/ResponsePage.aspx?id=CIucOnYmjEqmZbEylJ4-zvKBVJLcowNHpAJqsQIzQDZUMVFFTkgxME5OM1owMkYwWU5ETzlBVElDSS4u&embed=true"
            groupLink="https://forms.office.com/Pages/ResponsePage.aspx?id=CIucOnYmjEqmZbEylJ4-zvKBVJLcowNHpAJqsQIzQDZUMDdWSjZOWkdMMDIxOVM2T0w0TEVWUVNFTi4u&embed=true"
          />
          <a
            href={course.poc_url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadLink}
          >
            <button className={styles.downloadButton}>
              <span className={styles.buttonText}>Download TOC</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;