import React from 'react';
import Image from 'next/image';
import banner from '@/assets/banner.png';
import books from '@/assets/books.jpg';
import Link from 'next/link';

const Banner = () => {
    return (
        <div className="relative h-[65vh] w-full">
            <Image
                src={banner}
                alt="Banner"
                fill
                sizes="100vw"
                priority
                className="object-cover"
            />
            <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <div className="text-white max-w-xl">
                        <div className="border-2 border-yellow-700 inline-block px-5 py-1 text-yellow-700 mb-4">✦ Digital Library Platform</div>
                        <h1 className="text-4xl md:text-5xl font-bold">Find Your <span className='text-yellow-700 italic'>Next Read</span> — Anywhere, Anytime</h1>
                        <p className="py-6 text-gray-200">
                            Explore thousands of curated books across genres. Borrow digitally, read instantly. Your literary adventure begins here.
                        </p>
                        <div className='flex gap-4'>
                            <Link href={'/all-books'}>
                                <button className="px-5 py-3 rounded-sm bg-red-900 text-white hover:bg-red-700 cursor-pointer">Browse Now</button>
                            </Link>
                            <Link href={'/all-books'}>
                                <button className="px-5 py-3 rounded-sm border hover:border-yellow-500 hover:text-yellow-500 cursor-pointer">Explore Categories</button>
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:block relative w-[400px] h-[400px]">
                        <Image
                            src={books}
                            alt="Books"
                            fill
                            sizes="400px"
                            className="rounded-lg object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;