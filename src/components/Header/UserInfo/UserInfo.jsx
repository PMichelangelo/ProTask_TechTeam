import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from '../../Modal/Modal';
import UserAvatar from '../UserAvatar';
import UserForm from '../UserForm';
import { selectTheme, selectToken } from '../../../redux/auth/auth-selectors';
import styles from './userInfo.module.css';
import { updateUserProfile } from '../../../api/user-api';

const UserInfo = ({ user: initialUser }) => {
  const [user, setUser] = useState(initialUser);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const currentTheme = useSelector(selectTheme);
  const token = useSelector(selectToken)

  const themeClassMap = {
    dark: styles.theme_dark,
    light: styles.theme_light,
    violet: styles.theme_violet,
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleEditProfile = async (updatedUserData) => {
    console.log("updatedUserData", updatedUserData)
    try {
      const formData = {
      name: updatedUserData.name || '',
      email: updatedUserData.email || '',
      password: updatedUserData.password || '',
      avatarURL: updatedUserData.avatar || '',
    };
    console.log('Data being sent to server:', formData);
    const response = await updateUserProfile(token, formData);
    console.log('User info after update:', response);
      setUser(formData);
      console.log("setUser",formData)

    closeModal();
    }
    catch (error) {
      console.error(error);
    }
  };

  const userInfoPageTheme = themeClassMap[currentTheme] || '';

  return (
    <div className={`${styles.userContainer} ${userInfoPageTheme}`}>
      <button onClick={openModal} className={styles.userInfo}>
        <span>{user?.name ?? 'N/A'}</span>
        <span
          style={{
            width: '32px',
            height: '32px',
          }}
        >
          <UserAvatar user={user} />
        </span>
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Edit profile">
        <UserForm user={user} onSubmit={handleEditProfile} />
      </Modal>
    </div>
  );
};

export default UserInfo;
