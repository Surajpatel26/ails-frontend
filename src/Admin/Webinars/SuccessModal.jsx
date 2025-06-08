import React from "react";
import "./SuccessModal.css";

const SuccessModal = ({ message, onClose }) => {
  return (
    <div className="webinar-success-modal">
      <div className="webinar-modal-content">
        <p>{message}</p>
        <div className="webinar-modal-actions">
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
