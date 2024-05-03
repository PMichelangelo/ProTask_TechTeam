import css from './columnHeader.module.css';

const ColumnHeader = ({ columnTitle }) => {
  return (
    <div className={css.columnHeader}>
      <h4 className={css.columnTiltle}>{columnTitle}</h4>
      <ul className={css.btnList}>
        <li>
          <button className={css.columnHeaderBtn}>EditIcon</button>
        </li>
        <li>
          <button className={css.columnHeaderBtn}>DeleteIcon</button>
        </li>
      </ul>
    </div>
  );
};

export default ColumnHeader;
