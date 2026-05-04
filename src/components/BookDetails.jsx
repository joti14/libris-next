'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { RiBookShelfLine } from 'react-icons/ri';
import { toast } from 'react-toastify';

const categoryStyles = {
    Story: 'badge-soft badge-error',
    Tech: 'badge-soft badge-success',
    Science: 'badge-soft badge-info',
};

const BookDetails = ({ book }) => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-0 py-6 sm:py-8 lg:py-10">
            <div className="flex gap-3 sm:gap-5 items-center">
                <Link
                    href="/"
                    className="back-animation border px-4 sm:px-5 py-2 rounded-md flex gap-2 items-center text-red-800 cursor-pointer hover:bg-red-800 hover:text-white"
                >
                    <FaArrowLeftLong /> Back
                </Link>

                <h3 className="font-bold text-xl sm:text-2xl text-red-800">
                    Book Details
                </h3>
            </div>

            <div className="max-w-5xl mx-auto py-8 sm:py-10 lg:py-15 flex flex-col md:flex-row gap-6 sm:gap-8 lg:gap-10">
                <div className="shrink-0 flex justify-center md:justify-start">
                    <Image
                        src={book.image_url}
                        alt={book.title}
                        width={300}
                        height={300}
                        unoptimized
                        className="rounded-2xl w-56 sm:w-64 md:w-72 lg:w-75 h-auto"
                    />
                </div>

                <div className="flex-1 space-y-4 sm:space-y-5">
                    <h2 className="text-2xl sm:text-3xl font-medium">
                        {book.title}
                    </h2>

                    <p className="text-zinc-700 text-sm sm:text-base">
                        by {book.author}
                    </p>

                    <div className="flex flex-wrap gap-3 sm:gap-4 items-center">
                        {categoryStyles[book.category] && (
                            <span className={`badge border-none ${categoryStyles[book.category]}`}>
                                {book.category}
                            </span>
                        )}

                        <span className="badge bg-base-200 text-zinc-700">
                            Fiction
                        </span>

                        <span className="badge bg-base-200 text-zinc-700">
                            <FaStar /> {book.rating}
                        </span>
                    </div>

                    <p className="text-zinc-700 leading-relaxed text-sm sm:text-base">
                        {book.description}
                    </p>

                    <p className="bg-amber-100 p-4 sm:p-5 text-zinc-700 border border-amber-200 rounded-md text-sm sm:text-base">
                        <span className="text-red-800 font-bold text-lg sm:text-xl">
                            {book.available_quantity}{' '}
                        </span>
                        copies currently available to borrow
                    </p>

                    <button
                        onClick={() =>
                            toast(`Successfully borrowed "${book.title}"!`, {
                                className: "bg-zinc-900 text-slate-300 rounded-2xl border-zinc-700"
                            })
                        }
                        className="borrow-animation btn btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-red-900 text-white hover:bg-red-700"
                    >
                        <RiBookShelfLine /> Borrow This Book
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;