import React from 'react'

function Result({total, score}) {
    function goToHome(){
        // function which will take to the home page to reastart the test
    }
  return (
    <div className='w-full flex justify-center items-center flex-col h-screen'>
        <div className='font-medium text-3xl'>
            Your total score {score}
        </div>
        <div className='text-3xl font-medium'>
            Wrong : {total - score}
        </div>
        <button onClick={goToHome} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 mt-10">Restart quiz</button>
    </div>
  )
}

export default Result