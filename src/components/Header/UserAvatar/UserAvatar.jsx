import React from 'react';
import defaultAvatar from './avatar.png';
import styles from './UserAvatar.module.css';

const UserAvatar = ({ user }) => {
  console.log(user)
    let avatarSrc = defaultAvatar;
  if (user.avatarURL instanceof File) {
    avatarSrc = URL.createObjectURL(user.avatarURL);
  } else if (user.avatarURL) {
    avatarSrc = user.avatarURL;
  }
  return (
    <img
      className={styles.userAvatar}
      src={user.avatarURL || defaultAvatar}
      alt={user.name}
    />
  );
};

export default UserAvatar;
