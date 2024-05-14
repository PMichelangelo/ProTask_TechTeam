import React from 'react';
import defaultAvatar from './avatar.png';
import styles from './UserAvatar.module.css';

const UserAvatar = ({ user }) => {
  console.log(user)
  let avatarSrc = defaultAvatar;

  // Проверяем, является ли avatarURL строкой
  if (typeof user.avatarURL === 'string' && user.avatarURL.startsWith('data:image')) {
    // Если это строка, начинающаяся с 'data:image', это база64 изображение
    avatarSrc = user.avatarURL;
  } else if (user.avatarURL instanceof File) {
    // Если это объект File, создаем URL для предварительного просмотра
    avatarSrc = URL.createObjectURL(user.avatarURL);
  } else if (user.avatarURL) {
    // В противном случае предполагаем, что это URL-адрес удаленного изображения
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
