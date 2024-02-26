import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="flex flex-col items-center bg-neutral-200 text-center text-white dark:bg-neutral-600">
        <div className="container pt-9">
          <div className="mb-9 flex justify-center">
            <div className="flex gap-6 text-xl text-neutral-800 dark:text-neutral-200 cursor-pointer">
              <FaFacebookF href="www.facebook.com" />
              <FaTwitter />
              <AiOutlineGooglePlus />
              <AiFillInstagram />
              <FaLinkedinIn />
              <FaGithub />
            </div>
          </div>
        </div>

        <div className="w-full bg-neutral-300 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
          © 2024 Copyright :
          <a
            className="text-neutral-800 dark:text-neutral-400 ps-2 cursor-pointer"
            to="/"
          >
            Hotel Booking App
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
