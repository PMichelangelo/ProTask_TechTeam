import css from "./modal.module.css"
import  sprite  from "../../images/icons.svg"
import { createPortal } from 'react-dom';
import React, { useEffect } from 'react';

const modalRoot = document.getElementById('modal-root');
const Modal = ({ isOpen, onClose, titel, children }) => {
  const closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      onClose(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', closeModal);
    return () => document.removeEventListener('keydown', closeModal);
  });

  return createPortal(
    <>
      {isOpen && (
        <div onClick={closeModal} className={css.modal_wraper}>
          <div className={css.modal_content}>
            <h2 className={css.titel}>{titel}</h2>
            <button className={css.btn_close} onClick={() => onClose(false)}>
            <svg  className={css.item_svg}>
             <use className={css.item_use}  href={`${sprite}#x-close-icon`}></use>
        </svg>
            </button>
            {children}
          </div>
        </div>
      )}
    </>,
    modalRoot
  );
};

export default Modal;