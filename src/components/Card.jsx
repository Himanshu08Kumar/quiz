import React, { useState, useEffect } from "react";
import question from "../question.json";

const Card = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentQuestion((prevIndex) => (prevIndex + 1) % question.length);
      setSelectedOption(null);
      setIsCorrect(null);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentQuestion]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsCorrect(option === question[currentQuestion].answer);
    
  };

  const currentQues = question[currentQuestion];

  return (
    <div>
      <h1>Question</h1>
      <span></span>
      <h2>{currentQues.question}</h2>
      <div className="answer" id="answers">
        {currentQues.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            style={{
              backgroundColor:
                selectedOption === option
                  ? isCorrect === true
                    ? "green"
                    : "red"
                  : "#6cb7f5",
            }}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Card;
