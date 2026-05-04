import React from 'react';
import BookDetails from '@/components/BookDetails';

const BookDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch('https://libris-next.vercel.app/data.json');
    const books = await res.json();

    const book = books.find(b => b.id == id);

    return <BookDetails book={book} />;
};

export default BookDetailsPage;