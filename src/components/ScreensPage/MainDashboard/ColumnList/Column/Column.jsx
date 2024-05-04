import AddCard from './AddCard';
import CardList from './CardList';
import ColumnHeader from './ColumnHeader';

import css from './column.module.css';

const Column = ({ item: { id, title } }) => {
  return (
    <li className={css.item}>
      <ColumnHeader columnTitle={title} />
      <CardList columnId={id} />
      <AddCard />
    </li>
  );
};

export default Column;
