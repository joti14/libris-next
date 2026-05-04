'use client';
import { SearchField } from '@heroui/react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useState } from 'react';

const SearchBooks = () => {
    const [searchInp, setSearchInp] = useState('');
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handleSearch = () => {
        const params = new URLSearchParams(searchParams);
        searchInp ? params.set('search', searchInp) : params.delete('search');
        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="flex justify-end mb-5">
            <div className="relative flex items-center">
                <SearchField name="search">
                    <SearchField.Group>
                        <SearchField.SearchIcon />
                        <SearchField.Input
                            className="w-80"
                            placeholder="Search books by title or author..."
                            value={searchInp}
                            onChange={e => setSearchInp(e.target.value)}
                            onKeyDown={e => e.key === 'Enter' && handleSearch()}
                        />
                        {searchInp && (
                            <SearchField.ClearButton onClick={() => setSearchInp('')} />
                        )}
                    </SearchField.Group>
                </SearchField>
                <button
                    onClick={handleSearch}
                    className="btn bg-red-800 text-white hover:bg-red-700 absolute right-0 h-full rounded-l-none"
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default SearchBooks;