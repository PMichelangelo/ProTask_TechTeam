import authInstance from './auth-api';

export const addTaskRequest = async (columnId, body) => {
  return await authInstance.post(`/columns/current-column/${columnId}`, body);
};

export const editTaskRequest = async (columnId, taskId, body) => {
  return await authInstance.put(
    `/boards/current-column/${columnId}/${taskId}`,
    body
  );
};

export const deleteTaskRequest = async (columnId, taskId) => {
  return await authInstance.delete(
    `/boards/current-column/${columnId}/${taskId}`
  );
};
