import React from 'react';
import { quizConfig } from '../data/questions';
import ThemeToggle from '../components/ThemeToggle';

const Start = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4 sm:p-6 relative">
      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>
      
      <div className="w-full max-w-2xl">
        <div className="bg-white dark:bg-gray-800 rounded-xl card-shadow p-6 sm:p-8 md:p-12">
          <div className="text-center mb-6 sm:mb-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-3 sm:mb-4">
              {quizConfig.title}
            </h1>
            
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed px-2">
              {quizConfig.description}
            </p>
          </div>
          
          <div className={`rounded-lg p-4 sm:p-6 mb-6 sm:mb-8 ${
            'bg-gray-50 dark:bg-gray-700/50'
          }`}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-center">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-3 sm:p-4">
                <div className="text-xl sm:text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">10</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Questions</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-3 sm:p-4">
                <div className="text-xl sm:text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">70%</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Passing Score</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-3 sm:p-4">
                <div className="text-xl sm:text-2xl font-bold text-amber-600 dark:text-amber-400 mb-1">30s</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Per Question</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            <button
              onClick={onStart}
              className="w-full bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-smooth focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 text-base sm:text-lg touch-manipulation"
            >
              Start Quiz
            </button>
            
            <p className="text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 px-2">
              Test your knowledge and track your progress
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
