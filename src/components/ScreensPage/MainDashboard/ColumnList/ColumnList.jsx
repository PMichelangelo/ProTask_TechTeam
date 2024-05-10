// import { useSelector } from 'react-redux';
// import { selectColumns } from '../../../../redux/columns/columns-selectors';

// import { fetchBoard } from '../../../../redux/columns/columns-operations';
import Column from './Column/Column';

import css from './columnList.module.css';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

const ColumnList = () => {
  const columnArr = [];

  return (
    <ul className={css.list}>
      {columnArr.map(item => {
        return <Column key={item.id} item={item} />;
      })}
    </ul>
  );
};
export default ColumnList;
