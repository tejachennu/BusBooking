import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice';
import otpVerification from '../slices/otpVerificationSlice';
import password from '../slices/passwordSlice';
import register from '../slices/registerSlice';
import resentOtp from '../slices/resentOtpSlice';


const store = configureStore({
  reducer: {
    auth: authReducer,
    otp: otpVerification,
    password: password,
    register: register,
    resent: resentOtp
  },
});

export default store;
