import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useState } from "react";

const Quizzes = () => {
  const quizData = [
    {
      question: "What is the output of `console.log(typeof null)`?",
      options: ["'object'", "'null'", "'undefined'", "'string'"],
      answer: "'object'",
    },
    {
      question: "Which of the following is NOT a JavaScript data type?",
      options: ["string", "number", "boolean", "character"],
      answer: "character",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }

    setSelectedOption("");
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-5">
          <h1 className="text-2xl font-bold mb-5">Quizzes</h1>
          {showScore ? (
            <div>
              <h2 className="text-xl">
                Your score: {score} / {quizData.length}
              </h2>
            </div>
          ) : (
            <div>
              <h2 className="text-xl mb-4">
                {quizData[currentQuestion].question}
              </h2>
              <form>
                {quizData[currentQuestion].options.map((option, index) => (
                  <div key={index} className="mb-2">
                    <label>
                      <input
                        type="radio"
                        value={option}
                        checked={selectedOption === option}
                        onChange={handleOptionChange}
                        className="mr-2"
                      />
                      {option}
                    </label>
                  </div>
                ))}
              </form>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                onClick={handleNextQuestion}
              >
                Next
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Quizzes;
