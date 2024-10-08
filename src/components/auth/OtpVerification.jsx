import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { otpVerification } from '../../slices/otpVerificationSlice';
import { otpResentMail } from '../../slices/resentOtpSlice';

const OtpVerification = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { loading, error, isAuthenticated } = useSelector((state) => state.otp);
  const { isSent } = useSelector((state) => state.resent);

  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get('email');
  const [otp, setOtp] = useState(new Array(5).fill(''));
  const inputRefs = useRef([]);
  const [canResend, setCanResend] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);

  // Handle OTP input changes
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) { // Only allow digits
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Automatically focus the next input
      if (value && index < otp.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  // Handle backspace and delete to move focus
  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' || e.key === 'Delete') {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);

      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  // Handle paste event for OTP
  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text');
    if (pasteData.length === otp.length && /^\d*$/.test(pasteData)) {
      setOtp(pasteData.split(''));
      inputRefs.current[otp.length - 1]?.focus();
    }
  };

  // Resend OTP handler
  const handleResend = () => {
    setCanResend(false);
    setTimeLeft(60);
    dispatch(otpResentMail({ email }));
  };

  // Handle OTP form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const code = otp.join('');
    dispatch(otpVerification({ email, code }));
  };

  // Navigate on successful OTP verification
  useEffect(() => {
    if (isAuthenticated) {
      toast.success('You registered successfully');
      const timer = setTimeout(() => {
        navigate('/');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isAuthenticated, navigate]);

  // Resend OTP cooldown timer
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  return (
    <div>
      <div className="flex flex-col content-center justify-center max-w-md px-4 py-10 mx-auto text-center bg-white shadow sm:px-8 rounded-xl">
        <header className="mb-8">
          <h1 className="mb-1 text-2xl font-bold">Email Verification</h1>
          <p className="text-[15px] text-slate-500">Enter the 4-digit verification code that was sent to your email.</p>
        </header>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-center gap-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                className="p-4 text-2xl font-extrabold text-center border border-transparent rounded outline-none appearance-none w-14 h-14 text-slate-900 bg-slate-100 hover:border-slate-200 focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onPaste={handlePaste}
                ref={(el) => (inputRefs.current[index] = el)}
              />
            ))}
          </div>
          <div className="max-w-[260px] mx-auto mt-4">
            <button
              type="submit"
              className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150"
              disabled={loading}
            >
              {loading ? 'Verifying...' : 'Verify Account'}
            </button>
          </div>
          {error && <h1 className="font-bold text-red-500">{error}</h1>}
        </form>
        <div className="mt-4 text-sm text-slate-500">
          Didn't receive the code?{' '}
          <button 
            className="font-medium text-indigo-500 hover:text-indigo-600" 
            onClick={handleResend} 
            disabled={!canResend}>
            Resend {canResend ? "" : `(${timeLeft}s)`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
