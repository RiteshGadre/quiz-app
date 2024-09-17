import { useState } from "react";
import Header from "./components/Header.jsx";
import Question from "./components/Question.jsx";
import Result from "./components/Result.jsx";
import { mcqQuestion } from "./components/constant.js";

const App = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  // Check if all questions have been answered, if so, render the Result component
  const isQuizFinished = questionIndex >= mcqQuestion.questions.length;

  return (
    <div className="bg-[#7C93C3] h-screen">
      <section className="flex-col items-center">
        <div className="flex justify-center">
          {/* Render Result component when the quiz is finished */}
          {isQuizFinished ? (
            <Result
              score={score}
              setScore={setScore}
              setQuestionIndex={setQuestionIndex}
            />
          ) : (
            <div className='flex-col jus'>
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
