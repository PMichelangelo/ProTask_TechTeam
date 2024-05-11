import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Modal from 'components/Modal/Modal';
import AddColumnModal from 'components/Modal/AddColumnModal/AddColumnModal';

import { addColumn } from '../../../../redux/dashboards/columns/columns-operations';

import sprite from '../../../../images/icons.svg';

import css from './addColumn.module.css';

const AddColumn = ({ boardId }) => {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleSubmit = body => {
    dispatch(addColumn({ boardId, body }));
  };

  return (
    <>
      <button className={css.addColumnBtn} onClick={handleClick}>
        <span className={css.plus}>
          <svg className={css.plusIcon}>
            <use href={`${sprite}#plus-icon`} />
          </svg>
        </span>
        Add another column
      </button>
      <Modal isOpen={isModalOpen} onClose={setIsModalOpen} title={'Add column'}>
        <AddColumnModal onClose={setIsModalOpen} onSubmit={handleSubmit} />
      </Modal>
    </>
  );
};

export default AddColumn;
