import { useState } from "react"
import Question from "./componants/Question"
import Result from "./componants/Result"
import {mcqQuestion} from "./componants/constant"


const App = () => {
  const [index, setIndex] = useState(0);

  return (
    <div>
      {
        index == mcqQuestion.questions.length ? <Result/> :mcqQuestion.questions.map((question)=> <Question key={question.id} question={question}/>)
      }
      <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Show Result</button>
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