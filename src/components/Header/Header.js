import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import { BeakerIcon } from '@heroicons/react/24/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    const [open, setOpen] = useState(false)
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

                <nav className="flex justify-end items-center">
                <div className={`flex justify-end md:flex-row sm:flex-col xs:flex-col md:static xs:bg-blue-500 rounded p-4 md:bg-transparent xs:w-full absolute ${open ? 'top-20' : 'top-[-200px]'}`}>
                     <Link className='mr-4 text-xl text-cyan-100 hover:text-red-400' to='/home'>Home</Link>
                     <Link className='mr-4 text-xl text-cyan-100 hover:text-red-400' to='/statistic'>Statistics</Link>
                     <Link className='mr-4 text-xl text-cyan-100 hover:text-red-400' to='/blog'>Blog</Link>
                </div>
                <div className='md:hidden' onClick={() =>setOpen(!open)} >
                    <span>{open ? 
                    <FontAwesomeIcon className='p-2 text-xl text-white' icon={faXmark} /> 
                    : 
                    <FontAwesomeIcon className='p-2 text-x text-white' icon={faBars} />}
                    </span>
                </div>
            </nav>
          </div>
        </div>
    );
};

export default Header;