import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const swigger = axios.create({
  baseURL: 'https://connections-api.goit.global/',
});

const getToken = thunkAPI => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth?.token;

  if (!persistedToken) {
    return null;
  }

  swigger.defaults.headers.common.Authorization = `Bearer ${persistedToken}`;
  return persistedToken;
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async ({ signal }, thunkAPI) => {
    const token = getToken(thunkAPI);
    if (!token) {
      return thunkAPI.rejectWithValue('No token found');
    }
    try {
      const response = await swigger.get('contacts', { signal });
      return response.data;
    } catch (error) {
      if (error.name === 'CanceledError') {
        return thunkAPI.rejectWithValue('ABORTED');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    const token = getToken(thunkAPI);
    if (!token) {
      return thunkAPI.rejectWithValue('No token found');
    }
    try {
      const response = await swigger.post('contacts', { name, number });
      return response.data;
    } catch (error) {
      if (error.name === 'CanceledError') {
        return thunkAPI.rejectWithValue('ABORTED');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async ({ id }, thunkAPI) => {
    const token = getToken(thunkAPI);
    if (!token) {
      return thunkAPI.rejectWithValue('No token found');
    }
    try {
      const response = await swigger.delete(`contacts/${id}`);
      return response.data;
    } catch (error) {
      if (error.name === 'CanceledError') {
        return thunkAPI.rejectWithValue('ABORTED');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async ({ id, name, number }, thunkAPI) => {
    const token = getToken(thunkAPI);
    if (!token) {
      return thunkAPI.rejectWithValue('No token found');
    }
    try {
      const response = await swigger.patch(`contacts/${id}`, { name, number });
      return response.data;
    } catch (error) {
      if (error.name === 'CanceledError') {
        return thunkAPI.rejectWithValue('ABORTED');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
