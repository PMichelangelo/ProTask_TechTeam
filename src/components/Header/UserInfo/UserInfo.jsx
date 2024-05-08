import React, { useState } from 'react';
import Modal from './Modal';

import styles from './userInfo.module.css';
import defaultAvatar from '../UserInfo/avatar.png';

const UserInfo = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <div>
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
