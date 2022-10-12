import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({quiz}) => {
const {id, name, logo, total} = quiz;
    return (
        <div className='h-96 w-72 shadow-xl rounded-xl bg-gray-300'>
            <img className='h-64 w-72 rounded-xl bg-gray-800' src={logo} alt="" />
            <div className='text-lg font-medium'>
                <h3 className='text-2xl'>{name}</h3>
                <p> Total Q: {total}</p>
                <Link to={`/quiz/${id}`}><button className='h-10 w-72 bg-blue-500 rounded-2xl mt-6 text-white font-bold'>Start Quiz</button></Link>
            </div>
        </div>
    );
};

export default Quiz;