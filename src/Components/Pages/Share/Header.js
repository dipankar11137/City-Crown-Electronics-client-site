import React from 'react';

const Header = () => {
    return (
        <div className='bg-slate-900 text-white py-2 px-6'>
            <div className='flex justify-between'>
                <h1 className='text-3xl font-bold text-lime-400 '>City<span className='text-orange-500 hover:text-lime-400'>Crow</span>n <span className='font-extrabold hover:text-orange-500'>Electr</span>onics</h1>
                <button class="btn bg-lime-400 text-black hover:text-white font-bold">Buy Now</button>
            </div>
        </div>
    );
};

export default Header;