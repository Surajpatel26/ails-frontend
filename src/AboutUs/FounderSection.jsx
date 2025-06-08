import React from "react";
import "./FounderSection.css";
import aboutImage2 from "../assets/shalinipic.jpg";
import badge1 from "../assets/badge1.png"; 
import badge2 from "../assets/badge2.png";
import badge3 from "../assets/badge3.png";
import badge4 from "../assets/badge4.png";
import badge5 from "../assets/badge5.png";
import badge6 from "../assets/badge6.png";
import badge7 from "../assets/badge7.png";
import badge8 from "../assets/badge8.png";

const FounderSection = () => {
  return (
    <div className="founder-section">
      {/* Left Side: Image */}
      <div className="founder-image">
        <img src={aboutImage2} alt="Founder - Shalini Gupta" />
      </div>

      {/* Right Side: Intro and Achievements */}
      <div className="founder-content">
        <div className="founder-text">
          <h1 className="founder-heading">Meet Our Founder</h1>
          <h2>Shalini Gupta</h2>
          <p className="founder-description">
            <strong>Shalini Gupta</strong> is a highly esteemed <strong>Microsoft Certified Trainer</strong> with 
            <strong> 19+ years of experience</strong> in IT training and consulting. She is an expert in 
            <strong> Microsoft Power Platform, Azure, Power BI, SQL Server, SharePoint, Office 365, AI, 
            and Business Intelligence</strong>. Her deep knowledge extends across programming languages, 
            big data analytics, machine learning, and cloud computing.
          </p>
          <p className="founder-description">
            As an industry leader, Shalini has trained thousands of professionals worldwide, helping 
            them gain expertise in cutting-edge technologies. She is passionate about delivering 
            <strong> hands-on, interactive training</strong> that empowers individuals to excel in their careers.
          </p>
          <p className="founder-description">
            Whether you're looking to <strong>upskill, achieve certification, or advance in tech</strong>, 
            her guidance ensures a strong foundation for success.
          </p>
        </div>

        {/* Achievements Section */}
        <div className="badges-section">
          <h2 className="badges-heading">Certifications & Recognitions</h2>
          <div className="badges-grid">
            <img src={badge1} alt="Microsoft Trainer Certification" />
            <img src={badge2} alt="Power BI Expert" />
            <img src={badge3} alt="Azure Cloud Specialist" />
            <img src={badge4} alt="SQL Server Professional" />
            <img src={badge5} alt="AI & ML Innovator" />
            <img src={badge6} alt="Office 365 Specialist" />
            <img src={badge7} alt="Big Data & Analytics" />
            <img src={badge8} alt="SharePoint Expert" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderSection;
