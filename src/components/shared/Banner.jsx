import React from 'react';
import Image from 'next/image';
import banner from '@/assets/banner.png';
import books from '@/assets/books.jpg';
import Link from 'next/link';

const stats = [
    { value: '12K+', label: 'BOOKS' },
    { value: '3.2K', label: 'AUTHORS' },
    { value: '50K+', label: 'READERS' },
];

const Banner = () => {
    return (
        <div className="relative min-h-[50vh] md:min-h-[60vh] lg:h-[70vh] w-full">
            <Image
                src={banner}
                alt="Banner"
                fill
                sizes="100vw"
                priority
                className="object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center">
                <div className="container mx-auto px-4 md:px-6 flex items-center justify-between gap-6">
                    <div className="text-white w-full md:max-w-xl">
                        <div className="border-2 border-yellow-700 inline-block px-3 md:px-5 py-1 text-yellow-700 mb-3 md:mb-4 text-xs md:text-sm">
                            ✦ Digital Library Platform
                        </div>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                            Find Your{' '}
                            <span className="text-yellow-700 italic">Next Read</span> —
                            Anywhere, Anytime
                        </h1>
                        <p className="py-4 md:py-6 text-gray-200 text-sm sm:text-base">
                            Explore thousands of curated books across genres. Borrow
                            digitally, read instantly. Your literary adventure begins here.
                        </p>
                        <div className="flex gap-3 md:gap-4 flex-wrap">
                            <Link href="/all-books">
                                <button className="animate-pulse px-4 md:px-5 py-2 md:py-3 text-sm md:text-base rounded-sm bg-red-900 text-white hover:bg-red-700 cursor-pointer">
                                    Browse Now
                                </button>
                            </Link>
                            <Link href="/all-books">
                                <button className="px-4 md:px-5 py-2 md:py-3 text-sm md:text-base rounded-sm border hover:border-yellow-500 hover:text-yellow-500 cursor-pointer text-white">
                                    Explore Categories
                                </button>
                            </Link>
                        </div>

                        <div className="flex gap-8 md:gap-12 mt-8 md:mt-10">
                            {stats.map((stat) => (
                                <div key={stat.label} className="flex flex-col">
                                    <span className="text-2xl md:text-3xl font-bold text-white">
                                        {stat.value}
                                    </span>
                                    <span className="text-xs md:text-sm text-gray-400 tracking-wider mt-1">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:block relative shrink-0 w-64 h-64 lg:w-96 lg:h-96">
                        <Image
                            src={books}
                            alt="Books"
                            fill
                            sizes="(max-width: 1024px) 256px, 384px"
                            className="rounded-lg object-contain mix-blend-lighten"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;