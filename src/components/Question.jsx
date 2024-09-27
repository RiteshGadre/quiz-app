import { useEffect, useState } from "react";
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

  // console.log(questionIndex);

  function handlePrevious() {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    }
  }

  function handleNext() {
    if (questionIndex < 20) {
      setQuestionIndex(questionIndex + 1);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (choice === data.answer) {
      setScore((prevScore) => prevScore + 1);
    }

    setQuestionIndex(questionIndex + 1);
    if (questionIndex === 4) {
      // setScore(0);
      setQuestionIndex(0);
    }

    console.log("choice => " + choice);
    console.log("data.answer => " + data.answer);
    console.log(score);
  }

  return (
    <>
      {
        <div
          key={id}
          className="flex flex-col gap-4 bg-[#55679C] px-6 py-4 rounded text-white"
        >
          <p className="font-bold text-xl text-white">{data.question}</p>
          <ul className="grid grid-cols-2 gap-3">
            {data.options.map((option, index) => (
              <div
                key={index}
                className="flex gap-6 px-3 py-2 rounded font-semibold cursor-pointer bg-[#7C93C3] hover:bg-[#627ebb]"
              >
                <input
                  key={index}
                  className="cursor-pointer"
                  type="radio"
                  value={option}
                  name=""
                  id=""
                  onChange={() => {
                    setChoice(option);
                    console.log(choice);
                  }}
                  checked={choice === option}
                />
                {option}
              </div>
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
              onClick={handleNext}
            >
              Next
            </button>
            <button
              className="px-3 py-2 bg-[#1E2A5E] rounded-lg font-semibold"
              onClick={handleSubmit}
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
