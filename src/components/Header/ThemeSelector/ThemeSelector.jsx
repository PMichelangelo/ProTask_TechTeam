import React from 'react';
import { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../../redux/theme/theme-slice';
import { selectTheme } from "../../../redux/theme/theme-selectors"
import styles from "./themeSelector.module.css"

const ThemeSelector = () => {
  const dispatch = useDispatch()
  const currentTheme = useSelector(selectTheme)
  const [colorTheme, setColorTheme] = useState(currentTheme)


const handleClick = (theme) => {
  setColorTheme(theme)
  dispatch(setTheme(theme))
 }

  return (
      <div className={styles.theme_options}>
        <select value={colorTheme} onChange={(e) => handleClick(e.target.value)}>
          <option value="theme_dark">Dark Theme</option>
          <option value="theme_light">Light Theme</option>
          <option value="theme_violet">Violet Theme</option>
        </select>
      </div>
  );
}


export default ThemeSelector;
