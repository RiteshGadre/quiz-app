import { useState } from "react";
import Result from "./Result";

const Question = ({
  data,
  id,
  questionIndex,
  setQuestionIndex,
  score,
  setScore,
}) => {

  const [choice, setChoice] = useState("");

  function handleChange(e) {
    setChoice(e.target.value);
  }

  function handlePrevious() {
    if (questionIndex > 1) {
      setQuestionIndex(questionIndex - 1);
      console.log(questionIndex);
    }
  }

  function handleNext() {
    if (questionIndex < 20) {
      setQuestionIndex(questionIndex + 1);
      console.log(questionIndex);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (choice === data.answer) {
      console.log(choice + ' ' + data.answer);
      setScore(score + 1);
    }
    setQuestionIndex(questionIndex + 1);
    if(questionIndex === 4) {
      setScore(0);
      setQuestionIndex(0);

    }
    console.log(score);
  }

  return (
    <>
      {
        <div key={id} className="flex flex-col gap-4 bg-[#55679C] px-6 py-4 rounded text-white">
          <p className="font-bold text-xl text-white">{data.question}</p>
          <ul className="grid grid-cols-2 gap-3">
            {data.options.map((option, index) => (
              <li key={index} className="flex gap-6 px-3 py-2 rounded font-semibold bg-[#7C93C3]">
                <input
                  type="radio"
                  value={option}
                  name=""
                  id=""
                  onChange={handleChange}
                  checked={choice === option}
                />
                {option}
              </li>
            ))}
          </ul>
          <div className="buttons flex gap-5 justify-center pt-5 text-white">
            <button
              className="px-3 py-2 bg-[#1E2A5E] rounded-lg font-semibold"
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              className="px-3 py-2 bg-[#1E2A5E] rounded-lg font-semibold"
              onClick={handleSubmit}
            >
              Next
            </button>
            <button
              className="px-3 py-2 bg-[#1E2A5E] rounded-lg font-semibold"
              onClick={handleNext}
            >
              Submit
            </button>
          </div>
        </div>
      }
    </>
  );
};

export default Question;
