import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for sending OTP
export const sendOtp = createAsyncThunk('password/sendOtp', async (email) => {
  const response = await axios.post('https://localhost:7122/api/AuthUser/sendotp', { email });
  return response.data;
});

// Async thunk for resetting password
export const resetPassword = createAsyncThunk('password/resetPassword', async (data) => {
  const response = await axios.post('https://localhost:7122/api/AuthUser/ForgotPassword', data);
  return response.data;
});

const passwordSlice = createSlice({
  name: 'password',
  initialState: {
    otpSent: false,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendOtp.fulfilled, (state) => {
        state.loading = false;
        state.otpSent = true;
      })
      .addCase(sendOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.loading = false;
        state.otpSent = false;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default passwordSlice.reducer;
