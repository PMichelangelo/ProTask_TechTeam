import css from './addCard.module.css';

const AddCard = () => {
  return (
    <button className={css.addCardBtn}>
      <span className={css.plus}>+</span>
      Add another card
    </button>
  );
};

export default AddCard;
