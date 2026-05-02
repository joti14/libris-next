import React from 'react';
import { Spinner } from '@heroui/react';

const AllBooksLoading = () => {
    return (
        <div className="flex flex-col items-center gap-2 py-10">
            Loading all books...
            <Spinner color="warning" />
            <span className="text-xs text-muted">Fetching book collection</span>
        </div>
    );
};

export default AllBooksLoading;