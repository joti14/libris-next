import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import Books from './Books';

const getBooks = async () => {
    const res = await fetch('https://libris-next.vercel.app/data.json');
    const data = await res.json();
    return data;
}

const FeaturedBooks = async () => {
    const books = await getBooks();

    return (
        <div className='container mx-auto py-10 md:py-15 px-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold'>
                    Featured <span className='text-red-800 italic'>Books</span>
                </h1>
                <Link href={'/all-books'}>
                    <h3 className='text-sm md:text-base text-red-800 flex gap-1 items-center'>
                        See all books<FaArrowRightLong />
                    </h3>
                </Link>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-6 md:mt-10'>
                {books.slice(0, 4).map(book => <Books key={book.id} book={book} />)}
            </div>
        </div>
    );
};

export default FeaturedBooks;