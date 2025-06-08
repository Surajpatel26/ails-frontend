import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./WebinarCard.module.css";

const WebinarCard = () => {
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
          setError(response.data.message || "No webinars available.");
        }
      } catch (error) {
        setError("Error fetching webinars.");
        console.error("API Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWebinars();
  }, []);

  if (loading) {
    return <p className={styles.loading}>Loading webinars...</p>;
  }

  if (error) {
    return <p className={styles.error}>{error}</p>;
  }

  return (
    <div className={styles.webinarSection}>
      <h1>Upcoming Webinars</h1>
      <div className={styles.webinarGrid}>
        {webinars.length === 0 ? (
          <p>No webinars available.</p>
        ) : (
          webinars.map((webinar) => (
            <div key={webinar.webinar_id} className={styles.webinarCard}>
              {/* Image Section */}
              <div className={styles.webinarImage}>
                <img src={webinar.image_url} alt={webinar.title} />
              </div>

              {/* Title and Description */}
              <div className={styles.webinarContent}>
                <h2>{webinar.title}</h2>
                <p className={styles.description}>{webinar.description}</p>
              </div>

              {/* Webinar Details */}
              <div className={styles.webinarDetails}>
                <span className={styles.upcoming}>UPCOMING</span>
                <p>
                  {new Date(webinar.launch_date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
                <p>
                  {new Date(webinar.launch_date).toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}{" "}
                  IST
                </p>
                <p>Duration: 1 Hour</p>
              </div>

              {/* Register Button */}
              <div className={styles.registerButtonWrapper}>
                <a
                  href="https://forms.office.com/Pages/ResponsePage.aspx?id=CIucOnYmjEqmZbEylJ4-zvKBVJLcowNHpAJqsQIzQDZUOFlQWFJOOEVHM0xOMDNDQVNDTDVMTEkzVy4u&embed=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.registerBtn}
                >
                  Register Now
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default WebinarCard;
