import AddColumn from './AddColumn/AddСolumn';
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
