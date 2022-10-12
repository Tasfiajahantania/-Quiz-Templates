import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const Header = () => {
    return (
        <div className='px-5 grid grid-cols-2 justify-between items-center bg-gray-800'>
            <div className='flex'>
                <div className="">
                <img className='w-20 h-20' src={logo} alt="/" />
            </div>
            <div>
                <h2 className='text-cyan-100 text-3xl font-semibold mt-5'>Quiz Templates</h2>
            </div>
            </div>
            <div>
            <nav className="text-right">
                <Link className='mr-4 text-xl text-cyan-100 hover:text-red-400' to='/home'>Home</Link>
                <Link className='mr-4 text-xl text-cyan-100 hover:text-red-400' to='/statistic'>Statistics</Link>
                <Link className='mr-4 text-xl text-cyan-100 hover:text-red-400' to='/blog'>Blog</Link>
            </nav>
          </div>
        </div>
    );
};

export default Header;