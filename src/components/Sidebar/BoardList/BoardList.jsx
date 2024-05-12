import { useSelector } from 'react-redux';
import { selectDashboards } from '../../../redux/dashboards/dashboards-selectors';
import css from './boardList.module.css';
import BoardListItem from './BoardListItem/BoardListItem';
import { useState } from 'react';

const BoardList = () => {
  const [activeBoardId, setActiveBoardId] = useState(null);
  const dashboards = useSelector(selectDashboards);

  const handleBoardItemClick = boardId => {
    setActiveBoardId(boardId);
  };

  return (
    <ul className={css.boardList}>
      {dashboards.map(board => {
        return (
          <BoardListItem
            key={board._id}
            board={board}
            isActive={activeBoardId === board._id}
            onClick={() => handleBoardItemClick(board._id)}
          />
        );
      })}
    </ul>
  );
};
export default BoardList;
