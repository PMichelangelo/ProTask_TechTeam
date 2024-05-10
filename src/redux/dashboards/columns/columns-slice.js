import { createSlice } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

import { addColumn, editColumn, deleteColumn } from './columns-operations';
import { fetchOneDashboard } from '../dashboards-operations';

import { pending, rejected } from '../../../shared/functions/redux';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const ColumnSlice = createSlice({
  name: 'column',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchOneDashboard.pending, pending)
      .addCase(fetchOneDashboard.fulfilled, (state, { payload }) => {
        payload.columns.forEach(column => {
          state.items.push({
            _id: column._id,
            title: column.title,
          });
        });
      })
      .addCase(fetchOneDashboard.rejected, rejected)

      .addCase(addColumn.pending, pending)
      .addCase(addColumn.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items.push(payload);
        Notiflix.Notify.success(
          `Column with title ${payload.title} has been added`
        );
      })
      .addCase(addColumn.rejected, rejected)

      .addCase(editColumn.pending, pending)
      .addCase(editColumn.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const oldItemIdx = state.items.findIndex(
          item => item._id === payload._id
        );
        if (oldItemIdx !== -1) {
          const updatedItem = { ...state.items[oldItemIdx], ...payload };
          state.items.splice(oldItemIdx, 1, updatedItem);
          Notiflix.Notify.success(
            `Column with title ${payload.title} has been updated`
          );
        }
      })
      .addCase(editColumn.rejected, rejected)

      .addCase(deleteColumn.pending, pending)
      .addCase(deleteColumn.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const indexToDelete = state.items.findIndex(
          item => item._id === payload
        );
        if (indexToDelete !== -1) {
          const deletedItem = state.items[indexToDelete];
          state.items.splice(indexToDelete, 1);
          Notiflix.Notify.success(
            `Column with title ${deletedItem.title} has been deleted`
          );
        }
      })
      .addCase(deleteColumn.rejected, rejected);
  },
});

export default ColumnSlice.reducer;
