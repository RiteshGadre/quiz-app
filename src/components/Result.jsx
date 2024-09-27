  import App from '../App'

  const Result = ({ score, setScore, questionIndex, setQuestionIndex }) => {
    return (
      <div className='h-screen w-full flex flex-col justify-center items-center gap-5'>
          <h1 className='text-xl text-white font-semibold'>Your Have Scored {score}</h1>
          <button 
            className='px-6 py-2 bg-[#1E2A5E] rounded-lg font-semibold text-white'
            onClick=
            {
              () => {
                setScore(0);
                setQuestionIndex(0);
              }
            }>Restart</button>
      </div>
    )
  }

  export default Result
