import Books from '@/components/FeaturedBooks/Books';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const getBooks = async () => {
    const res = await fetch('https://libris-next.vercel.app/data.json');
    const data = await res.json();
    return data;
}


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
                    books.map(book => <Books key={book.id} book={book} />
                        
                    )
                }
            </div>
        </div>
    );
};

export default AllBooksPage;