import Footer from '@/components/shared/Footer';
import React from 'react';

const AllBooksLayout = ({ children }) => {
    return (
        <>
            {children}
            <Footer />
        </>
    );
};

export default AllBooksLayout;
