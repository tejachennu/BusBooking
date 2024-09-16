import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { authenticateUser } from "../../slices/authSlice"; // Import the authentication thunk
import Logo from "../../assets/Logo1.png.jpg";
import Bus2 from "../../assets/bus3.png";
import { toast } from "react-toastify"; // Import toast for notifications

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated } = useSelector((state) => state.auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission for login
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const userCredentials = { email, password };
      await dispatch(authenticateUser(userCredentials));

      if (isAuthenticated) {
        toast.success("Login successful!");
        navigate("/"); // Navigate to home or dashboard after successful login
      }
    } catch (err) {
      toast.error(error || "Failed to log in.");
    }
  };

  // Animation variants for background
  const backgroundVariants = {
    initial: { x: "100%" },
    animate: {
      x: "-50%",
      transition: {
        duration: 4,
        ease: "linear",
      },
    },
  };

  return (
    <section className="flex items-center justify-center min-h-screen mb-4 bg-gray-50 md:mt-[8ch] dark:bg-gray-900 relative">
      {/* Animated background */}
      <motion.div
        className="z-0 absolute w-full md:w-[70%] h-full rounded-md flex items-end justify-end md:absolute md:top-0 md:-right-28 lg:-right-48 overflow-hidden"
        variants={backgroundVariants}
        initial="initial"
        animate="animate"
      >
        <motion.img
          className="w-full aspect-auto md:aspect-[4/2] object-contain"
          src={Bus2}
          alt="bus image"
        />
      </motion.div>

      {/* Form content */}
      <div className="z-10 flex flex-col items-center justify-center w-full max-w-md px-6 py-8 mx-auto mt-4">
        <div className="w-full bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 sm:p-8">
            <Link to="/login" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
              <img
                className="w-full mt-4 mr-2 bg-blend-screen"
                src={Logo}
                alt="Company Logo"
              />
            </Link>
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login
            </h1>

            {/* Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-violet-500 focus:border-violet-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-violet-500 focus:border-violet-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full text-white bg-violet-600 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>

              {/* Create an account link */}
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="font-medium text-violet-600 hover:underline dark:text-violet-500"
                >
                  Signup
                </Link>
              </p>
            </form>

            {/* Error message */}
            {error && typeof error === "object" && (
  <p className="text-sm text-red-500">
    {error.title}
  </p>
)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
