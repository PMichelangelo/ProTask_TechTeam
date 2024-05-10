import css from './createNewBoard.module.css';
import Modal from '../../Modal/Modal';
import AddColum from '../../Modal/AddColum/AddColum';
import { useState } from 'react';
import sprite from '../../../images/icons.svg';
//import AddColumnModal from "../../Modal/AddColumnModal/AddColumnModal";
const CreateNewBoard = () => {
  const [modalActive, setModalActive] = useState(false);

  const forSubmit = data => console.log(data);
  return (
    <div>
      <button
        onClick={() => setModalActive(true)}
        className={css.createNewBoardBtn}
      >
        <p className={css.createNewBoardTitle}>
          Create a <br /> new board
        </p>
        <div className={css.createNewBoardIcon}>
          <svg className={css.createNewBoardIconItem} width="20" height="20">
            <use href={`${sprite}#plus-icon`}></use>
          </svg>
        </div>
      </button>
      <Modal isOpen={modalActive} onClose={setModalActive} titel={'AddColum'}>
        <AddColum onClose={setModalActive} onSubmit={forSubmit} />
      </Modal>
    </div>
  );
};

export default CreateNewBoard;
