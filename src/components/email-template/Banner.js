import React from 'react';

const Banner = () => {
    return (
        <div className='mb-4'>
            {/* Banner Image Section */}
            <div className='bg-[#216095] md:h-36 h-18 flex items-center justify-center'>
                <img
                    src="./express-script.png"
                    alt="Express Script"
                    className="w-2/4 md:w-auto"
                />
            </div>

            {/* Banner Text Section */}
            <div className='py-8 px-6 md:py-16 md:px-32 bg-[#4C9ED9]'>
                <h1 className='text-white text-lg md:text-3xl lg:text-[36px] text-left'>
                    Counseling is still required to process your prescription
                </h1>
            </div>
        </div>
    );
};

export default Banner;
