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

export const updateUserProfile = async(token, body) => {
  try {
    setToken(token);
    const formData = new FormData();
    if (body.name) {
      formData.append('name', body.name);
    }
    if (body.email) {
      formData.append('email', body.email);
    }
    formData.append('password', body.password);

    if (body.avatar) {
      formData.append('avatarURL', body.avatar);
    }
    const response = await authInstance.patch('/users/edit/profile', formData, );
    console.log('User info after update:', response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to update user profile", error);
    throw error;
  }
};

