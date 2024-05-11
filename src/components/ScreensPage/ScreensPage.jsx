import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import HeaderDashboard from './HeaderDashboard';
import MainDashboard from './MainDashboard';

import {
  fetchAllDashboards,
  fetchOneDashboard,
} from '../../redux/dashboards/dashboards-operations';
import { selectDashboards } from '../../redux/dashboards/dashboards-selectors';
import { selectTheme } from '../../redux/theme/theme-selectors';

import css from './screensPage.module.css';

const ScreensPage = () => {
  const dispatch = useDispatch();

  const [boardId, setBoardId] = useState('');

  const { boardName } = useParams();

  const currentTheme = useSelector(selectTheme);
  const boards = useSelector(selectDashboards);

  useEffect(() => {
    const currentBoard = boards.find(({ title }) => title === boardName);
    if (currentBoard) {
      const id = currentBoard._id;
      setBoardId(id);
      dispatch(fetchOneDashboard(id));
    }
  }, [dispatch, boardName, boards]);

  useEffect(() => {
    dispatch(fetchAllDashboards());
  }, [dispatch]);

  //   const Board = {
  //   "title": "",
  //   "icon": "",
  //   "background": ""
  // }

  //   const Column = {
  //   "title": ""
  //  }

  // const Task = {
  // "title": "",
  // "description": "",
  // "color": "",
  // "deadline": ""
  // }

  const themeClassMap = {
    dark: css.theme_dark,
    light: css.theme_light,
    violet: css.theme_violet,
  };

  const screensPageTheme = themeClassMap[currentTheme] || '';

  return (
    <div className={`${css.screensPage} ${screensPageTheme}`}>
      <HeaderDashboard boardName={boardName} />
      {boardName ? (
        <MainDashboard boardId={boardId} />
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
