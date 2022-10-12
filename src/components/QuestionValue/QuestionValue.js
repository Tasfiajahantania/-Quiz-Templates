import React from 'react';

const QuestionValue = ({option}) => {
    
   const questionAnswer = (option) => {
        console.log("You Answer Clicked", option)
   }

    
    return (
        <div>
            <div className='border-2 m-2 border-amber-400 bg-slate-300 p-2'>
                <input onClick={questionAnswer(option)} type="radio" id={option} value={option}/>
                <label className='pl-2' for={option}>{option}</label>
            </div>
        </div>
    );
};

export default QuestionValue;