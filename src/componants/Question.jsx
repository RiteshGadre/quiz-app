import React, { useState } from "react";

function Question({ question, handleChoiceChange, handleNext }) {

    return (
        <div>
            <h3>
                {question.id}. {question.question}
            </h3>
            { question.options.map((option) => {
                return <div className="flex items-center">
                <input key= {question.id} onChange={e => console.log(e.target.value)} type="radio" value={option} name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                {option}
            </div>
            })}
        </div>
    );
}

export default Question;
