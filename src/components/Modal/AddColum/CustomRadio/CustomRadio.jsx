import css from './CustomRadio.module.css';

const CustomRadio = ({ name, value, checked, onChange, svgIcon }) => {
  return (
    <label className={css.customRadio}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className={css.radioInput} // Класс для скрытия оригинальной радиокнопки
      />
      <div className={css.radioIcon}>{svgIcon}</div> {/* SVG для радиокнопки */}
    </label>
  );
};

export default CustomRadio;
