import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/auth-selectors';
import MenuIcon from './MenuIcon';
import ThemeSelector from './ThemeSelector';
import UserInfo from './UserInfo/UserInfo';
import Sidebar from '../Sidebar/Sidebar';

import styles from './header.module.css';

const Header = () => {
  const user = useSelector(selectUser);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  return (
    <>
      <header className={styles.header}>
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
