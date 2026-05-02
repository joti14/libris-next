import Announcement from '@/components/shared/Announcement';
import Banner from '@/components/shared/Banner';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const MainLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Announcement />
            {children}
            <Footer />
        </div>
    );
};

export default MainLayout;