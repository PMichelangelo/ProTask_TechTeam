import sprite from '../../../../images/icons.svg';

import css from './filters.module.css';

const Filters = () => {
  return (
    <button className={css.filterButton}>
      <svg className={css.filterIcon}>
        <use href={`${sprite}#filter-icon`} />
      </svg>
      Filters
    </button>
  );
};

export default Filters;
