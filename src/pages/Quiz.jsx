import React, { useState, useEffect } from 'react';
import QuizCard from '../components/QuizCard';
import ProgressBar from '../components/ProgressBar';
import Timer from '../components/Timer';
import ThemeToggle from '../components/ThemeToggle';
import { quizQuestions, quizConfig } from '../data/questions';

const Quiz = ({ onComplete, onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [timerKey, setTimerKey] = useState(0); // To reset timer for each question

  useEffect(() => {
    const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  }, []);

  const handleAnswerSelect = (answerIndex) => {
    if (showResult) return;
    
    setSelectedAnswer(answerIndex);
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleTimeUp = () => {
    // Auto-advance to next question when time is up
    if (selectedAnswer === null) {
      // Mark as unanswered (will be counted as incorrect)
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = -1; // -1 indicates unanswered
      setAnswers(newAnswers);
    }
    
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(answers[currentQuestion + 1] ?? null);
      setShowResult(false);
      setTimerKey(prev => prev + 1); // Reset timer
    } else {
      setShowResult(true);
      setTimeout(() => {
        calculateResults();
      }, 2000);
    }
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(answers[currentQuestion + 1] ?? null);
      setShowResult(false);
      setTimerKey(prev => prev + 1); // Reset timer
    } else {
      setShowResult(true);
      setTimeout(() => {
        calculateResults();
      }, 2000);
    }
  };

  const calculateResults = () => {
    let score = 0;
    answers.forEach((answer, index) => {
      // Only count correct answers, unanswered (-1) are incorrect
      if (answer === shuffledQuestions[index].correctAnswer) {
        score++;
      }
    });
    
    onComplete({
      score,
      totalQuestions: shuffledQuestions.length,
      correctAnswers: score,
      incorrectAnswers: shuffledQuestions.length - score,
      percentage: Math.round((score / shuffledQuestions.length) * 100)
    });
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[currentQuestion - 1] ?? null);
      setShowResult(false);
      setTimerKey(prev => prev + 1); // Reset timer
    }
  };

  if (shuffledQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading quiz...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-100 dark:from-gray-900 dark:to-gray-800 py-4 sm:py-8 px-4">
      <div className="w-full max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 space-y-4 sm:space-y-0">
          <button
            onClick={onBack}
            className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors text-sm sm:text-base touch-manipulation"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Start
          </button>
          
          <div className="flex items-center justify-center sm:justify-end space-x-2 sm:space-x-4">
            <Timer
              key={timerKey}
              timeLimit={quizConfig.timeLimit}
              onTimeUp={handleTimeUp}
              isActive={!showResult}
            />
            <ThemeToggle />
          </div>
        </div>

        <ProgressBar 
          current={currentQuestion + 1} 
          total={shuffledQuestions.length} 
        />

        <QuizCard
          question={shuffledQuestions[currentQuestion]}
          questionNumber={currentQuestion + 1}
          totalQuestions={shuffledQuestions.length}
          selectedAnswer={selectedAnswer}
          showResult={showResult}
          onAnswerSelect={handleAnswerSelect}
          disabled={showResult}
        />

        <div className="flex justify-between items-center mt-4 sm:mt-6">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-smooth disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent text-sm sm:text-base touch-manipulation"
          >
            Previous
          </button>

          <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 px-2 text-center">
            Question {currentQuestion + 1} of {shuffledQuestions.length}
          </div>

          <button
            onClick={handleNext}
            disabled={selectedAnswer === null}
            className="px-4 sm:px-6 py-2 sm:py-3 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-medium rounded-lg transition-smooth disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary-600 disabled:hover:bg-primary-500 text-sm sm:text-base touch-manipulation"
          >
            {currentQuestion === shuffledQuestions.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
