import React from "react";
import styles from "./Modal.module.css";

const Modal = ({closeModal}) => {
  return (
    
    <div className={styles.modalBackdrop}>
      <div className={styles.modalBox}>
        <span className={styles.modalCaption}>Congratulations</span>
        <button onClick={() => closeModal()} className={styles.modalClose}>
          x
        </button>
        <span className={styles.modalDescription}>
          You have successfully passed the registration
        </span>
        <button onClick={() => closeModal()} className={styles.modalGreatBtn}>
          Great
        </button>
      </div>
    </div>
  );
};

export default Modal;
