import CreateNewBoard from './CreateNewBoard/CreateNewBoard';
import LogoComponent from './LogoComponent/LogoComponent';
import BoardList from './BoardList/BoardList';
import Logout from './Logout/Logout';
import NeedHelp from './NeedHelp/NeedHelp';

import CurrentTheme from '../../shared/components/CurrentTheme/CurrentTheme';

import css from './sidebar.module.css';

import { useSelector } from 'react-redux';
import { selectTheme } from '../../redux/theme/theme-selectors';
import { useEffect, useRef } from 'react';

const Sidebar = ({ setIsMenuOpen, isMenuOpen }) => {
  const menuRef = useRef(null);
  const currentTheme = useSelector(selectTheme);

  const handleClickOutside = event => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      window.innerWidth < 1440
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const themeClassMap = {
    dark: css.theme_dark,
    light: css.theme_light,
    violet: css.theme_violet,
  };

  const sidebarTheme = themeClassMap[currentTheme] || '';

  return (
    <div
      className={
        isMenuOpen ? css.openSidebar : `${css.sidebar} ${sidebarTheme}`
      }
      ref={menuRef}
    >
      <div>
        <LogoComponent />
        <div className={css.myBoards}>
          <h3 className={css.myBoardsTitle}>My boards</h3>
          <CurrentTheme>
            <CreateNewBoard />
          </CurrentTheme>
          <BoardList />
        </div>
      </div>
      <div className={css.needHelpLogout}>
        <NeedHelp />
        <Logout />
      </div>
    </div>
  );
};
export default Sidebar;
