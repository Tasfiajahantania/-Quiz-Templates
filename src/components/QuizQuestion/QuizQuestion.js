import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon } from '@heroicons/react/24/solid';

const QuizQuestion = ({question}) => {
    const { options, correctAnswer }= question;
    const questiondata = question.question;
    

    const seeAnswer = () => {
        const notify = toast.success(correctAnswer, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            return notify;
            
    }

    const answerClicked = (option) => {
        if(option === correctAnswer){
            const notify = toast.success('Your Answer is Correct', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            return notify;
            
            
        }
        else{
            const notify = toast.success('Wrong Answer', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            return notify;
        }
    }

    return (
        <div>
            <div className='border-l-4 border-sky-800 mx-auto my-10 p-6 shadow-lg bg-sky-200 py-8'>
                <div className='grid justify-items-end'>
                     <EyeIcon onClick={()=>seeAnswer()} className="h-6 w-6 text-gray-900"/>
                </div>
            <h3 className='text-2xl text-left my-3'>Q: {questiondata}</h3>
                
                <div className="answer grid lg:grid-cols-2 md:grid-cols-1 text-left">
                    {
                        options.map((option, index) => <div
                        key={index}
                        className='border-2 m-2 border-sky-800 bg-slate-300 p-2 rounded-xl hover:bg-red-300'>
                        <input onClick={() => answerClicked(option)} type="radio" id={option} value={option}/>
                        <label className='pl-2' for={option}>{option}</label>
                    </div>)
                    }
                </div>
            <ToastContainer />
        </div>
       </div>
    );
};

export default QuizQuestion;