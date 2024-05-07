import sprite from '../../../../images/icons.svg';

import css from './filters.module.css';

const Filters = () => {
  return (
    <div className={css.filterButtonWrap}>
      <button className={css.filterButton}>
        <svg className={css.filterIcon}>
          <use href={`${sprite}#filter-icon`} />
        </svg>
        Filters
      </button>
    </div>
  );
};

export default Filters;
