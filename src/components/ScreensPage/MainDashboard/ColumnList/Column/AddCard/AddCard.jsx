import sprite from '../../../../../../images/icons.svg';

import css from './addCard.module.css';

const AddCard = () => {
  return (
    <button className={css.addCardBtn}>
      <span className={css.plus}>
        <svg className={css.plusIcon}>
          <use href={`${sprite}#plus-icon`} />
        </svg>
      </span>
      Add another card
    </button>
  );
};

export default AddCard;
