import authInstance from "./auth-api";
import { setToken } from "./auth-api";

export const sendUserNeedHelp = async (data) => {
    try {
      const response = await authInstance.patch('/users/need-help', data);
      return response;
    } catch (error) {
      console.error("Failed to send a help request", error);
      throw error;
    }
};

export const updateUserProfile = async (token, body ) => {
  console.log(body, token)
  try {
    setToken(token);
    console.log(body)
    const formData = new FormData();
    console.log(formData)
    formData.append('name', body.name);
    formData.append('email', body.email);
    formData.append('password', body.password);
    formData.append('avatar', body.avatar);

    const response = await authInstance.patch('/users/edit/profile', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    console.log('User info after update:', response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to update user profile", error);
    throw error;
  }
};

