import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import "./HeaderStrip.css";

const HeaderStrip = () => {
  return (
    <div className="headerStrip">
      <div className="scroll-container">
        <span className="scroll-item companyName">AI LEARNING SOLUTION</span>
        <span className="scroll-item contactNumber">
          <AiOutlineMail className="emailIcon" /> training@ailearningsolution.com
        </span>
        <span className="scroll-item extraText">New courses available now! Check our latest programs!</span>
      </div>
    </div>
  );
};

export default HeaderStrip;
