// components/BookDetails.jsx
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
        <div className="container mx-auto py-10">
            <div className="flex gap-5 items-center">
                <Link href="/">
                    <button className="border px-5 py-2 rounded-md flex gap-2 items-center text-red-800 cursor-pointer hover:bg-red-800 hover:text-white">
                        <FaArrowLeftLong /> Back
                    </button>
                </Link>
                <h3 className="font-bold text-2xl text-red-800">Book Details</h3>
            </div>

            <div className="max-w-5xl mx-auto py-15 flex gap-10">
                <div className="shrink-0">
                    <Image
                        src={book.image_url}
                        alt={book.title}
                        width={300}
                        height={300}
                        unoptimized
                        className="rounded-2xl"
                    />
                </div>
                <div className="flex-1 space-y-5">
                    <h2 className="text-3xl font-medium">{book.title}</h2>
                    <p className="text-zinc-700">by {book.author}</p>
                    <div className="flex gap-4 items-center">
                        {categoryStyles[book.category] && (
                            <span className={`badge border-none ${categoryStyles[book.category]}`}>
                                {book.category}
                            </span>
                        )}
                        <span className="badge bg-base-200 text-zinc-700">Fiction</span>
                        <span className="badge bg-base-200 text-zinc-700">
                            <FaStar /> {book.rating}
                        </span>
                    </div>
                    <p className="text-zinc-700 leading-relaxed">{book.description}</p>
                    <p className="bg-amber-100 p-5 text-zinc-700 border border-amber-200 rounded-md">
                        <span className="text-red-800 font-bold text-xl">
                            {book.available_quantity}{' '}
                        </span>
                        copies currently available to borrow
                    </p>
                    <button
                        onClick={() =>
                            toast(`Successfully borrowed "${book.title}"!`,{
                                className:"bg-zinc-900 text-slate-300 rounded-2xl border-zinc-700 "
                                
                        })
                        }
                        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-red-900 text-white hover:bg-red-700"
                    >
                        <RiBookShelfLine /> Borrow This Book
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;