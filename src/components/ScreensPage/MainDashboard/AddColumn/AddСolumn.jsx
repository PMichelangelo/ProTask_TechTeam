import css from './addColumn.module.css';

const AddColumn = () => {
  return (
    <button className={css.addColumnBtn}>
      <span className={css.plus}>+</span>
      Add another column
    </button>
  );
};

export default AddColumn;
