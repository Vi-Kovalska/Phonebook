import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  theme: 'light',
};
const slice = createSlice({
  name: 'themeToggle',
  initialState,
  reducers: {
      changeTheme: (state, { payload }) => {
          state.theme = payload;
    },
  },
});

export const themeToggleReducer = slice.reducer;
export const { changeTheme } = slice.actions;