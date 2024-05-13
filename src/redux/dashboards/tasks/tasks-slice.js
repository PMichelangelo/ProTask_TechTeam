import { createSlice } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

import { addTask, editTask, deleteTask } from './tasks-operations';
import { fetchOneDashboard } from '../dashboards-operations';

import { pending, rejected } from '../../../shared/functions/redux';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const TaskSlice = createSlice({
  name: 'task',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchOneDashboard.pending, pending)
      .addCase(fetchOneDashboard.fulfilled, (state, { payload }) => {
        state.items = [];
        payload.columns.forEach(column => {
          column.tasks.forEach(task => {
            state.items.push({
              boardId: payload._id,
              columnId: column._id,
              _id: task._id,
              title: task.title,
              priority: task.priority,
              description: task.description,
              deadline: task.deadline,
            });
          });
        });
      })
      .addCase(fetchOneDashboard.rejected, rejected)

      .addCase(addTask.pending, pending)
      .addCase(addTask.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items.unshift(payload);
        Notiflix.Notify.success(
          `Task with title ${payload.title} has been added`
        );
      })
      .addCase(addTask.rejected, rejected)

      .addCase(editTask.pending, pending)
      .addCase(editTask.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const oldItemIdx = state.items.findIndex(
          item => item._id === payload._id
        );
        if (oldItemIdx !== -1) {
          const updatedItem = { ...state.items[oldItemIdx], ...payload };
          state.items.splice(oldItemIdx, 1, updatedItem);
          Notiflix.Notify.success(
            `Task with title ${payload.title} has been updated`
          );
        }
      })
      .addCase(editTask.rejected, rejected)

      .addCase(deleteTask.pending, pending)
      .addCase(deleteTask.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const indexToDelete = state.items.findIndex(
          item => item._id === payload
        );
        if (indexToDelete !== -1) {
          const deletedItem = state.items[indexToDelete];
          state.items.splice(indexToDelete, 1);
          Notiflix.Notify.success(
            `Task with title ${deletedItem.title} has been deleted`
          );
        }
      })
      .addCase(deleteTask.rejected, rejected);
  },
});

export default TaskSlice.reducer;
