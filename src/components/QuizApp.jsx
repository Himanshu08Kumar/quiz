import React, { useState } from 'react';
import Card from './Card';
import Summary from './Summary';
import questions from '../question.json';

const QuizApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showSummary, setShowSummary] = useState(false);

  const handleAnswer = (isCorrect, selectedOption) => {
   
    setAnswers((prevAnswers) => [
      ...prevAnswers,
      {
        question: questions[currentQuestionIndex].question,
        correctAnswer: questions[currentQuestionIndex].options.find(
          (option) => option[0] === questions[currentQuestionIndex].answer
        ),
        selectedOption,
        isCorrect,
      },
    ]);

 
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setShowSummary(true);
    }
  };

  const handleSkip = () => {

    setAnswers((prevAnswers) => [
      ...prevAnswers,
      {
        question: questions[currentQuestionIndex].question,
        correctAnswer: questions[currentQuestionIndex].options.find(
          (option) => option[0] === questions[currentQuestionIndex].answer
        ),
        selectedOption: null,
        isCorrect: false,
      },
    ]);

   
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setShowSummary(true);
    }
  };

  return (
    <div>
      {showSummary ? (
        <Summary answers={answers} />
      ) : (
        <Card
          question={questions[currentQuestionIndex]}
          onAnswer={(isCorrect, selectedOption) => handleAnswer(isCorrect, selectedOption)}
          onSkip={handleSkip}
        />
      )}
    </div>
  );
};

export default QuizApp;
