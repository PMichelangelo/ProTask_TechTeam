import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeSelector = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleThemeChange = e => {
    const selectedTheme = e.target.value;
    toggleTheme(selectedTheme);
  };

  return (
    <select value={theme} onChange={handleThemeChange}>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="violet">Violet</option>
    </select>
  );
};

export default ThemeSelector;
