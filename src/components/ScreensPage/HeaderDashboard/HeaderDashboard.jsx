import Filters from './Filters';

import css from './headerDashboard.module.css';

const HeaderDashboard = ({ boardName }) => {
  return (
    <section className={css.headerDashboardSection}>
      <h3 className={css.titleDashboard}>{boardName}</h3>
      <Filters />
    </section>
  );
};

export default HeaderDashboard;
