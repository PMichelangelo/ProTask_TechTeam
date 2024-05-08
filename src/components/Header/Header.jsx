import React from 'react';
import MenuIcon from './MenuIcon';
import ThemeSelector from './ThemeSelector';

import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <button type="buttom" className={styles.button}>
        <MenuIcon />
      </button>
      <ThemeSelector />
    </header>
  );
};

export default Header;
