import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useCurrentTheme } from '../../../helpers/useCurrentTheme';
import { setThemeAsync } from '../../../redux/theme/theme-operations';
//import { setTheme } from '../../../redux/theme/theme-slice';
import styles from './themeSelector.module.css';

const ThemeSelector = () => {
  const dispatch = useDispatch();
  const [showOptions, setShowOptions] = useState(false);
  const [colorTheme, setColorTheme] = useState('');

  const selectRef = useRef(null);

  const { themeClassName } = useCurrentTheme();

  const handleClick = theme => {
    setColorTheme(theme);
    setShowOptions(false);
    console.log('Отправка запроса на изменение темы:', theme);

    dispatch(setThemeAsync(theme))
      .then(response => {
        console.log('Ответ сервера:', response);
      })
      .catch(error => {
        console.error('Ошибка при изменении темы:', error);
      });
  };

  useEffect(() => {
    const handleOutsideClick = event => {
      if (showOptions && !selectRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [showOptions, themeClassName]);

  return (
    <div className={`${styles.select} ${themeClassName}`} ref={selectRef}>
      <p className={styles.themeTitle}>Theme</p>
      <div
        className={styles.themeText}
        onClick={() => setShowOptions(!showOptions)}
      >
        {!colorTheme ? '' : ''}
      </div>

      <button
        className={styles.arrowIcon}
        onClick={() => setShowOptions(!showOptions)}
      >
        &#9660;
      </button>
      {showOptions && (
        <div className={styles.options}>
          {colorTheme !== '' && (
            <div
              hidden
              className={styles.option}
              onClick={() => handleClick('')}
            ></div>
          )}
          <button
            className={styles.optionTheme}
            onClick={() => handleClick('dark')}
          >
            Dark
          </button>
          <button
            className={styles.optionTheme}
            onClick={() => handleClick('light')}
          >
            Light
          </button>
          <button
            className={styles.optionTheme}
            onClick={() => handleClick('violet')}
          >
            Violet
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;
