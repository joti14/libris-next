import Books from '@/components/FeaturedBooks/Books';
import FilterBooks from '@/components/FilterBooks';
import SearchBooks from '@/components/SearchBooks';
import React from 'react';

export const metadata = {
  title: 'All Books | Libris',
  description: 'Browse all books by category, search titles and authors, and discover your next read.',
};

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
    <main className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 
        <div className="py-8 sm:py-10 md:py-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-800 mb-3">
            All Books
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
            Discover our complete collection — from gripping stories to cutting-edge science.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">

          <aside className="animate__animated animate__slideInLeft w-full lg:w-72 xl:w-80 lg:shrink-0">
            <div className="lg:sticky lg:top-24">
              <FilterBooks activeCategory={category} />
            </div>
          </aside>

          <section className="w-full flex-1 min-w-0">
 
            <div className="mb-6">
              <SearchBooks />
            </div>

            {filteredBooks.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
                {filteredBooks.map(book => (
                  <Books key={book.id} book={book} />
                ))}
              </div>
            ) : (
              <div className="min-h-75 flex items-center justify-center">
                <p className="text-center text-zinc-400 text-base sm:text-lg">
                  No books found.
                </p>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
};

export default AllBooksPage;