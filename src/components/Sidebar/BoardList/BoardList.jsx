import { useSelector } from 'react-redux';
import {
  selectDashboards,
  selectDashboardsLoading,
} from '../../../redux/dashboards/dashboards-selectors';
import css from './boardList.module.css';
import BoardListItem from './BoardListItem/BoardListItem';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BoardList = () => {
  const [activeBoardId, setActiveBoardId] = useState(null);
  const dashboards = useSelector(selectDashboards);
  const loading = useSelector(selectDashboardsLoading);

  const navigate = useNavigate();

  useEffect(() => {
    if (dashboards.length > 0 && activeBoardId === null && !loading) {
      setActiveBoardId(dashboards[0]._id);
      navigate(`/home/${dashboards[0].title}`);
    }
  }, [dashboards, navigate, activeBoardId, loading]);

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
