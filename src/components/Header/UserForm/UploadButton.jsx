import React, { useId, useState } from 'react';
import UserAvatar from '../UserAvatar';
import { getBase64 } from '../../../helpers/functoins';

import styles from './UserForm.module.css';

export const UploadButton = ({ user, onChange, ...props }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const uploadFileId = useId();

  const handleUpload = event => {
    const file = event.target.files[0];
    getBase64(file, setImagePreview);

    onChange(imagePreview);
    event.target.value = '';
  };

  return (
    <div className={styles.uploadButtonWrapper}>
      <span
        style={{
          width: '68px',
          height: '68px',
        }}
      >
        <UserAvatar
          user={imagePreview ? { ...user, avatar: imagePreview } : user}
        />
      </span>

      <label htmlFor={uploadFileId} className={styles.uploadButton}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 0H6C2.68629 0 0 2.68629 0 6V18C0 21.3137 2.68629 24 6 24H18C21.3137 24 24 21.3137 24 18V6C24 2.68629 21.3137 0 18 0Z"
            fill="#BEDBB0"
          />
          <path
            d="M12 9.08337V14.9167"
            stroke="#161616"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.0835 12H14.9168"
            stroke="#161616"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <input
          type="file"
          accept="image/*"
          id={uploadFileId}
          className={styles.uploadInput}
          onChange={handleUpload}
          {...props}
        />
      </label>
    </div>
  );
};

export default UploadButton;
