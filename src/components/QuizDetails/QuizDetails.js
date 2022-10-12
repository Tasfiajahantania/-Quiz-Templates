import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../QuizQuestion/QuizQuestion';

const QuizDetails = () => {
    const quizedetails = useLoaderData()
    const quizedetailsdata = quizedetails.data;
    const {id, name, total, questions} = quizedetailsdata;

    return (
        <div className='p-8'>
            <div className="p-3 flex flex-col justify-center border-r-2 col-span-2">
               
                <h2 className='text-3xl font-bold mb-4 text-gray-900 underline'>All {name} Quiz</h2>
                <h4 className='text-2xl font-medium mb-5'>Total Quiz {total}</h4>
                {
                    questions.map(question => <QuizQuestion
                    key={id}
                    question={question}
                    ></QuizQuestion>)
                }
            </div>
            {/* <div className="Result ">
                <h3>Your Result</h3>
            </div> */}
        </div>
    );
};

export default QuizDetails;