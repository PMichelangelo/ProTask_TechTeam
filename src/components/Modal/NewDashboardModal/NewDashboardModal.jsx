import css from './newDashboard.module.css';
import IconsSprite from '../../../images/icons.svg';
import BackImg from '../cat.jpg';
import FormBtn from '../FormBtn/FormBtn';
import Notiflix from 'notiflix';
import { useState } from 'react';

import { useSelector } from 'react-redux';
import {selectTheme} from "../../../redux/theme/theme-selectors"

const NewDashboardModal = ({ onClose, onSubmit, initialBoardState, btnText }) => {
  const INITIAL_STATE = {
    title: initialBoardState ? initialBoardState.title : '',
    icon: initialBoardState ? initialBoardState.icon : 'project-icon',
    background: initialBoardState ? initialBoardState.background : 'none-background',
  };

  const [newBoardState, setNewBoardState] = useState({ ...INITIAL_STATE });

  const currentTheme = useSelector(selectTheme);

  const themeClassMap = {
    dark: css.theme_dark,
    light: css.theme_light,
    violet: css.theme_violet,
  };

  const dasbortTheme = themeClassMap[currentTheme] || '';
 

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewBoardState({ ...newBoardState, [name]: value });
  };

  const validateInput = () => {
    return newBoardState.title.trim() !== '';
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!validateInput()) {
      Notiflix.Notify.failure('Title cannot be empty')
      return;
    }
    onClose(false);
    onSubmit(newBoardState);
    setNewBoardState({ ...INITIAL_STATE });
    
  };

  const iconsId = [
    'project-icon',
    'colors-icon',
    'cube-icon',
    'hexagon-icon',
    'lightning-icon',
    'circle-icon',
    'puzzle-piece-icon',
    'star-icon',
  ];

  const elementsIcon = iconsId.map(icon => (
    <label key={icon}>
      <input
        className={css.radio_input}
        name="icon"
        type="radio"
        value={icon}
        checked={newBoardState.icon === icon}
        onChange={handleChange}
      />
      <svg className={css.icon}>
        <use className={`${css.icon_use} ${dasbortTheme}`} href={`${IconsSprite}#${icon}`} />
      </svg>
    </label>
  ));

  const backgroundList = [
    'none-background',
    'magnolia',
    'starry-sky',
    'sakura',
    'half-moon',
    'palm-leaves',
    'clouds',
    'rocky-beach',
    'violet-ball',
    'full-moon',
    'yacht',
    'baloon',
    'mountains',
    'sea',
    'baloon-sky',
    'night-trailer',
  ];

  const elementsBackground = backgroundList.map(backgroundOption => (
    <label key={backgroundOption}>
      <input
        className={css.radio_input}
        name="background"
        type="radio"
        value={backgroundOption}
        checked={newBoardState.background === backgroundOption}
        onChange={handleChange}
      />
      <img className={css.backgraund_img} src={BackImg} alt="" />
    </label>
  ));

  const { title } = newBoardState;
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        value={title}
        className={`${css.input} ${dasbortTheme}`}
        type="text"
        name="title"
        required
        onChange={handleChange}
        placeholder="Title "
      ></input>
      <p className={`${css.radio_titel} ${dasbortTheme}`}>Icon:</p>
      <div className={css.radio_wrapper_icon}>{elementsIcon}</div>
      <p className={css.radio_titel}>Background:</p>
      <div className={css.radio_wrapper_bgimg}>{elementsBackground}</div>
      <FormBtn textBtn={btnText} />
    </form>
  );
};

export default NewDashboardModal;
