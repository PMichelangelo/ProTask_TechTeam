import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';

import { selectTheme } from '../../../../redux/auth/auth-selectors';
import { useCurrentTheme } from '../../../../helpers/useCurrentTheme';
import { filterColumns } from '../../../../redux/dashboards/columns/columns-operations';
import { filterDashboardSchemas } from '../../../../schemas/filterDashboardSchemas';
import CloseButton from '../../../Modal/CloseButton/CloseButton';
import FilterInput from './FilterInput';

import css from './filters.module.css';
import sprite from '../../../../images/icons.svg';

import createStyle from 'shared/functions/style';

const priorityOptions = [
  { value: 'without', label: 'Without priority' },
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
];

const Filters = () => {
  const theme = useSelector(selectTheme);

  const {
    register,
    formState: { errors },
    getValues,
    reset,
    watch,
  } = useForm({
    defaultValues: {
      filter: '',
      priority: 'without',
    },
    mode: 'onChange',
    resolver: yupResolver(filterDashboardSchemas),
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const themeClassName = useCurrentTheme();

  const filter = getValues('filter').trim();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterColumns(filter));
  }, [filter, dispatch]);

  const handleFilterOpen = () => {
    setIsFilterOpen(true);
  };

  const handleFilterClose = () => {
    setIsFilterOpen(false);
    reset();
  };

  watch();

  console.log(getValues());

  return (
    <div className={css.filterButtonWrap}>
      <button
        className={`${css.filterButton} ${
          css[createStyle(theme, 'filterButton')]
        }`}
        onClick={handleFilterOpen}
      >
        <svg
          className={`${css.filterIcon} ${
            css[createStyle(theme, 'filterIcon')]
          }`}
        >
          <use href={`${sprite}#filter-icon`} />
        </svg>
        Filters
      </button>

      {isFilterOpen && (
        <div className={`${css.filterModal} ${themeClassName()}`}>
          <h2 className={css.filterTitle}>Filters</h2>

          <form
            className={css.filterForm}
            onSubmit={event => {
              event.preventDefault();
            }}
          >
            <FilterInput
              {...register('filter')}
              error={errors.filter?.message}
            />

            <div className={css.filterPriority}>
              <p className={css.filterPriorityLabel}>Label color</p>

              {priorityOptions.map(({ value, label }) => (
                <label key={value} className={css.filterPriorityLabel}>
                  <input
                    type="radio"
                    {...register('priority')}
                    value={value}
                    className={css.filterPriorityInput}
                  />

                  {label}
                </label>
              ))}
            </div>
          </form>

          <CloseButton onClose={handleFilterClose} />
        </div>
      )}
    </div>
  );
};

export default Filters;
