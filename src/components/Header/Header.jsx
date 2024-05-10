import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/auth-selectors';
import { selectTheme } from '../../redux/theme/theme-selectors';
import MenuIcon from './MenuIcon';
import UserInfo from './UserInfo/UserInfo';
import Sidebar from '../Sidebar/Sidebar';
import ThemeSelector from './ThemeSelector/ThemeSelector';
import styles from './header.module.css';

const Header = () => {
  const user = useSelector(selectUser);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const currentTheme = useSelector(selectTheme);

  const themeClassMap = {
    theme_dark: styles.theme_dark,
    theme_light: styles.theme_light,
    theme_violet: styles.theme_violet,
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  const headerClassName = themeClassMap[currentTheme] || '';

  return (
    <>
      <header className={`${styles.header} ${headerClassName}`}>
        <button
          type="button"
          className={styles.button}
          onClick={handleToggleSidebar}
        >
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
      {isSidebarOpen && (
        <Sidebar setIsMenuOpen={setIsSidebarOpen} isMenuOpen={isSidebarOpen} />
      )}
    </>
  );
};

export default Header;
