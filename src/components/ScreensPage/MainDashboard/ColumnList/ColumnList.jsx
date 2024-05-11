import { useSelector } from 'react-redux';
import { selectColumns } from '../../../../redux/columns/columns-selectors';

import Column from './Column/Column';

import css from './columnList.module.css';

const ColumnList = () => {
  const columnArr = useSelector(selectColumns);

  return (
    <ul className={css.list}>
      {columnArr.map(item => {
        return <Column key={item._id} column={item} />;
      })}
    </ul>
  );
};
export default ColumnList;
