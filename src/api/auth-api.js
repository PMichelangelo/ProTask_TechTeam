import axios from 'axios';

const authInstance = axios.create({
  baseURL: 'https://protask-backend-qjoh.onrender.com/',
});

export const setToken = async token => {
  if (token) {
    return (authInstance.defaults.headers.authorization = `Bearer ${token}`);
  }
  authInstance.defaults.headers.authorization = '';
};

export const registerRequest = async body => {
  const { data } = await authInstance.post('/auth/register', body);
  return data;
};

export const loginRequest = async body => {
  const { data } = await authInstance.post('/auth/login', body);
  setToken(data.token);
  console.log('Fetched data from server:', data);
  const { email, name, avatarURL, theme } = data.user;
  console.log('Email', email);
  console.log('Name:', name);
  console.log('avatar:', avatarURL);
  console.log('theme:', theme);
  return data;
};

export const currentRequest = async token => {
  setToken(token);
  try {
    const { data } = await authInstance.get('/auth/current');
    console.log('Данные после запроса текущего пользователя:', data);
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const logoutRequest = async () => {
  const { data } = await authInstance.post('/auth/logout');
  setToken();
  return data;
};

export default authInstance;
