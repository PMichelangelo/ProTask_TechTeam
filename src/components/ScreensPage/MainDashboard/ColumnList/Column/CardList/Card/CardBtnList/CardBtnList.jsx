import sprite from '../../../../../../../../images/icons.svg';

import css from './cardBtnList.module.css';

const CardBtnList = ({ deadline }) => {
  function getFormattedDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
  }

  const isDeadlineToday = deadline === getFormattedDate();

  const icons = ['arrow-circle-icon', 'pencil-icon', 'trash-icon'];

  const handleClick = event => {
    event.target.blur();
  };

  return (
    <ul className={css.cardBtnList}>
      {isDeadlineToday && (
        <li key="3" className={css.cardBtnItem}>
          <svg className={css.cardIcon + ' ' + css.bellIcon}>
            <use href={`${sprite}#bell-icon`} />
          </svg>
        </li>
      )}
      {icons.map((icon, i) => (
        <li key={i} className={css.cardBtnItem}>
          <button className={css.cardBtn} onClick={handleClick}>
            <svg className={css.cardIcon}>
              <use href={`${sprite}#${icon}`} />
            </svg>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CardBtnList;
