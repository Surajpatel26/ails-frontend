import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./ContactUs.css"; // Ensure to create a separate CSS file for custom styles

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-us-header">
        <h1>Contact Us</h1>
        <p className="paragraph">Get in touch with AI Learning Solutions. We're here to assist you!</p>
      </div>

      <div className="contact-us-main">
        <div className="contact-details">
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <div>
              <h3>Phone</h3>
              <p>+91-9717428073
              </p>
            </div>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <div>
              <h3>Email</h3>
              <p>training@ailearningsolution.com
              </p>
            </div>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <h3>Address</h3>
              <p>IX/2121, Street No - 8, Kailash Nagar, Delhi - 110031</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>Contact Form</h2>
          <iframe
            width="640px"
            height="480px"
            src="https://forms.office.com/Pages/ResponsePage.aspx?id=CIucOnYmjEqmZbEylJ4-zvKBVJLcowNHpAJqsQIzQDZUQlE1VVA0UVM0TFlZMUFHSFhBQkNOOUhSTi4u&embed=true"
            frameborder="0"
            marginwidth="0"
            marginheight="0"
            style={{
              border: "none",
              maxWidth: "100%",
              maxHeight: "100vh",
            }}
            allowfullscreen
            webkitallowfullscreen
            mozallowfullscreen
            msallowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
