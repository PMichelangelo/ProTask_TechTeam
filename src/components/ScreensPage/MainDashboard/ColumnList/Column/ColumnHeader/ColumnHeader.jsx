import { useDispatch } from 'react-redux';
import { useState } from 'react';

import BtnList from 'shared/components/BtnList';
import Modal from 'components/Modal/Modal';

import EditColumnModal from 'components/Modal/EditColumnModal/EditColumnModal';
import {
  deleteColumn,
  editColumn,
} from '../../../../../../redux/columns/columns-operations';

import css from './columnHeader.module.css';

const ColumnHeader = ({ column: { _id: columnId, title, boardId } }) => {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const spriteArr = ['pencil-icon', 'trash-icon'];
  const idArr = [`editBoard${columnId}`, `deleteBoard${columnId}`];

  const handleSubmit = body => {
    dispatch(editColumn({ boardId, columnId, body }));
  };

  const handleClick = e => {
    if (e.currentTarget.id === idArr[0]) {
      setIsModalOpen(true);
    } else {
      dispatch(deleteColumn({ boardId, columnId }));
    }
  };

  return (
    <>
      <div className={css.columnHeader}>
        <h4 className={css.columnTiltle}>{title}</h4>
        <BtnList
          spriteArr={spriteArr}
          idArr={idArr}
          handleClick={handleClick}
        />
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={setIsModalOpen}
        title={'Edit column'}
      >
        <EditColumnModal
          onClose={setIsModalOpen}
          onSubmit={handleSubmit}
          columnTitle={title}
        />
      </Modal>
    </>
  );
};

export default ColumnHeader;
