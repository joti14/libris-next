import React from 'react';
import { Spinner } from '@heroui/react';

const BookDetailsLoading = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-3 p-6 text-center">
      <div className="text-xl font-semibold text-red-800">Loading book details...</div>
      <Spinner color="warning" />
      <p className="text-sm text-zinc-500 max-w-sm">
        Please wait while we fetch the details for this book.
      </p>
    </div>
  );
};

export default BookDetailsLoading;
