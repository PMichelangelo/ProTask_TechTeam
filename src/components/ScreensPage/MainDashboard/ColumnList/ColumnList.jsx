import Column from './Column/Column';

import css from './columnList.module.css';

const ColumnList = () => {
  const columnArr = [
    { id: '123', title: 'To Do' },
    { id: '234', title: 'Done' },
  ];

  return (
    <ul className={css.list}>
      {columnArr.map(item => {
        return <Column key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default ColumnList;
