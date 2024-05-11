import { useSelector } from 'react-redux';
import { selectColumns } from '../../../../redux/columns/columns-selectors';
import { selectColumnsFilter } from '../../../../redux/dashboards/columns/columns-selectors';
import Column from './Column/Column';

import css from './columnList.module.css';

const ColumnList = () => {
  const columnArr = useSelector(selectColumns);
  const filters = useSelector(selectColumnsFilter);

  const filteredColumns = columnArr.filter(column => {
    return column.title.toLowerCase().includes(filters.toLowerCase());
  });

  return (
    <ul className={css.list}>
      {filteredColumns.map(item => {
        return <Column key={item._id} column={item} />;
      })}
    </ul>
  );
};
export default ColumnList;
