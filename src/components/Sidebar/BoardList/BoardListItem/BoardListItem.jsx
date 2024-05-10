import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import BtnList from 'shared/components/BtnList';
import Modal from 'components/Modal/Modal';
import NewDashboardModal from 'components/Modal/NewDashboardModal/NewDashboardModal';

import {
  deleteDashboard,
  editDashboard,
} from '../../../../redux/dashboards/dashboards-operations';

import css from './BoardListItem.module.css';

const BoardListItem = ({ board: { _id, title } }) => {
  const dispatch = useDispatch();
  const [modalActive, setModalActive] = useState(false);

  const spriteArr = ['pencil-icon', 'trash-icon'];
  const idArr = [`editBoard${_id}`, `deleteBoard${_id}`];

  const onSubmit = body => {
    const boardId = _id;
    dispatch(editDashboard({ boardId, body }));
  };

  const handleClick = e => {
    e.stopPropagation();
    e.preventDefault();
    if (e.currentTarget.id === idArr[0]) {
      setModalActive(true);
    } else {
      dispatch(deleteDashboard(_id));
    }
  };

  return (
    <li className={css.listItem}>
      <NavLink to={`/home/${_id}`} className={css.boardLink}>
        {title}
        <BtnList
          spriteArr={spriteArr}
          idArr={idArr}
          handleClick={handleClick}
        />
      </NavLink>
      <Modal isOpen={modalActive} onClose={setModalActive} title={'New board'}>
        <NewDashboardModal onClose={setModalActive} onSubmit={onSubmit} />
      </Modal>
    </li>
  );
};

export default BoardListItem;
