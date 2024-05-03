import { useParams } from 'react-router-dom';

import Filters from './Filters';
import css from './headerDashboard.module.css';

const HeaderDashboard = () => {
  const { boardName } = useParams();

  return (
    <section className={css.headerDashboardSection}>
      <h3 className={css.titleDashboard}>{boardName}</h3>
      <Filters />
    </section>
  );
};

export default HeaderDashboard;
