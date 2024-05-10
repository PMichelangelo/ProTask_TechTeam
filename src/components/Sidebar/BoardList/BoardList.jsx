import { useSelector } from 'react-redux';

import { selectDashboards } from '../../../redux/dashboards/dashboards-selectors';

import css from './boardList.module.css';
import BoardListItem from './BoardListItem/BoardListItem';

const BoardList = () => {
  const dashboards = useSelector(selectDashboards);

  return (
    <ul className={css.boardList}>
      {dashboards.map(board => {
        return <BoardListItem key={board._id} board={board}></BoardListItem>;
      })}
    </ul>
  );
};

export default BoardList;
