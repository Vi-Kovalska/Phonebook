import { createSelector, createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  editContact,
  fetchContacts,
} from './operations';
import { logout } from '../auth/operations';

export const handlePending = state => {
  state.loading = true;
  state.error = false;
};
export const handleRejected = (state, { payload }) => {
  state.loading = false;
  if (payload === 'ABORTED') {
    state.error = null;
  } else {
    state.error = payload?.message || 'Something went wrong';
  }
};
export const handleFulfilled = state => {
  state.loading = false;
  state.error = null;
};

const initialState = {
  items: [],
  loading: false,
  error: null,
  idContacts: '',
};

const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setIdContacts: (state, { payload }) => {
      state.idContacts = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        handleFulfilled(state);
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        handleFulfilled(state);
        state.items.push(payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        handleFulfilled(state);
        state.items = state.items.filter(item => item.id !== payload.id);
      })
      .addCase(editContact.pending, handlePending)
      .addCase(editContact.fulfilled, (state, { payload }) => {
        handleFulfilled(state);
        state.items = state.items.map(contact =>
          contact.id === payload.id ? payload : contact
        );
      })
      .addCase(editContact.rejected, handleRejected)
      .addCase(logout.fulfilled, state => {
        state.items = [];
        state.error = null;
        state.loading = false;
      });
  },
});

export const contactsReducer = slice.reducer;
export const { setIdContacts } = slice.actions;
