import css from './formBtn.module.css';
import sprite from "../../../images/icons.svg"

const FormBtn = ({ textBtn }) => {
  return (
    <button className={css.btn} type="submit">
      <div className={css.item}>
        <svg  className={css.item_svg}>
          <use className={css.item_use}  href={`${sprite}#plus-icon`}></use>
        </svg>
      </div>
      {textBtn}
    </button>
  );
};

export default FormBtn;
