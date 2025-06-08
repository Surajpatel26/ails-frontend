import React, { useEffect, useState } from "react";
import "./Youtube.css";
import youtube from "../../assets/youtube.png"; // YouTube logo
import yttaLogo from "../../assets/yttalogo.png"; // YTTA Learning channel logo
import aiLogo from "../../assets/AILI-LOGO.png"; // AI Learning Solutions channel logo

const Youtube = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    const section = document.querySelector(".youtube-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <div
      className={`youtube-section ${isInView ? "in-view" : "out-of-view"}`}
    >
      <h2 className="youtube-heading">CHECK OUT OUR YOUTUBE CHANNELS</h2>

      <div className="youtube-content">
        {/* YTTA Learning */}
        <div className="channel-info">
          <img
            src={yttaLogo}
            alt="YTTA Learning Logo"
            className="channel-logo"
          />
          <h3 className="channel-name">YTTA Learning</h3>
          <a
            href="https://www.youtube.com/@yttalearning"
            target="_blank"
            rel="noopener noreferrer"
            className="subscribe-button"
          >
            <img className="youtube-icon" src={youtube} alt="YouTube Icon" />
            Subscribe
          </a>
        </div>

        <div className="video-preview">
          <iframe
            className={`video ${isInView ? "loaded" : ""}`}
            src="https://www.youtube.com/embed/JwMyZ8bROAk?si=0L-6FGR6kZsMOQD2"
            title="YTTA Learning Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            className={`video ${isInView ? "loaded" : ""}`}
            src="https://www.youtube.com/embed/BEisCgLAw1M?si=nKjmKo7gP5SxlhqT"
            title="YTTA Learning Video 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* AI Learning Solutions */}
        <div className="channel-info">
          <img
            src={aiLogo}
            alt="AI Learning Solutions Logo"
            className="channel-logo"
          />
          <h3 className="channel-name">AI Learning Solutions</h3>
          <a
            href="https://www.youtube.com/@aiLearningSolutions/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="subscribe-button"
          >
            <img className="youtube-icon" src={youtube} alt="YouTube Icon" />
            Subscribe
          </a>
        </div>

        <div className="video-preview">
          <iframe
            className={`video ${isInView ? "loaded" : ""}`}
            src="https://www.youtube.com/embed/Zx64tM6OwNU?si=V8Mbrh9X4WAUamQj"
            title="AI Learning Solutions Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            className={`video ${isInView ? "loaded" : ""}`}
            src="https://www.youtube.com/embed/ZRxDaSaQa1A?si=TIbTIauVoY4cy803"
            title="AI Learning Solutions Video 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
