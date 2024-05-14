import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from '../../Modal/Modal';
import UserAvatar from '../UserAvatar';
import UserForm from '../UserForm';
import { selectTheme } from '../../../redux/auth/auth-selectors';
import styles from './userInfo.module.css';
import { updateUserProfile } from '../../../api/user-api';

const UserInfo = ({ user: initialUser }) => {
  const [user, setUser] = useState(initialUser);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const currentTheme = useSelector(selectTheme);

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

  const handleEditProfile = async formData => {
    try {
      const updatedUser = { ...user, ...formData };
      const formDataToSend = new FormData();
      formDataToSend.append('name', updatedUser.name);
      formDataToSend.append('email', updatedUser.email);
      formDataToSend.append('password', updatedUser.password);
      if (updatedUser.avatar) {
        formDataToSend.append('profileImage', updatedUser.avatar);
      }
      const updatedUserData = await updateUserProfile(
        user.token,
        formDataToSend
      );
      setUser(updatedUserData);
      console.log(formData);
      closeModal();
    } catch (error) {
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
