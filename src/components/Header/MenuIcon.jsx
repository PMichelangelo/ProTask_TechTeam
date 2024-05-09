import React from 'react';
import { useSelector } from 'react-redux';
import styles from './header.module.css';

import { selectTheme } from '../../redux/theme/theme-selectors';

const MenuIcon = () => {
  const currentTheme = useSelector(selectTheme);

  const themeClassMap = {
    theme_dark: styles.theme_dark,
    theme_light: styles.theme_light,
    theme_violet: styles.theme_violet,
  };

  const iconClassName = themeClassMap[currentTheme] || '';

  return (
    <svg
      className={`${styles.icon} ${iconClassName}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 12H21"
        stroke="#161616"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 6H21"
        stroke="#161616"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 18H21"
        stroke="#161616"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MenuIcon;
