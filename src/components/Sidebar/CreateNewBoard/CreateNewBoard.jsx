import css from './createNewBoard.module.css';
import Modal from '../../Modal/Modal';
import NewDashboardModal from 'components/Modal/NewDashboardModal/NewDashboardModal';
import { useState } from 'react';
import sprite from '../../../images/icons.svg';
import { useDispatch } from 'react-redux';
import { addDashboard } from '../../../redux/dashboards/dashboards-operations';

const CreateNewBoard = () => {
  const dispatch = useDispatch();

  const [modalActive, setModalActive] = useState(false);

  const onSubmit = data => {
    dispatch(addDashboard(data));
  };

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
      <Modal isOpen={modalActive} onClose={setModalActive} title={'AddColum'}>
        {/* <AddColum onClose={setModalActive} onSubmit={forSubmid} /> */}
      </Modal>
    </div>
  );
};

export default CreateNewBoard;
