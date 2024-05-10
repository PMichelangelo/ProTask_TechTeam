import React, { useState } from 'react';

import Modal from '../../Modal/Modal';
import UserAvatar from '../UserAvatar';
import UserForm from '../UserForm';

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

  const handleEditProfile = async formData => {
    try {
      console.log(formData);
      // closeModal();
    } catch (error) {
      console.error('Failed to update user profile', error);
    }
  };

  return (
    <div className={`${styles.userContainer} ${userClassName}`}>
      {user && (
        <button type="button" className={styles.userInfo} onClick={openModal}>
          <span>{user?.name}</span>

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
