import CreateNewBoard from './CreateNewBoard/CreateNewBoard';
import LogoComponent from './LogoComponent/LogoComponent';
import BoardList from './BoardList/BoardList';
import Logout from './Logout/Logout';
import NeedHelp from './NeedHelp/NeedHelp';
import css from './sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={css.sidebar}>
      <LogoComponent />
      <div className={css.myBoards}>
        <h3>My boards</h3>
        <CreateNewBoard />
        <BoardList />
      </div>
      <NeedHelp />
      <Logout />
    </div>
  );
};

export default Sidebar;
