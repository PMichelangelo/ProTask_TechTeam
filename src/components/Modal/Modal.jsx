import React, { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import CloseButton from './CloseButton/CloseButton';

import css from './modal.module.css';

const modalRoot = document.getElementById('modal-root');
const Modal = ({ isOpen, onClose, title, children }) => {
  const closeModal = useCallback(
    ({ target, currentTarget, code }) => {
      if (target === currentTarget || code === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', closeModal);

    return () => document.removeEventListener('keydown', closeModal);
  }, [closeModal]);

  return createPortal(
    <>
      {isOpen && (
        <div onClick={closeModal} className={css.modal_wrapper}>
          <div className={css.modal_content}>
            {title && <h2 className={css.titel}>{title}</h2>}

            <CloseButton onClose={onClose} />
            {children}
          </div>
        </div>
      )}
    </>,
    modalRoot
  );
};

export default Modal;
