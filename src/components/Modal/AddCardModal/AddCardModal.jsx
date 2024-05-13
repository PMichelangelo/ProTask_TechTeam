import css from './addcardModal.module.css';
import Notiflix from 'notiflix';
import sprite from '../../../images/icons.svg';
import FormBtn from './../FormBtn/FormBtn';
import React, { useEffect, useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import './calendar.css';

import { useSelector } from 'react-redux';
import { selectTheme } from '../../../redux/auth/auth-selectors';

const AddCardModal = ({ onClose, onSubmit, initialTaskState, btnText }) => {
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };
  const dat = new Date();

  const firstData = dat.toLocaleDateString('en-US', options);

  const INITIAL_STATE = {
    title: initialTaskState ? initialTaskState.title : '',
    description: initialTaskState ? initialTaskState.description : '',
    priority: initialTaskState ? initialTaskState.description.priority : 'Low',
  };

  const [addCardModalState, setAddCardModal] = useState({ ...INITIAL_STATE });
  const [selectedDate, setSelectedDate] = useState(firstData);

  useEffect(() => {
    if (initialTaskState) {
      setSelectedDate(initialTaskState.deadline);
    }
  }, [initialTaskState]);

  const currentTheme = useSelector(selectTheme);

  const themeClassMap = {
    dark: css.theme_dark,
    light: css.theme_light,
    violet: css.theme_violet,
  };

  const cardTheme = themeClassMap[currentTheme] || '';

  const validateInput = () => {
    return (
      addCardModalState.title.trim() !== '' &&
      addCardModalState.description.trim() !== ''
    );
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setAddCardModal({ ...addCardModalState, [name]: value });
  };

  const handleChangeData = date => {
    setSelectedDate(date.toLocaleDateString('en-US', options));
  };

  const handleCalendarClick = e => {
  e.stopPropagation();
};

  const handleSubmit = e => {
    e.preventDefault();
    if (!validateInput()) {
      Notiflix.Notify.failure('Description cannot be empty');
      return;
    }
    onClose(false);
    onSubmit({ ...addCardModalState, deadline: selectedDate });
    setAddCardModal({ ...INITIAL_STATE });
    console.log('button was pressed')
  };

  const renderCustomHeader = ({ date, decreaseMonth, increaseMonth }) => {
    const formattedDate = new Date(date).toLocaleString('en-US', {
      month: 'long',
      year: 'numeric',
    });

    return (
      <div className={css.calendarHeader}>
        <button onClick={decreaseMonth}>
          <svg className="arrow" width="4" height="8">
            <use href={`${sprite}#icon-arrow-left`}></use>
          </svg>
        </button>
        <span className={css.date}>{formattedDate}</span>
        <button onClick={increaseMonth}>
          <svg className="arrow" width="4" height="8">
            <use href={`${sprite}#icon-arrow-right`}></use>
          </svg>
        </button>
      </div>
    );
  };

  const dayClassName = date => {
    return date ? css.customDay : null;
  };

  const ExampleCustomInput = forwardRef(({ value, onClick, }, ref) => {

    const [day, month, year] = value.split('/');
    const currentDate = new Date();
    const selectedDate = new Date(year, month - 1, day);
    const isToday = currentDate.toDateString() === selectedDate.toDateString();
    const monthName = selectedDate.toLocaleString('en', { month: 'long' });
    const formattedValue = isToday
      ? `Today, ${monthName} ${day}`
      : `${monthName} ${day}`;

    return (
      <button type="button" className="example-custom-input" onClick={onClick} ref={ref}>
        {formattedValue}
      </button>
    );
  });

  const { title, description, priority } = addCardModalState;
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        value={title}
        className={`${css.input} ${cardTheme}`}
        type="text"
        name="title"
        required
        placeholder="Title "
        onChange={handleChange}
      ></input>

      <textarea
        className={`${css.textarea} ${cardTheme}`}
        value={description}
        name="description"
        rows="7"
        required
        placeholder="Description"
        onChange={handleChange}
      ></textarea>
      <div className={css.radio_container}>
        <p className={`${css.sub_title} ${cardTheme}`}>Label color</p>
        <div className={css.radio_container_item}>
          <div>
            <input
              checked={priority === 'Low'}
              className={css.radio_input}
              name="priority"
              type="radio"
              value="Low"
              id="Low"
              onChange={handleChange}
            />
            <label className={css.label_icon} htmlFor="Low">
              <svg className={css.icon}>
                <use
                  href={`${sprite}${
                    priority === 'Low' ? '#radio-active-icon' : '#radio-icon'
                  }`}
                />
              </svg>
            </label>
          </div>

          <div>
            <input
              checked={priority === 'Medium'}
              className={css.radio_input}
              name="priority"
              type="radio"
              value="Medium"
              id="Medium"
              onChange={handleChange}
            />
            <label className={css.label_icon} htmlFor="Medium">
              <svg className={css.icon}>
                <use
                  href={`${sprite}${
                    priority === 'Medium' ? '#radio-active-icon' : '#radio-icon'
                  }`}
                />
              </svg>
            </label>
          </div>

          <div>
            <input
              checked={priority === 'High'}
              className={css.radio_input}
              name="priority"
              type="radio"
              value="High"
              id="High"
              onChange={handleChange}
            />
            <label className={css.label_icon} htmlFor="High">
              <svg className={css.icon}>
                <use
                  href={`${sprite}${
                    priority === 'High' ? '#radio-active-icon' : '#radio-icon'
                  }`}
                />
              </svg>
              <span className={css.span}></span>
            </label>
          </div>
          <div>
            <input
              checked={priority === 'Without'}
              className={css.radio_input}
              name="priority"
              type="radio"
              value="Without"
              id="Without"
              onChange={handleChange}
            />
            <label className={`${css.label_icon} ${cardTheme}`} htmlFor="Without">
              <svg className={css.icon}>
                <use
                  href={`${sprite}${
                    priority === 'Without'
                      ? '#radio-active-icon'
                      : '#radio-icon'
                  }`}
                />
              </svg>
            </label>
          </div>
        </div>
      </div>

      <div className={css.datapicer_conteinet}>
        <p className={`${css.sub_title} ${cardTheme}`}>Deadline</p>
        <DatePicker
          selected={selectedDate}
          onChange={handleChangeData}
          onClick={handleCalendarClick}
          customInput={<ExampleCustomInput />}
          dateFormat="dd/MM/yyyy"
          renderCustomHeader={renderCustomHeader}
          calendarClassName={css.customCalendar}
          dayClassName={dayClassName}
          className={css.my_datepicker}
        />
      </div>
      <FormBtn textBtn={btnText} />
    </form>
  );
};

export default AddCardModal;
