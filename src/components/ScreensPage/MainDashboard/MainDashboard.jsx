import AddColumn from './AddColumn/AddСolumn';
import ColumnList from './ColumnList';

import css from './mainDashboard.module.css';

const MainDashboard = ({ boardId }) => {
  return (
    <section className={css.mainDashboardSection}>
      <ColumnList />
      <AddColumn boardId={boardId} />
    </section>
  );
};

export default MainDashboard;
