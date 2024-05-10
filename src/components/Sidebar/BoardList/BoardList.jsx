import { useSelector, useDispatch } from 'react-redux';

import { selectDashboards } from '../../../redux/dashboards/dashboards-selectors';
import { fetchOneDashboard } from '../../../redux/dashboards/dashboards-operations';

import css from './boardList.module.css';

const BoardList = () => {
  const dispatch = useDispatch();
  const dashboards = useSelector(selectDashboards);

  const onClick = () => {
    dispatch(fetchOneDashboard());
  };

  return (
    <ul className={css.boardList}>
      {dashboards.map(board => {
        return (
          <li key={board._id}>
            <button className={css.boardBtn} onClick={onClick}>
              {board.title}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default BoardList;
