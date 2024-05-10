import React, { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

import css from './modal.module.css';
import sprite from '../../images/icons.svg';

const modalRoot = document.getElementById('modal-root');
const Modal = ({ isOpen, onClose, title, children }) => {
  const closeModal = useCallback(
    ({ target, currentTarget, code }) => {
      if (target === currentTarget || code === 'Escape') {
        onClose(false);
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', closeModal);

    return () => document.removeEventListener('keydown', closeModal);
  });

  return createPortal(
    <>
      {isOpen && (
        <div onClick={closeModal} className={css.modal_wraper}>
          <div className={css.modal_content}>
            <h2 className={css.titel}>{title}</h2>

            <button className={css.btn_close} onClick={() => onClose(false)}>
              <svg className={css.item_svg}>
                <use
                  className={css.item_use}
                  href={`${sprite}#x-close-icon`}
                ></use>
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
