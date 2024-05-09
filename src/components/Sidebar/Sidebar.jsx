import CreateNewBoard from './CreateNewBoard/CreateNewBoard';
import LogoComponent from './LogoComponent/LogoComponent';
import BoardList from './BoardList/BoardList';
import Logout from './Logout/Logout';
import NeedHelp from './NeedHelp/NeedHelp';
import css from './sidebar.module.css';
import { useEffect, useRef } from 'react';

const Sidebar = ({ setIsMenuOpen, isMenuOpen }) => {
  const menuRef = useRef(null);

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

  return (
    <div className={isMenuOpen ? css.openSidebar : css.sidebar} ref={menuRef}>
      <div>
        <LogoComponent />
        <div className={css.myBoards}>
          <h3 className={css.myBoardsTitle}>My boards</h3>
          <CreateNewBoard />
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
