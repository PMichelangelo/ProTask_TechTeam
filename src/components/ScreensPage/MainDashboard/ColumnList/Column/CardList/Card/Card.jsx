import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import BtnList from 'shared/components/BtnList';
import Modal from 'components/Modal/Modal';
import AddCardModal from 'components/Modal/AddCardModal/AddCardModal';

import {
  deleteTask,
  editTask,
} from '../../../../../../../redux/dashboards/tasks/tasks-operations';

import css from './card.module.css';

import { selectTheme } from '../../../../../../../redux/auth/auth-selectors';
import createStyle from 'shared/functions/style';

function getFormattedDate() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  return `${day}/${month}/${year}`;
}

function formatDateString(dateString) {
  const parts = dateString.split('/');
  const month = parts[0];
  const day = parts[1];
  const year = parts[2];
  return `${day}/${month}/${year}`;
}

const Card = ({
  card: { _id: taskId, columnId, title, description, priority, deadline },
}) => {
  const dispatch = useDispatch();

  const theme = useSelector(selectTheme);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const spriteArr = ['arrow-circle-icon', 'pencil-icon', 'trash-icon'];
  const idArr = [
    `moveCard${taskId}`,
    `editCard${taskId}`,
    `deleteCard${taskId}`,
    `deadline${taskId}`,
  ];

  const handleSubmit = body => {
    dispatch(editTask({ columnId, taskId, body }));
  };

  const handleClick = e => {
    switch (e.currentTarget.id) {
      case idArr[0]:
        return;
      case idArr[1]:
        return setIsModalOpen(true);
      case idArr[2]:
        return dispatch(deleteTask({ columnId, taskId }));
      default:
        return;
    }
  };

  const formattedDeadline = formatDateString(deadline);

  const isDeadline = formattedDeadline === getFormattedDate();

  function getPriorityClass(priority, prefix = '') {
    switch (priority) {
      case 'High':
        return css[`${prefix}High`];
      case 'Medium':
        return css[`${prefix}Medium`];
      case 'Low':
        return css[`${prefix}Low`];
      default:
        return css[`${prefix}Without`];
    }
  }

  return (
    <>
      <li
        className={`${css.card} ${getPriorityClass(priority, 'cardPriority')} ${
          css[createStyle(theme, 'card')]
        }`}
      >
        <h4 className={css.cardTitle}>{title}</h4>
        <p className={css.cardText}>{description}</p>
        <div className={css.wrapCardInfo}>
          <div className={css.wrapPriorityDeadline}>
            <div className={css.wrapLeft}>
              <h6 className={css.infoText}>Priority</h6>
              <div className={css.prioritySpanText}>
                <span
                  className={`${css.colorSpan} ${getPriorityClass(
                    priority,
                    'priority'
                  )}`}
                ></span>
                <p className={css.info}>{priority}</p>
              </div>
            </div>
            <div className={css.wrapLeft}>
              <h6 className={css.infoText}>Deadline</h6>
              <p className={css.info}>{formattedDeadline}</p>
            </div>
          </div>
          <BtnList
            theme={theme}
            spriteArr={spriteArr}
            idArr={idArr}
            handleClick={handleClick}
            isDeadline={isDeadline}
          />
        </div>
      </li>
      <Modal isOpen={isModalOpen} onClose={setIsModalOpen} title={'Edit Card'}>
        <AddCardModal
          onClose={setIsModalOpen}
          onSubmit={handleSubmit}
          initialTaskState={{ title, description, priority, deadline }}
          btnText={'Edit'}
        />
      </Modal>
    </>
  );
};

export default Card;
