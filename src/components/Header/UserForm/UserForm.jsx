import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Input from './Input';
import UploadButton from './UploadButton';
import { updateProfileSchemas } from '../../../schemas/udpadeProfileSchemas';

import styles from './UserForm.module.css';

const UserForm = ({ user, onSubmit }) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user?.name,
      email: user?.email,
    },
    criteriaMode: 'all',
    mode: 'onChange',
    resolver: yupResolver(updateProfileSchemas),
  });

  return (
    <form className={styles.formWrapper} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        render={({ field }) => (
          <UploadButton
            user={user}
            onChange={file => {
              field.onChange(file);
            }}
          />
        )}
        name="avatar"
        control={control}
      />

      <Input
        {...register('name')}
        type="text"
        placeholder="Name"
        defaultValue={user?.name}
        error={errors?.name?.message}
      />

      <Input
        {...register('email')}
        type="email"
        placeholder="Email"
        defaultValue={user?.email}
        error={errors?.email?.message}
      />

      <Input
        {...register('password')}
        type="password"
        placeholder="Password"
        error={errors?.password?.message}
      />

      <button className={styles.formButton} type="submit">
        Send
      </button>
    </form>
  );
};

export default UserForm;
