import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useCurrentTheme } from '../../helpers/useCurrentTheme';
import { selectUser } from '../../redux/auth/auth-selectors';
import MenuIcon from './MenuIcon';
import UserInfo from './UserInfo/UserInfo';
import Sidebar from '../Sidebar/Sidebar';
import ThemeSelector from './ThemeSelector/ThemeSelector';
import styles from './header.module.css';

const Header = () => {
  const user = useSelector(selectUser);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { themeClassName } = useCurrentTheme();

  const handleToggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  return (
    <>
      <header className={`${styles.header} ${themeClassName}`}>
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
              <UserInfo user={user.message} />
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
