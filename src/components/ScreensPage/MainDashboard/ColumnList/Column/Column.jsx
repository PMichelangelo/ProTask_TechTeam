import { useSelector } from 'react-redux';

import AddCard from './AddCard';
import CardList from './CardList';
import ColumnHeader from './ColumnHeader';

import { selectTasks } from '../../../../../redux/dashboards/tasks/tasks-selectors';

import css from './column.module.css';

const Column = ({ column }) => {
  const allCards = useSelector(selectTasks);

  const currentColumnCards = allCards.filter(
    ({ columnId }) => columnId === column._id
  );

  const isCardPresent = currentColumnCards[0] !== undefined;
  const itemClass = isCardPresent
    ? css.item + ' ' + css.itemCardPresent
    : css.item;

  return (
    <li className={itemClass}>
      <div className={css.wrap}>
        <ColumnHeader column={column} />
        <CardList cards={currentColumnCards} />
      </div>
      <AddCard columnId={column._id} />
    </li>
  );
};

export default Column;
