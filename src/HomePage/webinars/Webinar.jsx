import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "primereact/carousel"; // Import PrimeReact Carousel
import "primereact/resources/themes/lara-light-indigo/theme.css"; // Import PrimeReact theme
import "primereact/resources/primereact.min.css"; // Import PrimeReact core styles
import "primeicons/primeicons.css"; // Import PrimeIcons
import styles from "./Webinar.module.css";

const Webinars = () => {
  const [webinars, setWebinars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWebinars = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/webinars");
        if (response.data.success) {
          setWebinars(response.data.webinars);
        } else {
          setError("No webinars available.");
        }
      } catch (err) {
        setError("Failed to load webinars.");
        console.error("API Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchWebinars();
  }, []);

  if (loading)
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p>Loading webinars...</p>
      </div>
    );

  if (error) return <p className={styles.error}>{error}</p>;

  const webinarTemplate = (webinar) => {
    return (
      <div className={styles.webinarCard}>
        <div className={styles.imageContainer}>
          <img
            src={webinar.image_url}
            alt={webinar.title}
            className={styles.webinarImage}
            loading="lazy"
          />
        </div>
        <div className={styles.webinarDetails}>
          <h3 className={styles.webinarTitle}>{webinar.title}</h3>
          <p className={styles.webinarDescription}>
            {webinar.description.length > 100
              ? webinar.description.substring(0, 100) + "..."
              : webinar.description}
          </p>
          <button className={styles.registerButton}>Register</button>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.webinarsSection}>
      <h2 className={styles.webinarsHeading}>UPCOMING WEBINARS</h2>

      <Carousel
        value={webinars}
        itemTemplate={webinarTemplate}
        numVisible={3}
        circular
        autoplayInterval={5000}
        responsiveOptions={[
          {
            breakpoint: "1024px",
            numVisible: 2,
          },
          {
            breakpoint: "600px",
            numVisible: 1,
          },
        ]}
        className={styles.webinarCarousel}
      />

      <button className={styles.exploreButton}>Explore All</button>
    </div>
  );
};

export default Webinars;
