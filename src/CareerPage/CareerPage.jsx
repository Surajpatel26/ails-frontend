import React from "react";
import "./CareerPage.css";
import careerImage from "../assets/career.jpg";
import Header from "../HomePage/Header/Header";
import Footer from "../HomePage/footer/Footer";

const CareerPage = () => {
  return (
    <>
      <Header />
      <div className="career-container">
        <h1 className="career-heading">Join Us</h1>
        <p className="career-text">
          At <strong>Ai Learning Solution</strong>, we believe in fostering a culture of innovation, collaboration, and growth.
          Our team consists of passionate professionals who are dedicated to pushing boundaries and achieving excellence.
          Join us and be a part of an inspiring workplace that values creativity, inclusivity, and career progression.
        </p>
        
        <div className="career-image-container">
          <img src={careerImage} alt="Career Opportunities" className="career-image" />
        </div>

        <p className="career-subtext">We're looking for talented individuals to join our dynamic team. Check out our open positions and apply today!</p>

        <div className="career-benefits">
          <h2>Why Work With Us?</h2>
          <ul>
            <li>🌟 Competitive Salary & Benefits</li>
            <li>📚 Continuous Learning & Development</li>
            <li>🌍 Flexible Work Environment</li>
            <li>🤝 Inclusive & Supportive Culture</li>
          </ul>
        </div>

        <iframe 
          className="career-iframe"
          src="https://forms.office.com/Pages/ResponsePage.aspx?id=CIucOnYmjEqmZbEylJ4-zvKBVJLcowNHpAJqsQIzQDZUOFlQWFJOOEVHM0xOMDNDQVNDTDVMTEkzVy4u&embed=true" 
          title="Job Application"
          allowFullScreen
        ></iframe>
      </div>
      <Footer />
    </>
  );
};

export default CareerPage;
