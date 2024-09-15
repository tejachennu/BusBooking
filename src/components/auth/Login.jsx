import React from "react";
import { Link } from "react-router-dom"; // Using Link for routing
import Logo from "../../assets/Logo1.png.jpg"; // Adjusted logo path
import Bus2 from "../../assets/bus3.png";
import { motion } from "framer-motion"; // framer-motion for animations

function Login() {

  // Animation variants for the background image
  const backgroundVariants = {
    initial: { x: "100%" }, // Start position (off-screen to the right)
    animate: {
      x: "-50%", // Slide the image to the left off-screen
      transition: {
        duration: 4, // Duration for the animation
        ease: "linear", // Smooth constant speed
      }
    }
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
          alt='bus image'
        />
      </motion.div>

      {/* Form content */}
      <div className="z-10 flex flex-col items-center justify-center w-full max-w-md px-6 py-8 mx-auto mt-4">
        <div className="w-full bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 sm:p-8">
            <Link to="/login" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
              <img
                className="w-full mt-4 mr-2 bg-blend-screen "
                src={Logo}
                alt="Company Logo"
              />
            </Link>
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login
            </h1>

            {/* Form */}
            <form className="space-y-4" action="#">
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
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full text-white bg-violet-600 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
              >
                Create an account
              </button>

              {/* Already have an account? */}
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Create an account?{" "}
                <Link
                  to="/signup"
                  className="font-medium text-violet-600 hover:underline dark:text-violet-500"
                >
                  Signup
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
