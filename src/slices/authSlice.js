import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';

// Thunk to authenticate a user
export const authenticateUser = createAsyncThunk(
  'auth/authenticateUser',
  async (userCredentials, thunkAPI) => {
    try {
      const response = await axios.post('https://localhost:7122/api/AuthUser/authenticate', userCredentials);
      const data = response.data;

      // Store tokens in cookies if present in the response
      if (data.JWTToken && data.RefreshToken) {
        Cookies.set('JWTToken', data.JWTToken);
        Cookies.set('RefreshToken', data.RefreshToken);
      } else {
        return thunkAPI.rejectWithValue('Invalid token response');
      }

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Auth slice to manage login state
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authenticateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authenticateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(authenticateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
