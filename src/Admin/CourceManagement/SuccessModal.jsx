import React from "react";
import styles from "./SuccessModal.module.css"; // Update to use CSS modules

const SuccessModal = ({ message, onClose }) => {
  return (
    <div className={styles.successModal}>
      <div className={styles.modalContent}>
        <p>{message}</p>
        <div className={styles.modalActions}>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
