import React, { useState } from 'react';
import Modal from './Modal';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../../redux/theme/theme-selectors';

import styles from './userInfo.module.css';
import defaultAvatar from '../UserInfo/avatar.png';

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
        <div className={styles.userInfo}>
          <p className={styles.userName}>{user.name}</p>
          <img
            className={styles.avatar}
            src={user.avatar || defaultAvatar}
            alt={user.name}
            onClick={openModal}
            style={{ cursor: 'pointer' }}
          />
        </div>
      )}

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Edit Profile</h2>
        <form onSubmit={handleEditProfile}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" defaultValue={user.name} required />

          <button type="submit">Save Changes</button>
        </form>
      </Modal>
    </div>
  );
};

export default UserInfo;
