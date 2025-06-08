import React from "react";
import styles from "./ConfirmationModal.module.css"; // Import the CSS module

const ConfirmationModal = ({ message, onConfirm, onCancel }) => {
  console.log("Rendering ConfirmationModal"); // Debug log

  return (
    <div className={styles.confirmationModal}>  {/* Use CSS Module class names */}
      <div className={styles.modalContent}>
        <p>{message}</p>
        <div className={styles.modalActions}>
          <button onClick={onConfirm}>Confirm</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
