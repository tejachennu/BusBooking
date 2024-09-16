import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../../assets/Logo1.png.jpg";
import Bus2 from "../../assets/bus3.png";
import { registerUser } from "../../slices/registerSlice";

function Signup() {
  const dispatch = useDispatch();
  const { loading, error, isAuthenticated } = useSelector((state) => state.register);
  const [mobileNumber, setMobileNumber] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate(`/OtpVerification?email=${encodeURIComponent(email)}`);
      // Clear form fields after successful registration
      setMobileNumber('');
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }
  }, [isAuthenticated, navigate, email]);

  // Notify function for toast messages
  const notify = (message, type = "error") => {
    toast(message, {
      type: type,
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  // Form validation functions with notify for errors
  const validateMobileNumber = (number) => {
    const regex = /^[0-9]{10}$/;
    if (!regex.test(number)) {
      setMobileError('Mobile number must be 10 digits.');
      notify('Mobile number must be 10 digits.');
      return false;
    }
    setMobileError('');
    return true;
  };

  const validateName = (name) => {
    if (name.trim().length === 0) {
      setNameError('Name is required.');
      notify('Name is required.');
      return false;
    }
    setNameError('');
    return true;
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setEmailError('Invalid email format.');
      notify('Invalid email format.');
      return false;
    }
    setEmailError('');
    return true;
  };

  const validatePassword = (password) => {
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
      notify('Password must be at least 6 characters long.');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match.');
      notify('Passwords do not match.');
      return false;
    }
    setConfirmPasswordError('');
    return true;
  };

  // Handle register form submission
  const handleRegister = (e) => {
    e.preventDefault();
    const isMobileValid = validateMobileNumber(mobileNumber);
    const isNameValid = validateName(name);
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const isConfirmPasswordValid = validateConfirmPassword(password, confirmPassword);

    if (isMobileValid && isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
      dispatch(registerUser({ mobileNumber, name, email, password }));
    }
  };

  // Handle errors from the backend during registration
  useEffect(() => {
    if (error) {
      notify(error);
    }
  }, [error]);

  // Animation settings for the bus image
  const backgroundVariants = {
    initial: { x: "100%" },
    animate: {
      x: "-40%",
      transition: {
        duration: 4,
        ease: "linear",
      },
    },
  };

  return (
    <section className="flex items-center justify-center min-h-screen mb-4 bg-gray-50 md:mt-[8ch] dark:bg-gray-900 relative">
      {/* Toast container for notifications */}
      <ToastContainer />

      <motion.div 
        className="z-0 absolute w-full md:w-[70%] h-full rounded-md flex items-end justify-end md:absolute md:top-0 md:-right-28 lg:-right-48 overflow-hidden"
        variants={backgroundVariants}
        initial="initial"
        animate="animate"
      >
        <motion.img 
          className="w-full aspect-auto md:aspect-[4/2] object-contain"
          src={Bus2} 
          alt='bus image'
        />
      </motion.div>

      <div className="z-10 flex flex-col items-center justify-center w-full max-w-md px-6 py-8 mx-auto mt-4">
        <div className="w-full bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 sm:p-8">
            <Link
              to="/login"
              className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <img
                className="w-[50%] mt-4 mr-2 bg-blend-screen"
                src={Logo} 
                alt="Company Logo"
              />
            </Link>
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>

            {/* Registration Form */}
            <form className="space-y-4" onSubmit={handleRegister}>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`block w-full p-2.5 text-sm ${nameError ? 'border-red-500' : 'border-gray-300'} bg-gray-50 border rounded-lg`}
                  placeholder="Name"
                  required
                />
                {nameError && <p className="text-sm text-red-500">{nameError}</p>}
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`block w-full p-2.5 text-sm ${emailError ? 'border-red-500' : 'border-gray-300'} bg-gray-50 border rounded-lg`}
                  placeholder="name@company.com"
                  required
                />
                {emailError && <p className="text-sm text-red-500">{emailError}</p>}
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile Number</label>
                <input
                  type="text"
                  name="number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  className={`block w-full p-2.5 text-sm ${mobileError ? 'border-red-500' : 'border-gray-300'} bg-gray-50 border rounded-lg`}
                  placeholder="+91"
                  required
                />
                {mobileError && <p className="text-sm text-red-500">{mobileError}</p>}
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`block w-full p-2.5 text-sm ${passwordError ? 'border-red-500' : 'border-gray-300'} bg-gray-50 border rounded-lg`}
                  placeholder="••••••••"
                  required
                />
                {passwordError && <p className="text-sm text-red-500">{passwordError}</p>}
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                <input
                  type="password"
                  name="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`block w-full p-2.5 text-sm ${confirmPasswordError ? 'border-red-500' : 'border-gray-300'} bg-gray-50 border rounded-lg`}
                  placeholder="••••••••"
                  required
                />
                {confirmPasswordError && <p className="text-sm text-red-500">{confirmPasswordError}</p>}
              </div>

              <button
                type="submit"
                className="w-full text-white bg-violet-600 hover:bg-violet-700 focus:ring-4 focus:ring-violet-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                {loading ? 'Registering...' : 'Create an account'}
              </button>
            </form>

            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?{' '}
              <Link
                to="/login"
                className="font-medium text-violet-600 hover:underline dark:text-violet-500"
              >
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
