import React, { useState } from 'react';
import Modal from '../../Modal/Modal';
import UserAvatar from '../UserAvatar';
import UserForm from '../UserForm';

import { useSelector } from 'react-redux';
import { selectTheme } from '../../../redux/theme/theme-selectors';

import styles from './userInfo.module.css';

const UserInfo = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentTheme = useSelector(selectTheme);

  const themeClassMap = {
    dark: styles.theme_dark,
    light: styles.theme_light,
    violet: styles.theme_violet,
  };

  const userClassName = themeClassMap[currentTheme] || '';

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleEditProfile = formData => {
    console.log(formData);
    closeModal();
  };

  return (
    <div className={`${styles.userContainer} ${userClassName}`}>
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
