import css from './needHelpForm.module.css';

import { useState } from 'react';

const INITIAL_STATE = {
  email: '',
  distription: '',
};

const NeadeHelpForm = ({ onClose, onSubmit }) => {
  const [modalState, setModalState] = useState({ ...INITIAL_STATE });

  const handelChange = ({ target }) => {
    const { name, value } = target;
    setModalState({ ...modalState, [name]: value });
  };

  const handelSubmit = e => {
    e.preventDefault();
    onClose(false);
    onSubmit({ ...modalState });
    setModalState({ ...INITIAL_STATE });
  };

  const { email, distription } = modalState;
  return (
    <form className={css.form} onSubmit={handelSubmit}>
      <input
        value={email}
        className={css.input}
        type="email"
        name="email"
        required
        placeholder="Enter you email "
        onChange={handelChange}
      ></input>

      <textarea
        className={css.textarea}
        value={distription}
        name="distription"
        rows="7"
        required
        placeholder="Comment"
        onChange={handelChange}
      ></textarea>

      <button className={css.btn} type="submit">
        Send
      </button>
    </form>
  );
};

export default NeadeHelpForm;

//
// <Modal isOpen={modalActive} onClose={setModalActive} titel={'Edit board'}> визов модального вікна
//         <Form onClose={setModalActive} onSubmit={forSubmidNeedHelp} />     передач форми до мотального вікна
//       </Modal>
