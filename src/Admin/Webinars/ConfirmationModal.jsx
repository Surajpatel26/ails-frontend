import React from "react";
import "./ConfirmationModal.css";

const ConfirmationModal = ({ message, onConfirm, onCancel }) => {
  console.log("Rendering ConfirmationModal"); // Debug log

  return (
    <div className="confirmation-modal">
      <div className="modal-content">
        <p>{message}</p>
        <div className="modal-actions">
          <button onClick={onConfirm}>Confirm</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
