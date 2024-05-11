import { useSelector } from 'react-redux';
import { selectTheme } from '../redux/theme/theme-selectors';

import styles from '../components/Header/UserInfo/userInfo.module.css';

export const useCurrentTheme = () => {
  const currentTheme = useSelector(selectTheme);

  const themeClassMap = {
    dark: styles.theme_dark,
    light: styles.theme_light,
    violet: styles.theme_violet,
  };

  const themeClassName = themeClassMap[currentTheme] || '';

  return { themeClassName };
};
