import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../redux/theme/theme-selectors';
import HeaderDashboard from './HeaderDashboard';
import MainDashboard from './MainDashboard';

import css from './screensPage.module.css';

const ScreensPage = () => {
  const { boardName } = useParams();
  const currentTheme = useSelector(selectTheme)

  const themeClassMap = {
    'theme_dark': css.theme_dark,
    'theme_light': css.theme_light,
    'theme_violet': css.theme_violet,
  };

  const screensPageTheme = themeClassMap[currentTheme] || '';


  return (
    <div className={`${css.screensPage} ${screensPageTheme}`}>
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
