import Books from '@/components/FeaturedBooks/Books';
import FilterBooks from '@/components/FilterBooks';
import SearchBooks from '@/components/SearchBooks';
import React from 'react';

const getBooks = async () => {
    const res = await fetch('https://libris-next.vercel.app/data.json');
    const data = await res.json();
    return data;
}

const AllBooksPage = async ({ searchParams }) => {
    const books = await getBooks();
    const sp = await searchParams;
    const search = sp?.search || '';
    const categories = sp?.category ? (Array.isArray(sp.category) ? sp.category : [sp.category]) : [];

    let filteredBooks = books;

    if (search) {
        filteredBooks = filteredBooks.filter(book =>
            book.title.toLowerCase().includes(search.toLowerCase()) ||
            book.author.toLowerCase().includes(search.toLowerCase())
        );
    }

    if (categories.length > 0) {
        filteredBooks = filteredBooks.filter(book =>
            categories.some(cat => book.category.toLowerCase() === cat.toLowerCase())
        );
    }

    return (
        <div className='container mx-auto'>
            <div className='py-10'>
                <h2 className='text-3xl font-bold text-red-800 mb-2'>All Books</h2>
                <p className='text-zinc-400 mb-10'>Discover our complete collection — from gripping stories to cutting-edge science.</p>
            </div>

            <div className='flex gap-5 items-start'>

                <div className='shrink-0'>
                    <FilterBooks />
                </div>

                <div className='flex-1'>
                    <SearchBooks />

                    <div className='grid grid-cols-3 gap-4'>
                        {filteredBooks.map(book => <Books key={book.id} book={book} />)}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AllBooksPage;