import css from './createNewBoard.module.css';
import Modal from '../../Modal/Modal';
import { useState } from 'react';
import sprite from '../../../images/icons.svg';

const CreateNewBoard = () => {
  const [modalActive, setModalActive] = useState(false);

  // const forSubmit = data => console.log(data);
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
        {/* <AddColum onClose={setModalActive} onSubmit={forSubmid} /> */}
      </Modal>
    </div>
  );

  // <p className={css.createNewBoardTitle}>Create a new board</p>;
};

export default CreateNewBoard;

// import Modal from '../../Modal/Modal';
// import AddColum from '../../Modal/AddColum/AddColum';
// import { useState } from 'react';
// const CreateNewBoard = () => {
//   const [modalActive, setModalActive] = useState(false);   - стан модалки
//   const forSubmid = data => console.log(data); данні с форми по сабміту
//   return <>
//      <button onClick={() => setModalActive(true)}>Open</button>
// <Modal isOpen={modalActive} onClose={setModalActive} titel={'AddColum'}> - виклик модалки
//   <AddColum onClose={setModalActive} onSubmit={forSubmid} />             - виклик компонента модалки
// </Modal>
//   </>
