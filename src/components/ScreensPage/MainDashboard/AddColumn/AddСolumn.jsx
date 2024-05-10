import React, { useState } from 'react';

import AddColum from 'components/Modal/AddColum/AddColum';

import sprite from '../../../../images/icons.svg';

import css from './addColumn.module.css';

const AddColumn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = data => {
    console.log('Data from modal:', data);
    handleCloseModal();
  };

  return (
    <>
      <button className={css.addColumnBtn} onClick={handleOpenModal}>
        <span className={css.plus}>
          <svg className={css.plusIcon}>
            <use href={`${sprite}#plus-icon`} />
          </svg>
        </span>
        Add another column
      </button>
      <AddColum
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleModalSubmit}
      />
    </>
  );
};

export default AddColumn;
