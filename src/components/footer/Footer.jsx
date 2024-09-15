import React from "react";
import { FaMapPin } from "react-icons/fa6";
import { Link } from "react-router-dom";

import Logo from "../../assets/Logo1.png.jpg";

const Footer = () => {
  return (
    <footer className="w-full px-4 py-8 lg:px-28 md:px-16 sm:px-7 bg-neutral-200/60 dark:bg-neutral-900/70">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-5">
        {/* Logo and Description */}
        <div className="col-span-2 space-y-5">
          <Link
            to="/"
            className="text-xl font-bold text-neutral-800 dark:text-neutral-200"
          >
            <img src={Logo} alt="logo" className="object-contain h-auto w-44" />
          </Link>
          <p className="pr-10 text-base font-normal text-neutral-600 dark:text-neutral-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            placeat corporis, rerum laborum optio laboriosam perferendis sit
            culpa doloribus, tempora aliquam repellendus reprehenderit, ullam
            alias.
          </p>
        </div>

        {/* About Us Section */}
        <div className="space-y-5 max-md:col-span-2 lg:space-y-7">
          <h1 className="text-lg font-medium">About Us</h1>
          <ul className="space-y-2 text-base font-normal text-neutral-600 dark:text-neutral-500">
            <li>
              <Link
                to="#"
                className="duration-300 ease-in-out hover:text-violet-600"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="duration-300 ease-in-out hover:text-violet-600"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="duration-300 ease-in-out hover:text-violet-600"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="duration-300 ease-in-out hover:text-violet-600"
              >
                Terms and Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="space-y-5 max-md:col-span-2 lg:space-y-7">
          <h1 className="text-lg font-medium">Services</h1>
          <ul className="space-y-2 text-base font-normal text-neutral-600 dark:text-neutral-500">
            <li>
              <Link
                to="#"
                className="duration-300 ease-in-out hover:text-violet-600"
              >
                Safety Guarantee
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="duration-300 ease-in-out hover:text-violet-600"
              >
                FAQ & Support
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="duration-300 ease-in-out hover:text-violet-600"
              >
                Luxury Buses
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="duration-300 ease-in-out hover:text-violet-600"
              >
                Enough Facilities
              </Link>
            </li>
          </ul>
        </div>

        {/* Get In Touch Section */}
        <div className="space-y-5 lg:space-y-7">
          <h1 className="text-lg font-medium">Get In Touch</h1>
          <div className="space-y-4">
            {/* Contact Information */}
            <div className="flex gap-x-2">
              <FaMapPin className="text-2xl text-neutral-600 dark:text-neutral-500" />
              <div className="flex flex-col">
                <p className="text-xs text-neutral-600 dark:text-neutral-500">
                  For Support & Reservations
                </p>
                <p className="text-sm text-neutral-700 dark:text-neutral-400">
                  123, Main Street, Anytown, USA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
