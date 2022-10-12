import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    
    return (
        <div className='py-20 bg-blue-300 sm:px-3'>
            <h1 className='text-5xl my-3 text-white'>Welcome To Quiz Web Application</h1>
            <p className='my-3 text-white text-lg'><span className='text-pink-700 font-bold'>Let's Try </span>One Time</p>
            <div>
                <Link to="/statistic">
                    <button className='text-2xl text-bold bg-pink-700 py-2 px-6 rounded m-2 text-white'>Statistics</button>
                </Link>
                <Link to="/blog">
                    <button className='text-2xl text-bold bg-pink-700 py-2 px-6 rounded m-2 text-white'>Blog</button>
                </Link>
            </div>
        </div>
    );
};

export default HeroSection;