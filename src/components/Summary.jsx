import React from 'react';

const Summary = ({ answers }) => {
  const correctCount = answers.filter((answer) => answer.isCorrect).length;
  const skippedCount = answers.filter((answer) => answer.selectedOption === null).length;
  const totalQuestions = answers.length;
  const percentage = ((correctCount / totalQuestions) * 100).toFixed(2);
  const home = () =>{

  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Quiz Summary</h2>
      <p>Total Questions: {totalQuestions}</p>
      <p>Correct Answers: {correctCount}</p>
      <p>Skipped Questions: {skippedCount}</p>
      <p>Percentage: {percentage}%</p>
      <div style={{background:'black', opacity:'0.7', padding:'20px 0', width:'60%', margin:'0 auto', borderRadius:'30px'}}>
      <h3>Detailed Results:</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {answers.map((answer, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <p>{answer.question}</p>
            <p>
              Your Answer: {answer.selectedOption ? answer.selectedOption : 'Skipped'}
            </p>
            <p>Correct Answer: {answer.correctAnswer}</p>
            <p style={{ color: answer.isCorrect ? 'green' : 'red' }}>
              {answer.isCorrect ? 'Correct' : 'Incorrect'}
            </p>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default Summary;
