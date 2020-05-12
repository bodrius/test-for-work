import React from "react";

const Modal = ({closeModal}) => {
  return (
    
    <div className="modal-container">
      <div className="modal-container__box">
        <span className="modal-container__caption">Congratulations</span>
        <button onClick={() => closeModal()} className="modal-container__close-btn">
          x
        </button>
        <span className="modal-container__description">
          You have successfully passed the registration
        </span>
        <button onClick={() => closeModal()} className="modal-container__btn-great">
          Great
        </button>
      </div>
    </div>
  );
};

export default Modal;
