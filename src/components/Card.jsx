import React, { useState, useEffect } from 'react';

const Card = ({ question, onAnswer, onSkip }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeLeft, setTimeLeft] = useState(5); 

  useEffect(() => {
    if (selectedOption === null && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      
      return () => clearTimeout(timer); 
    } else if (timeLeft === 0) {
      onSkip(); 
      setTimeLeft(5); 
    }
  }, [timeLeft, selectedOption, onSkip]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    const isCorrect = option[0] === question.answer; 
    onAnswer(isCorrect, option);

    setTimeout(() => {
      setSelectedOption(null); 
      setTimeLeft(5);
    }, 1000);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>{question.question}</h2>
      <div>
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            style={{
              backgroundColor:
                selectedOption === option
                  ? option[0] === question.answer
                    ? 'green'
                    : 'red'
                  : '#6cb7f5',
              margin: '10px',
              padding: '10px',
              width: '90%',
              borderRadius: '20px',
              border : 'none'
            }}
            disabled={selectedOption !== null} 
          >
            {option}
          </button>
        ))}
      </div>
      <p>Time Left: {timeLeft} seconds</p>
      {selectedOption === null && (
        <button onClick={onSkip} style={{ marginTop: '20px' ,width: '90%',
          borderRadius: '20px',
          border : 'none',
          margin: '10px',
          padding: '10px',}}>
          Skip
        </button>
      )}
    </div>
  );
};

export default Card;
