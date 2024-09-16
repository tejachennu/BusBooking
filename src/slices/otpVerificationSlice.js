import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk for OTP verification
export const otpVerification = createAsyncThunk(
  'otp/otpVerification',
  async (userVerification, thunkAPI) => {
    try {
      const response = await axios.post('https://localhost:7122/api/AuthUser/VerifyEmail', {email:userVerification.email,verificationCode:userVerification.code});
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const otpVerificationSlice = createSlice({
  name: 'otp',
  initialState: {
    isAuthenticated: false,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(otpVerification.fulfilled, (state) => {
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(otpVerification.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(otpVerification.rejected, (state, action) => {
        state.error = action.payload;
        state.isAuthenticated = false;
        state.loading = false;
      });
  },
});

export default otpVerificationSlice.reducer;
