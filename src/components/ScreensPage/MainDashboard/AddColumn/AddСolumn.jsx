import sprite from '../../../../images/icons.svg';

import css from './addColumn.module.css';

const AddColumn = () => {
  return (
    <button className={css.addColumnBtn}>
      <span className={css.plus}>
        <svg className={css.plusIcon}>
          <use href={`${sprite}#plus-icon`} />
        </svg>
      </span>
      Add another column
    </button>
  );
};

export default AddColumn;
