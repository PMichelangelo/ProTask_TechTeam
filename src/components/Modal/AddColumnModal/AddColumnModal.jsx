import css from './addColumnModal.module.css';

import FormBtn from '../FormBtn/FormBtn';

import { useState } from 'react';

const INITIAL_STATE = {
  title: '',
};

const AddColumnModal = ({ onClose, onSubmit }) => {
  const [columnState, setColumnState] = useState(INITIAL_STATE);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setColumnState({ [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onClose(false);
    onSubmit(columnState);
    setColumnState(INITIAL_STATE);
  };
  const {title}=columnState
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        value={title}
        className={css.input}
        type="text"
        name="title"
        required
        onChange={handleChange}
        placeholder="Title "
      ></input>

      <FormBtn textBtn={'Add'} />
    </form>
  );
};

export default AddColumnModal;
