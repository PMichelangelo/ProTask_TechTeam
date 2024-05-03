import AddColumn from './AddColumn';
import ColumnList from './ColumnList';

import css from './mainDashboard.module.css';

const MainDashboard = () => {
  return (
    <section className={css.mainDashboardSection}>
      <ColumnList />
      <AddColumn />
    </section>
  );
};

export default MainDashboard;
