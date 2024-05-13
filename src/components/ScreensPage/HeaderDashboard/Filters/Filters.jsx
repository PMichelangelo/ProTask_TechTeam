import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';

import { selectTheme } from '../../../../redux/auth/auth-selectors';
import { useCurrentTheme } from '../../../../helpers/useCurrentTheme';
import {
  filterColumns,
  filterPriority,
} from '../../../../redux/dashboards/columns/columns-operations';
import { filterDashboardSchemas } from '../../../../schemas/filterDashboardSchemas';
import CloseButton from '../../../Modal/CloseButton/CloseButton';
import FilterInput from './FilterInput';
import FilterRadioBtn from './FilterRadioBtn';

import css from './filters.module.css';
import sprite from '../../../../images/icons.svg';

import createStyle from 'shared/functions/style';

const priorityOptions = [
  { value: 'without', label: 'Without priority', color: '#161616' },
  { value: 'low', label: 'Low', color: '#8FA1D0' },
  { value: 'medium', label: 'Medium', color: '#E09CB5' },
  { value: 'high', label: 'High', color: '#BEDBB0' },
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
      priority: '',
    },
    mode: 'onChange',
    resolver: yupResolver(filterDashboardSchemas),
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const themeClassName = useCurrentTheme();

  const dispatch = useDispatch();

  useEffect(() => {
    const filter = getValues('filter').trim();
    const priority = getValues('priority');

    dispatch(filterColumns(filter));
    dispatch(filterPriority(priority));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, getValues()]);

  const handleFilterReset = () => {
    dispatch(filterColumns(''));
    dispatch(filterPriority(''));

    reset();
  };

  const handleFilterOpen = () => {
    setIsFilterOpen(true);
  };

  const handleFilterClose = () => {
    setIsFilterOpen(false);

    handleFilterReset();
  };

  const handleClearPriority = () => {
    dispatch(filterPriority(''));
  };

  watch();

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
        <div className={`${css.filterModal} ${themeClassName}`}>
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
              <div className={css.filterPriorityHeader}>
                <p className={css.filterPriorityTitle}>Label color</p>
                <button
                  className={css.filterPriorityShowAll}
                  type="button"
                  onClick={handleClearPriority}
                >
                  Show all
                </button>
              </div>

              {priorityOptions.map(({ value, label, color }) => (
                <FilterRadioBtn
                  key={value}
                  {...register('priority')}
                  value={value}
                  label={label}
                  color={color}
                />
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
