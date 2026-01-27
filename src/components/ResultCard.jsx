import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ResultCard = ({ 
  score, 
  totalQuestions, 
  correctAnswers, 
  incorrectAnswers, 
  percentage, 
  onRetry 
}) => {
  const { isDark } = useTheme();
  
  const getGradeColor = (percentage) => {
    if (percentage >= 80) return isDark ? 'text-emerald-400' : 'text-emerald-600';
    if (percentage >= 60) return isDark ? 'text-amber-400' : 'text-amber-600';
    return isDark ? 'text-red-400' : 'text-red-600';
  };

  const getGradeEmoji = (percentage) => {
    if (percentage >= 80) return '🎉';
    if (percentage >= 60) return '👍';
    return '📚';
  };

  const getGradeMessage = (percentage) => {
    if (percentage >= 80) return 'Excellent work!';
    if (percentage >= 60) return 'Good job!';
    return 'Keep practicing!';
  };

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl card-shadow p-4 sm:p-6 md:p-8 max-w-md mx-auto`}>
      <div className="text-center">
        <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">{getGradeEmoji(percentage)}</div>
        
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          Quiz Complete!
        </h2>
        
        <p className={`text-base sm:text-lg font-semibold mb-4 sm:mb-6 ${getGradeColor(percentage)}`}>
          {getGradeMessage(percentage)}
        </p>
        
        <div className={`rounded-lg p-4 sm:p-6 mb-4 sm:mb-6 ${
          isDark ? 'bg-gray-700/50' : 'bg-gray-50'
        }`}>
          <div className="text-3xl sm:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-1 sm:mb-2">
            {percentage}%
          </div>
          <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
            You scored {score} out of {totalQuestions}
          </div>
          
          <div className="grid grid-cols-2 gap-3 sm:gap-4 text-sm">
            <div className={`rounded-lg p-2 sm:p-3 ${
              isDark ? 'bg-emerald-900/30' : 'bg-emerald-50'
            }`}>
              <div className={`font-semibold ${
                isDark ? 'text-emerald-400' : 'text-emerald-800'
              }`}>
                {correctAnswers}
              </div>
              <div className={isDark ? 'text-emerald-300' : 'text-emerald-600'}>Correct</div>
            </div>
            <div className={`rounded-lg p-2 sm:p-3 ${
              isDark ? 'bg-red-900/30' : 'bg-red-50'
            }`}>
              <div className={`font-semibold ${
                isDark ? 'text-red-400' : 'text-red-800'
              }`}>
                {incorrectAnswers}
              </div>
              <div className={isDark ? 'text-red-300' : 'text-red-600'}>Incorrect</div>
            </div>
          </div>
        </div>
        
        <button
          onClick={onRetry}
          className="w-full bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-smooth focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 text-sm sm:text-base touch-manipulation"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
