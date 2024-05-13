import React from 'react';

import defaultAvatar from './avatar.png';
import styles from './UserAvatar.module.css';

const UserAvatar = ({ user }) => {
  return (
    <img
      className={styles.userAvatar}
      src={user?.avatarURL || defaultAvatar}
      alt={user?.name}
    />
  );
};

export default UserAvatar;
