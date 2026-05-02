import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

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

const AllBooksPage = async () => {
    const books = await getBooks();
    console.log(books);

    return (
        <div className='container mx-auto'>
                <div className=' py-10'>
                    <h2 className='text-3xl font-bold text-red-800 mb-2'>All Books</h2>
                    <p className='text-zinc-400'>Discover our complete collection — from gripping stories to cutting-edge science.</p>
            </div>
            <div className='grid grid-cols-4 gap-4 mt-10'>
                {
                    books.map(book => (
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

export default AllBooksPage;