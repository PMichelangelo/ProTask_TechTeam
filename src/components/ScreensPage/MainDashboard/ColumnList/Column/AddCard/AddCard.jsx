import { useDispatch } from 'react-redux';
import { useState } from 'react';

import Modal from 'components/Modal/Modal';
import AddCardModal from 'components/Modal/AddCardModal/AddCardModal';

import { addTask } from '../../../../../../redux/tasks/tasks-operations';

import sprite from '../../../../../../images/icons.svg';

import css from './addCard.module.css';

const AddCard = ({ columnId }) => {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleSubmit = body => {
    dispatch(addTask({ columnId, body }));
  };

  return (
    <>
      <button className={css.addCardBtn} onClick={handleClick}>
        <span className={css.plus}>
          <svg className={css.plusIcon}>
            <use href={`${sprite}#plus-icon`} />
          </svg>
        </span>
        Add another card
      </button>
      <Modal isOpen={isModalOpen} onClose={setIsModalOpen} title={'Add Card'}>
        <AddCardModal onClose={setIsModalOpen} onSubmit={handleSubmit} />
      </Modal>
    </>
  );
};

export default AddCard;
