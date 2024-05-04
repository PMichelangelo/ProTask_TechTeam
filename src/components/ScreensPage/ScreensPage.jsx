import HeaderDashboard from './HeaderDashboard';
import MainDashboard from './MainDashboard';

import css from './screensPage.module.css';

const ScreensPage = () => {
  return (
    <div className={css.screensPage}>
      <HeaderDashboard />
      <MainDashboard />
    </div>
  );
};

export default ScreensPage;
