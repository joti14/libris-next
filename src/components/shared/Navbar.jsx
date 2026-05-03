'use client'
import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';
import userAvatar from '@/assets/user.png';
import Image from 'next/image';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    const router = useRouter();

    const handleSignOut = async () => {
        await authClient.signOut();
        router.push('/signin');
    };

    return (
        <div className='bg-[#1a1208]'>
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

                {isPending ? <span className="loading loading-ring loading-lg"></span>
                    : user ? (
                        <div className='flex items-center gap-2'>
                            <h2>Welcome, {user.name}</h2>
                            <Image
                                src={user.image || userAvatar}
                                alt='User avatar'
                                width={35}
                                height={35}
                                className='rounded-full'
                            />
                            <button
                                onClick={handleSignOut}
                                className='btn btn-outline btn-warning text-yellow-700 text-lg px-8 hover:text-black'
                            >
                                Sign Out
                            </button>
                        </div>
                    ) : (
                        <Link href={"/signin"}>
                            <button className='btn btn-outline btn-warning text-yellow-700 text-lg px-8 hover:text-black'>
                                Sign In
                            </button>
                        </Link>
                    )}
            </div>
        </div>
    );
};

export default Navbar;