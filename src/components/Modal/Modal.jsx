import css from "./modal.module.css"
import  sprite  from "../../images/icons.svg"
import { createPortal } from 'react-dom';
import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { selectTheme } from "../../redux/theme/theme-selectors";

const modalRoot = document.getElementById('modal-root');
const Modal = ({ isOpen, onClose, title, children }) => {

  const currentTheme = useSelector(selectTheme)

  const themeClassMap = {
    'theme_dark': css.theme_dark,
    'theme_light': css.theme_light,
    'theme_violet': css.theme_violet,
  };

  const screensPageTheme = themeClassMap[currentTheme] || '';

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
          <div className={`${css.modal_content} ${screensPageTheme}`}>
            <h2 className={css.titel}>{title}</h2>
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