import css from './moveCardModal.module.css';

// import { selectTheme } from '../../../../../../../../redux/auth/auth-selectors';
// import createStyle from 'shared/functions/style';
import { useSelector } from 'react-redux';
import { selectColumns } from '../../../../../../../../redux/dashboards/columns/columns-selectors';
import { useEffect, useRef } from 'react';

const MoveCardModal = ({ isOpen, onClose, onClick, currentColumnId }) => {
  //   const theme = useSelector(selectTheme);
  const columns = useSelector(selectColumns);
  const selectRef = useRef(null);

  const columnsToMove = columns.filter(column => {
    return column._id !== currentColumnId;
  });

  useEffect(() => {
    const handleClickOutside = event => {
      if (isOpen && !selectRef.current.contains(event.target)) {
        onClose(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    isOpen && (
      <div className={`${css.moveModal}`} ref={selectRef}>
        {columnsToMove.length === 0 ? (
          <p>There is no columns to move your task</p>
        ) : (
          <ul>
            {columnsToMove.map(item => (
              <li key={item._id}>
                <button onClick={() => onClick(item._id)}>{item.title}</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  );
};

export default MoveCardModal;
