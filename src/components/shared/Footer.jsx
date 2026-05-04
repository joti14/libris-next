import React from 'react';
import { FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6';
import { IoIosMail, IoLogoYoutube } from 'react-icons/io';

const Footer = () => {
  return (
    <footer className="bg-[#1a1208] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-8">

        <div className="text-white space-y-4 md:col-span-2 lg:col-span-4">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Lib<span className="text-yellow-700">ris</span>
          </h2>
          <p className="max-w-sm text-sm sm:text-base">
            A seamless digital library experience for every reader. Borrow, read,
            and discover — all in one place.
          </p>

          <div className="flex gap-4 text-white text-2xl">
            <FaLinkedin className="hover:text-yellow-700 cursor-pointer transition" />
            <FaSquareInstagram className="hover:text-yellow-700 cursor-pointer transition" />
            <IoLogoYoutube className="hover:text-yellow-700 cursor-pointer transition" />
            <FaSquareXTwitter className="hover:text-yellow-700 cursor-pointer transition" />
          </div>
        </div>

        <div className="text-white text-base sm:text-lg space-y-2 md:col-span-1 lg:col-span-2">
          <h2 className="hover:text-yellow-700 cursor-pointer font-bold">About Us</h2>
          <p className="hover:text-yellow-700 cursor-pointer">Contact</p>
          <p className="hover:text-yellow-700 cursor-pointer">FAQ</p>
          <p className="hover:text-yellow-700 cursor-pointer">How It Works</p>
          <p className="hover:text-yellow-700 cursor-pointer">Who We Are</p>
          <p className="hover:text-yellow-700 cursor-pointer">Reviews</p>
        </div>

        <div className="text-white text-base sm:text-lg space-y-2 md:col-span-1 lg:col-span-2">
          <h2 className="hover:text-yellow-700 cursor-pointer font-bold">Support</h2>
          <p className="hover:text-yellow-700 cursor-pointer">Help Center</p>
          <p className="hover:text-yellow-700 cursor-pointer">Terms</p>
          <p className="hover:text-yellow-700 cursor-pointer">Privacy</p>
          <p className="hover:text-yellow-700 cursor-pointer">Security</p>
        </div>

        <div className="text-white text-base sm:text-lg space-y-2 md:col-span-2 lg:col-span-2">
          <h2 className="hover:text-yellow-700 cursor-pointer font-bold">Contact Us</h2>
          <p className="hover:text-yellow-700 cursor-pointer flex gap-2 items-center">
            <IoIosMail />
            hello@libris.com
          </p>
          <p className="hover:text-yellow-700 cursor-pointer flex gap-2 items-center">
            <FaPhoneAlt />
            +1 (800) 555-READ
          </p>
          <p className="hover:text-yellow-700 cursor-pointer flex gap-2 items-center">
            <FaMapMarkerAlt />
            123 Library Lane
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;