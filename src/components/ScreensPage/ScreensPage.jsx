import { useParams } from 'react-router-dom';

import HeaderDashboard from './HeaderDashboard';
import MainDashboard from './MainDashboard';

import css from './screensPage.module.css';

const ScreensPage = () => {
  const { boardName } = useParams();

  return (
    <div className={css.screensPage}>
      <HeaderDashboard boardName={boardName} />
      {boardName ? (
        <MainDashboard />
      ) : (
        <div className={css.noDashboardWrap}>
          <p className={css.noDashboardText}>
            Before starting your project, it is essential{' '}
            <span className={css.createDashboardText}>to create a board</span>{' '}
            to visualize and track all the necessary tasks and milestones. This
            board serves as a powerful tool to organize the workflow and ensure
            effective collaboration among team members.
          </p>
        </div>
      )}
    </div>
  );
};

export default ScreensPage;
