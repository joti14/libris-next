import React from 'react';

const Author = () => {
    return (
        <div className='container mx-auto py-10'>
            <h2 className='text-3xl mb-5 font-bold'>Rising Star <span className='text-red-800 italic'>of the Month</span></h2>
            <div className="card card-border" style={{ background: 'linear-gradient(135deg, #1A1208, #2D1F0A)' }}>
                <div className="card-body grid grid-cols-3 gap-5">
                    <div className='flex items-center justify-center'>
                        <h2 className='bg-yellow-600 w-40 h-40 rounded-full text-5xl font-bold flex items-center justify-center'>SJ</h2>
                    </div>
                    <div className='space-y-3'>
                        <h3 className='text-yellow-700'>✦ AUTHOR SPOTLIGHT</h3>
                        <h2 className='text-3xl font-bold text-white'>Sara Johnson</h2>
                        <p className='text-zinc-400'>Each month we spotlight a talented new author — discover their journey, inspirations, and explore their captivating works available exclusively in our collection.</p>
                        <div className='flex items-center gap-2'>
                            <h2 className='text-yellow-700 text-5xl'>|</h2>
                            <p className='italic font-bold text-zinc-300'>"Turning everyday moments into unforgettable stories."</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <button className='btn bg-red-900 text-white'>Meet The Author</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Author;