import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';
import userAvatar from '@/assets/user.png';
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className=' bg-[#1a1208]'>
            <div className='flex justify-between items-center container mx-auto py-5 text-white'>
                <div>
                    <h2 className='text-4xl font-bold'>Lib<span className='text-yellow-700'>ris</span></h2>
                </div>
                <div>
                    <ul className='flex justify-between items-center gap-5 text-lg'>
                        <li>
                            <NavLink href={'/'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink href={'/all-books'}>All Books</NavLink>
                        </li>
                        <li>
                            <NavLink href={'/profile'}>My Profile</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='flex items-center gap-2'>
                    <Image src={userAvatar} alt='User avatar' width={40} height={40} className='rounded-full'/>
                    <button className='btn btn-outline btn-warning text-yellow-700 text-lg px-8 hover:text-black'>
                        <Link href={"/signup"}>SignUp</Link>
                    </button>
                    <button className='btn btn-outline btn-warning text-yellow-700 text-lg px-8 hover:text-black'>
                        <Link href={"/signin"}>SignIn</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;