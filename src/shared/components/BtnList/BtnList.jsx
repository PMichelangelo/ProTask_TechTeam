import css from './btnList.module.css';

import sprite from '../../../images/icons.svg';

const BtnList = ({ spriteArr = [], idArr = [], handleClick }) => {
  return (
    <ul className={css.btnList}>
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
