'use client'

import { toast } from "react-toastify";

const Author = () => {
    return (
        <div className='container mx-auto py-10 px-4'>
            <h2 className='text-2xl md:text-3xl mb-5 font-bold'>
                Rising Star <span className='text-red-800 italic'>of the Month</span>
            </h2>
            <div className="card card-border" style={{ background: 'linear-gradient(135deg, #1A1208, #2D1F0A)' }}>
                <div className="card-body grid grid-cols-1 md:grid-cols-3 gap-5">

                    <div className='flex items-center justify-center'>
                        <h2 className='bg-yellow-600 w-24 h-24 md:w-40 md:h-40 rounded-full text-3xl md:text-5xl font-bold flex items-center justify-center'>
                            SJ
                        </h2>
                    </div>

                    <div className='space-y-3 text-center md:text-left'>
                        <h3 className='text-yellow-700'>✦ AUTHOR SPOTLIGHT</h3>
                        <h2 className='text-2xl md:text-3xl font-bold text-white'>Sara Johnson</h2>
                        <p className='text-zinc-400 text-sm md:text-base'>
                            Each month we spotlight a talented new author — discover their journey, inspirations, and explore their captivating works available exclusively in our collection.
                        </p>
                        <div className='flex items-center gap-2 justify-center md:justify-start'>
                            <h2 className='text-yellow-700 text-4xl md:text-5xl'>|</h2>
                            <p className='italic font-bold text-zinc-300 text-sm md:text-base'>
                                "Turning everyday moments into unforgettable stories."
                            </p>
                        </div>
                    </div>

                    <div className='flex items-center justify-center'>
                        <button
                            onClick={() =>
                                toast(`Author Profile Coming Soon!`, {
                                    className: "bg-zinc-900 text-slate-300 rounded-2xl border-zinc-700"
                                })
                            }
                            className='btn text-white border-none w-full md:w-auto bg-linear-to-r from-red-900 via-red-600 to-orange-700 bg-size-[300%_300%] animate-[gradientShift_4s_ease_infinite] hover:animate-[gradientShift_1.5s_ease_infinite]'
                        >
                            Meet The Author
                        </button>
                    </div>

                </div>
            </div>

            {/* Keyframe in tailwind config — add this to globals.css */}
            {/* @keyframes gradientShift {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            } */}
        </div>
    );
};

export default Author;