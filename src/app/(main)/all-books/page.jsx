import Books from '@/components/FeaturedBooks/Books';
import FilterBooks from '@/components/FilterBooks';
import SearchBooks from '@/components/SearchBooks';
import React from 'react';

const getBooks = async () => {
    const res = await fetch('https://libris-next.vercel.app/data.json');
    const data = await res.json();
    return data;
};

const AllBooksPage = async ({ searchParams }) => {
    const books = await getBooks();
    const { category, search } = await searchParams;

    let filteredBooks = books;

    if (category) {
        filteredBooks = filteredBooks.filter(
            book => book.category.toLowerCase() === category.toLowerCase()
        );
    }

    if (search) {
        filteredBooks = filteredBooks.filter(
            book =>
                book.title.toLowerCase().includes(search.toLowerCase()) ||
                book.author.toLowerCase().includes(search.toLowerCase())
        );
    }

    return (
        <div className="container mx-auto px-4 md:px-0">
            <div className="py-10">
                <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-2">All Books</h2>
                <p className="text-zinc-400 mb-10">
                    Discover our complete collection — from gripping stories to cutting-edge science.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-5 items-start">
                <div className="w-full lg:w-72 shrink-0">
                    <FilterBooks activeCategory={category} />
                </div>

                <div className="flex-1 min-w-0">
                    <SearchBooks />

                    {filteredBooks.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                            {filteredBooks.map(book => (
                                <Books key={book.id} book={book} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-zinc-400 text-lg mt-10">
                            No books found.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AllBooksPage;