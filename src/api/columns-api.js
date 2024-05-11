import authInstance from './auth-api';

export const addColumnRequest = async (boardId, body) => {
  console.log(boardId, body);
  return await authInstance.post(`/boards/current/${boardId}`, body);
};

export const editColumnRequest = async (boardId, columnId, body) => {
  return await authInstance.put(`/boards/current/${boardId}/${columnId}`, body);
};

export const deleteColumnRequest = async (boardId, columnId) => {
  return await authInstance.delete(`/boards/current/${boardId}/${columnId}`);
};
