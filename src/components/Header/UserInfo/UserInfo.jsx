import React, { useState } from 'react';
import { useCurrentTheme } from '../../../helpers/useCurrentTheme';
import Modal from '../../Modal/Modal';
import UserAvatar from '../UserAvatar';
import UserForm from '../UserForm';

import styles from './userInfo.module.css';

const UserInfo = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { themeClassName } = useCurrentTheme();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleEditProfile = formData => {
    try {
      console.log(formData);
      closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={`${styles.userContainer} ${themeClassName}`}>
      {user && (
        <button onClick={openModal} className={styles.userInfo}>
          {user?.name && <span>{user?.name}</span>}

          <span
            style={{
              width: '32px',
              height: '32px',
            }}
          >
            <UserAvatar user={user} />
          </span>
        </button>
      )}

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Edit Profile</h2>

        <UserForm user={user} onSubmit={handleEditProfile} />
      </Modal>
    </div>
  );
};

export default UserInfo;
