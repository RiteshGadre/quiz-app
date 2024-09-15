import { useState } from "react"
import Question from "./componants/Question"
import Result from "./componants/Result"
import {mcqQuestion} from "./componants/constant"


const App = () => {
  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState("");
  const [score, setScore] = useState(0);
  const questions = mcqQuestion.questions; // array of questions

  function handleNext(){
    console.log("inside handle")
    calculateResult(choice);
    setIndex(index+1);
  }

  function handleChoiceChange(option){
    setChoice(option);
  }

  function calculateResult(option) {
    if(option === questions[index].answer){
        setScore(score + 1);
    }
    setChoice("");
  }

  return (
    <div>
      {
        index == questions.length ? 
        <Result score={score} total={questions.length}/> : 
        <Question key={index} question={questions[index]} handleChoiceChange={handleChoiceChange} handleNext={handleNext}/>
      }
      <button onClick={handleNext} type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">{index === questions.length - 1 ? "Show Result" : "Next"}</button>
    </div>
  )
}

export default App



/*
- Header
  - Quiz App (Heading)
- Main
  - Pargaraph (we will add question here)
  - radio button with 4 options


  Once all 10 questions are attempted then we will do following thisng
  - Result Componant
    - Wrong Answer Count
    - Right Answer Count
    - Restart Quiz
    - Exit
*/