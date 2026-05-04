import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const categoryStyles = {
    Story: 'badge-soft badge-error',
    Tech: 'badge-soft badge-success',
    Science: 'badge-soft badge-info',
};

const Books = ({ book }) => {
    return (
        <div className="card border border-slate-100 bg-base-100 shadow-sm transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <div className='relative w-full aspect-2/2 sm:aspect-3/4 md:aspect-square'>
                <Image
                    src={book.image_url}
                    fill
                    alt={book.title}
                    className='object-contain rounded-xl'
                    unoptimized
                />
            </div>
            <div className="card-body p-3 md:p-4">
                <h2 className="card-title text-base md:text-lg">{book.title}</h2>
                <p className='text-zinc-500 text-sm md:text-base'>{book.author}</p>
                {categoryStyles[book.category] && (
                    <div className={`badge border-none text-xs md:text-sm ${categoryStyles[book.category]}`}>
                        {book.category}
                    </div>
                )}
                <p className='text-xs md:text-sm text-zinc-400'>{book.available_quantity} copies available</p>
                <Link href={`/all-books/${book.id}`}>
                    <button className='btn w-full bg-red-950 text-white hover:bg-red-800'>
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Books;