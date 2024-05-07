import axios from 'axios';

const authInstance = axios.create({
    baseURL: "https://protask-backend-qjoh.onrender.com/"
})


export const setToken = async token => {
  if (token) {
    return (authInstance.defaults.headers.authorization = `Bearer ${token}`);
  }
  authInstance.defaults.headers.authorization = '';
};

export const registerRequest = async body => {
  const { data } = await authInstance.post('/users/register', body);
  return data;
};

export const currentRequest = async token => {
  setToken(token);
  try {
    const { data } = await authInstance.get('/users/current');
    console.log(data);
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};


export const loginRequest = async body => {
  const { data } = await authInstance.post('/users/login', body);
  setToken(data.token);
  return data;
};


export const logoutRequest = async () => {
  const { data } = await authInstance.post('/users/logout');
  setToken();
  return data;
};


export default authInstance;
