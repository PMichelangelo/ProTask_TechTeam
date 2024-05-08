import sprite from '../../../../../../images/icons.svg';

import css from './columnHeader.module.css';

const ColumnHeader = ({ columnTitle }) => {
  const handleClick = event => {
    event.target.blur();
  };

  return (
    <div className={css.columnHeader}>
      <h4 className={css.columnTiltle}>{columnTitle}</h4>
      <ul className={css.btnList}>
        <li className={css.btnListItem}>
          <button className={css.columnHeaderBtn} onClick={handleClick}>
            <svg className={css.columnHeaderIcon}>
              <use href={`${sprite}#pencil-icon`} />
            </svg>
          </button>
        </li>
        <li className={css.btnListItem}>
          <button className={css.columnHeaderBtn} onClick={handleClick}>
            <svg className={css.columnHeaderIcon}>
              <use href={`${sprite}#trash-icon`} />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ColumnHeader;
