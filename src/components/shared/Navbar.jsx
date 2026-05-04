'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from './NavLink';
import userAvatar from '@/assets/user.png';
import Image from 'next/image';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { Avatar } from '@heroui/react';

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleSignOut = async () => {
        await authClient.signOut();
        router.push('/signin');
    };

    return (
        <div className='bg-[#1a1208]'>
            <div className='flex justify-between items-center container mx-auto py-5 text-white px-4'>
                <div>
                    <h2 className='animate__animated animate__bounce text-4xl font-bold'>
                        Lib<span className='text-yellow-700'>ris</span>
                    </h2>
                </div>

                <div className='hidden lg:block'>
                    <ul className='flex justify-between items-center gap-5 text-lg'>
                        <li><NavLink href={'/'}>Home</NavLink></li>
                        <li><NavLink href={'/all-books'}>All Books</NavLink></li>
                        <li><NavLink href={'/profile'}>My Profile</NavLink></li>
                    </ul>
                </div>

                <div className='flex items-center gap-3'>
                    {isPending ? (
                        <span className="loading loading-ring loading-lg"></span>
                    ) : user ? (
                        <>
                            <h2 className='text-sm md:text-base'>Welcome, {user.name}</h2>
                            <Avatar size="sm">
                                <Avatar.Image
                                    alt={user?.name}
                                    src={user?.image || userAvatar}
                                    referrerPolicy="no-referrer"
                                />
                                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                            </Avatar>

                            <button
                                onClick={handleSignOut}
                                className='hidden lg:inline-flex btn btn-outline btn-warning text-yellow-700 text-lg px-8 hover:text-black'
                            >
                                Sign Out
                            </button>
                        </>
                    ) : (
                        <Link href={"/signin"}>
                            <button className='btn btn-outline btn-warning text-yellow-700 text-xs md:text-sm lg:text-lg px-3 md:px-5 lg:px-8 hover:text-black'>
                                Sign In
                            </button>
                        </Link>
                    )}

                    <button
                        className='lg:hidden flex flex-col justify-center items-center gap-1.5 p-2'
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className='lg:hidden bg-[#1a1208] border-t border-yellow-900 px-4 pb-5 text-white'>
                    <ul className='flex flex-col gap-4 text-lg pt-4'>
                        <li><NavLink href={'/'}>Home</NavLink></li>
                        <li><NavLink href={'/all-books'}>All Books</NavLink></li>
                        <li><NavLink href={'/profile'}>My Profile</NavLink></li>
                    </ul>

                    {!isPending && user && (
                        <div className='mt-4'>
                            <button
                                onClick={handleSignOut}
                                className='btn btn-outline btn-warning text-yellow-700 text-xs md:text-sm px-3 md:px-5 hover:text-black w-full'
                            >
                                Sign Out
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Navbar;