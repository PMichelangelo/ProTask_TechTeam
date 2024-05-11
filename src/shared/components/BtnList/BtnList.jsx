import css from './btnList.module.css';

import sprite from '../../../images/icons.svg';

const BtnList = ({ spriteArr = [], idArr = [], handleClick, isDeadline }) => {
  return (
    <ul className={css.btnList}>
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
            <svg className={css.icon}>
              <use href={`${sprite}#${item}`} />
            </svg>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default BtnList;
