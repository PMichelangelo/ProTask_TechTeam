import css from './btnList.module.css';

// import CurrentTheme from '../CurrentTheme/CurrentTheme';

import { useSelector } from 'react-redux';
import { selectTheme } from '../../../redux/auth/auth-selectors';

import sprite from '../../../images/icons.svg';

const BtnList = ({ spriteArr = [], idArr = [], handleClick, isDeadline }) => {
  const currentTheme = useSelector(selectTheme);
  const themeClassMap = {
    dark: css.theme_dark,
    light: css.theme_light,
    violet: css.theme_violet,
  };
  const sidebarTheme = themeClassMap[currentTheme] || '';
  return (
    <ul className={`${css.btnList} ${sidebarTheme}`}>
      {isDeadline && (
        <li key={idArr[3]} className={css.btnListItem}>
          <svg className={css.icon + ' ' + css.bellIcon}>
            <use href={`${sprite}#bell-icon`} />
          </svg>
        </li>
      )}
      {spriteArr.map((item, i) => (
        <li key={idArr[i]} className={css.btnListItem}>
          <button id={idArr[i]} className={css.btn} onClick={handleClick}>
            {/* //TODO додати  ${sidebarTheme} в className,  коли будуть налаштовані теми на ScreenPage, бо поки картки білі, а не чорні , то іконок редагування не видно, оскільки кольори збігіються*/}
            <svg className={`${css.icon} `}>
              <use href={`${sprite}#${item}`} />
            </svg>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default BtnList;
