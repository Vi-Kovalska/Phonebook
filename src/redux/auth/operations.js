import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { swigger } from '../contacts/operations';

const setAuthHeader = token => {
  swigger.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  swigger.defaults.headers.common.Authorization = '';
};
export const register = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const { data } = await swigger.post('users/signup', {
        name,
        email,
        password,
      });
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const { data } = await swigger.post('users/login', {
        email,
        password,
      });
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await swigger.post('users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null)
      return thunkAPI.rejectWithValue('Token is not exist');
    try {
      setAuthHeader(persistedToken);
      const response = await swigger.get('users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
