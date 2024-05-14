import css from './needHelp.module.css';
import sprite from '../../../images/icons.svg';
import Modal from '../../Modal/Modal';
import NeedHelpModal from '../../Modal/NeedHelpModal/NeedHelpModal';
import { useState } from 'react';
import image from '../../../images/Cactus.png';
import { sendUserNeedHelp } from 'api/user-api';
// import CurrentTheme from 'shared/components/CurrentTheme/CurrentTheme';
const NeedHelp = () => {
  const [modalActive, setModalActive] = useState(false);

  const openModal = () => {
    setModalActive(true);
  };

  const forSubmitNeedHelp = async ({ description }) => {
    try {
      const data = { description };
      console.log(data);
      await sendUserNeedHelp(data);
    } catch (error) {
      console.error('Failed to send a help request', error);
    }
  };
  return (
    <div className={css.help}>
      <img className={css.helpCactusIcon} src={image} alt="Cactus" />
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
      <Modal isOpen={modalActive} onClose={setModalActive}>
        <NeedHelpModal onClose={setModalActive} onSubmit={forSubmitNeedHelp} />
      </Modal>
    </div>
  );
};

export default NeedHelp;
