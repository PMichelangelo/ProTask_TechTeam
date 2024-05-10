import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../../redux/theme/theme-selectors';
import { setTheme } from '../../../redux/theme/theme-slice';
import styles from './themeSelector.module.css';

const ThemeSelector = () => {
  const dispatch = useDispatch();
  const [showOptions, setShowOptions] = useState(false);
  const [colorTheme, setColorTheme] = useState('');
  const currentTheme = useSelector(selectTheme);

  const themeClassMap = {
    theme_dark: styles.theme_dark,
    theme_light: styles.theme_light,
    theme_violet: styles.theme_violet,
  };

  const handleClick = theme => {
    setColorTheme(theme);
    setShowOptions(false);
    dispatch(setTheme(theme));
  };

  const selectClassName = themeClassMap[currentTheme] || '';

  return (
    <div className={`${styles.select} ${selectClassName}`}>
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
            onClick={() => handleClick('theme_dark')}
          >
            Dark
          </button>
          <button
            className={styles.optionTheme}
            onClick={() => handleClick('theme_light')}
          >
            Light
          </button>
          <button
            className={styles.optionTheme}
            onClick={() => handleClick('theme_violet')}
          >
            Violet
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;
