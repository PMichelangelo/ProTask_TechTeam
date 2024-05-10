import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/auth-selectors';
import { selectTheme } from '../../redux/theme/theme-selectors';
import MenuIcon from './MenuIcon';
import UserInfo from './UserInfo/UserInfo';
import styles from './header.module.css';

const Header = () => {
  const user = useSelector(selectUser);

  const headerClassName = themeClassMap[currentTheme] || '';

  return (
    <header className={styles.header}>
      <button type="button" className={styles.button}>
        <MenuIcon />
      </button>
      <div className={styles.headerContainer}>
        <ThemeSelector />

        {user && (
          <div className={styles.userInfo}>
            <UserInfo user={user} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
