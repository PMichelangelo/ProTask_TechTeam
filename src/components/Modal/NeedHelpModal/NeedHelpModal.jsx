import css from './needHelpModal.module.css';
import Notiflix from 'notiflix';
import { useState } from 'react';

const INITIAL_STATE = {
  email: '',
  distription: '',
};

const NeedHelpModal = ({ onClose, onSubmit }) => {
  const [modalState, setModalState] = useState({ ...INITIAL_STATE });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setModalState({ ...modalState, [name]: value });
  };

  const validateInput = () => {
    return (modalState.distription.trim() !== '')
  };



  const handleSubmit = e => {
    e.preventDefault();
    if (!validateInput()) {
      Notiflix.Notify.failure('Distription cannot be empty')
      return;
    }
   
    onClose(false);
    onSubmit({ ...modalState });
    setModalState({ ...INITIAL_STATE });
  };

  const { email, distription } = modalState;
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        value={email}
        className={css.input}
        type="email"
        name="email"
        required
        placeholder="Enter you email "
        onChange={handleChange}
      ></input>

      <textarea
        className={css.textarea}
        value={distription}
        name="distription"
        rows="7"
        required
        placeholder="Comment"
        onChange={handleChange}
      ></textarea>

      <button className={css.btn} type="submit">
        Send
      </button>
    </form>
  );
};

export default NeedHelpModal;


