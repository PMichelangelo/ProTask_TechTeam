import css from './needHelp.module.css';
import sprite from '../../../images/icons.svg';
import Modal from '../../Modal/Modal';
import NeedHelpModal from '../../Modal/NeedHelpModal/NeedHelpModal';
import { useState } from 'react';

const NeedHelp = () => {
  const [modalActive, setModalActive] = useState(false);

  const openModal = () => {
    setModalActive(true);
  };

  const forSubmitNeedHelp = data => {
    console.log(data);
  };

  return (
    <div className={css.help}>
      <svg className={css.helpCactusIcon} width="54" height="78">
        <use href={`${sprite}#hexagon-icon`}></use>
      </svg>
      <p className={css.helpText}>
        If you need help with
        <span className={css.taskProSpan}> TaskPro</span>, check out our support
        resources or reach out to our customer support team.
      </p>
      <button onClick={openModal} className={css.helpBtn}>
        <svg className={css.helpIcon} width="20" height="20">
          <use href={`${sprite}#help-icon`} />
        </svg>
        <p className={css.helpBtnText}>Need help?</p>
      </button>
      <Modal isOpen={modalActive} onClose={setModalActive} titel={'Edit board'}>
        <NeedHelpModal onClose={setModalActive} onSubmit={forSubmitNeedHelp} />
      </Modal>
    </div>
  );
};

export default NeedHelp;
