import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const getBooks = async () => {
    const res = await fetch('https://libris-next.vercel.app/data.json');
    const data = await res.json();
    return data;
}

const categoryStyles = {
    Story: 'badge-soft badge-error',
    Tech: 'badge-soft badge-success',
    Science: 'badge-soft badge-info',
};

const FeaturedBooks = async () => {
    const books = await getBooks();
    console.log(books);

    return (
        <div className='container mx-auto py-15'>
            <div className='flex justify-between items-center'>
                <h1 className='text-4xl font-bold'>Featured <span className='text-red-800 italic'>Books</span></h1>
                <Link href={'/all-books'}>
                    <h3 className='text-base text-red-800 flex gap-1 items-center'>See all books<FaArrowRightLong /></h3>
                </Link>
            </div>
            <div className='grid grid-cols-4 gap-4 mt-10'>
                {
                    books.slice(0, 4).map(book => (
                        <div key={book.id} className="card border border-slate-100 bg-base-100 shadow-sm transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                            <div className='relative w-full aspect-square'>
                                <Image
                                    src={book.image_url}
                                    fill
                                    alt={book.title}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className='object-contain rounded-xl'
                                    unoptimized
                                />
                            </div>
                            <div className="card-body">
                                <h2 className="card-title">{book.title}</h2>
                                <p className='text-zinc-500'>{book.author}</p>
                                {categoryStyles[book.category] && (
                                    <div className={`badge  border-none ${categoryStyles[book.category]}`}>
                                        {book.category}
                                    </div>
                                )}
                                <p className='text-sm text-zinc-400'>{book.available_quantity} copies available</p>
                                <Link href={'/bookDetailsPage'}>
                                    <button className='btn w-full bg-red-950 text-white hover:bg-red-800'>View Details</button>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default FeaturedBooks;