import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    const myStyle={
        backgroundImage: "url('https://media.istockphoto.com/photos/and-a-concept-yellow-question-mark-glowing-amid-black-question-marks-picture-id1305169776?b=1&k=20&m=1305169776&s=170667a&w=0&h=mpYdh2MzGN_rqxoRNlO5KWGCCq3ZktzSfp-wA0nD9no=')",
        width: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div className='py-20 bg-blue-300 sm:px-3' style={myStyle}>

            <h1 className='text-5xl my-3 text-white'>Welcome To Quiz Web Application</h1>
            <p className='my-3 text-white text-lg'><span className='text-pink-600 font-bold'>Let's Try </span>One Time</p>
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