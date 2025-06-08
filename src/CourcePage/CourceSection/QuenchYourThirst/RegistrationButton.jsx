import React, { useState } from "react";
import styles from "./RegisterButton.module.css";

const RegisterButton = ({ individualLink, groupLink }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Main Button */}
      <button className={styles.registerButton} onClick={() => setIsOpen(true)}>
        Register Now
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <h3>Select Registration Type</h3>

            <div className={styles.buttonGroup}>
              <a
                href={individualLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.modalButton}
              >
                Individual Registration
              </a>
              <a
                href={groupLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.modalButton}
              >
                Group Registration
              </a>
            </div>

            <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default RegisterButton;
