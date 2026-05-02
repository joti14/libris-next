'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {
    const pathname = usePathname();
    // console.log(pathname, 'pathname')

    const isActive = href === pathname;
    return (
        <div>
            <Link href={href}
            className={`${isActive && 'text-yellow-600'}`}>
                {children}
            </Link>
        </div>
    );
};

export default NavLink;