import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaYoutube } from 'react-icons/fa';
import { FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6';
import { IoIosMail, IoLogoYoutube } from 'react-icons/io';

const Footer = () => {
    return (
        <div className='bg-[#1a1208] py-10'>
            <div className='max-w-7xl mx-auto grid grid-cols-10 gap-5 justify-center items-center'>
                <div className='text-white col-span-4 space-y-4'>
                    <h2 className='text-4xl font-bold '>Lib<span className='text-yellow-700'>ris</span></h2>
                    <p className='max-w-sm'>A seamless digital library experience for every reader. Borrow, read, and discover — all in one place.</p>
                    {/* socials */}
                    <div className='flex gap-2 text-white text-2xl'>
                        <FaLinkedin />
                        <FaSquareInstagram  />
                        <IoLogoYoutube />

                        <FaSquareXTwitter />
                    </div>
                </div>
                <div className=' text-white text-lg col-span-2'>
                    <h2 className='hover:text-yellow-700 cursor-pointer font-bold'>About Us</h2>
                    <p className='hover:text-yellow-700 cursor-pointer'>contact</p>
                    <p className='hover:text-yellow-700 cursor-pointer'>FAQ</p>
                    <p className='hover:text-yellow-700 cursor-pointer'>How It Works</p>
                    <p className='hover:text-yellow-700 cursor-pointer'>Who We Are</p>
                    <p className='hover:text-yellow-700 cursor-pointer'>Reviews</p>
                </div>
                <div className=' text-white text-lg col-span-2'>
                    <h2 className='hover:text-yellow-700 cursor-pointer font-bold'>Support</h2>
                    <p className='hover:text-yellow-700 cursor-pointer'>Help Center</p>
                    <p className='hover:text-yellow-700 cursor-pointer'>Terms</p>
                    <p className='hover:text-yellow-700 cursor-pointer'>Privacy</p>
                    <p className='hover:text-yellow-700 cursor-pointer'>Security</p>
                </div>
                <div className=' text-white text-lg col-span-2'>
                    <h2 className='hover:text-yellow-700 cursor-pointer font-bold'>Contact Us</h2>
                    <p className='hover:text-yellow-700 cursor-pointer flex gap-2 items-center'><IoIosMail />hello@libris.com</p>
                    <p className='hover:text-yellow-700 cursor-pointer flex gap-2 items-center'><FaPhoneAlt />+1 (800) 555-READ</p>
                    <p className='hover:text-yellow-700 cursor-pointer flex gap-2 items-center'><FaMapMarkerAlt />123 Library Lane</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;