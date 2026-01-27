import React, { useEffect } from 'react';
import ResultCard from '../components/ResultCard';
import ThemeToggle from '../components/ThemeToggle';

const Result = ({ results, onRetry, onBackToStart }) => {
  useEffect(() => {
    const savedResults = JSON.parse(localStorage.getItem('quizResults') || '[]');
    const newResult = {
      ...results,
      date: new Date().toISOString(),
      id: Date.now()
    };
    savedResults.push(newResult);
    
    if (savedResults.length > 10) {
      savedResults.shift();
    }
    
    localStorage.setItem('quizResults', JSON.stringify(savedResults));
  }, [results]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4 sm:p-6 relative">
      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>
      
      <div className="w-full max-w-2xl">
        
        <ResultCard
          score={results.score}
          totalQuestions={results.totalQuestions}
          correctAnswers={results.correctAnswers}
          incorrectAnswers={results.incorrectAnswers}
          percentage={results.percentage}
          onRetry={onRetry}
        />
        
        <div className="text-center mt-4 sm:mt-6">
          <button
            onClick={onBackToStart}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors font-medium text-sm sm:text-base touch-manipulation"
          >
            Back to Start Screen
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
