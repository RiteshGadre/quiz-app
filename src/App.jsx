import { useState } from "react";
import Header from "./components/Header.jsx";
import Question from "./components/Question.jsx";
import Result from "./components/Result.jsx";
import { mcqQuestion } from "./components/constant.js";

const App = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const isQuizFinished = questionIndex >= mcqQuestion.questions.length;

  return (
    <div className="bg-[#7C93C3] h-screen">
      {/* <Result /> */}
      
      <section className="flex-col  items-center">
        <div className="flex justify-center">
          {isQuizFinished ? (
            <div className="h-screen grid place-items-center">
              <Result
                score={score}
                setScore={setScore}
                questionIndex={questionIndex}
                setQuestionIndex={setQuestionIndex}
              />
            </div>
            
          ) : (
            <div>
              <Header />
              <Question
                data={mcqQuestion.questions[questionIndex]}
                id={mcqQuestion.questions[questionIndex].id}
                questionIndex={questionIndex}
                setQuestionIndex={setQuestionIndex}
                score={score}
                setScore={setScore}
              />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default App;

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
