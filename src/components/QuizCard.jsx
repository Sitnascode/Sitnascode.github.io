import React from 'react';
import AnswerOption from './AnswerOption';
import { useTheme } from '../contexts/ThemeContext';

const QuizCard = ({ 
  question, 
  questionNumber, 
  totalQuestions, 
  selectedAnswer, 
  showResult, 
  onAnswerSelect, 
  disabled = false 
}) => {
  const { isDark } = useTheme();
  
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl card-shadow p-4 sm:p-6 md:p-8`}>
      <div className="mb-4 sm:mb-6">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <span className={`text-xs sm:text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-2 sm:px-3 py-1 rounded-full`}>
            Question {questionNumber} of {totalQuestions}
          </span>
        </div>
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 leading-relaxed">
          {question.question}
        </h2>
      </div>
      
      <div className="space-y-2 sm:space-y-3">
        {question.options.map((option, index) => (
          <AnswerOption
            key={index}
            option={option}
            index={index}
            isSelected={selectedAnswer === index}
            isCorrect={question.correctAnswer === index}
            showResult={showResult}
            onClick={onAnswerSelect}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
};

export default QuizCard;
