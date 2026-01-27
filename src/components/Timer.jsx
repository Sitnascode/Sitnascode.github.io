import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Timer = ({ 
  timeLimit, 
  onTimeUp, 
  isActive = true,
  className = '' 
}) => {
  const { isDark } = useTheme();
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [isWarning, setIsWarning] = useState(false);

  useEffect(() => {
    setTimeLeft(timeLimit);
    setIsWarning(false);
  }, [timeLimit]);

  useEffect(() => {
    if (!isActive || timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTime = prevTime - 1;
        
        if (newTime <= 5) {
          setIsWarning(true);
        }
        
        if (newTime <= 0) {
          onTimeUp();
          return 0;
        }
        
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, timeLeft, onTimeUp]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getTimerColor = () => {
    if (timeLeft <= 5) {
      return isDark ? 'text-red-400' : 'text-red-600';
    }
    if (timeLeft <= 10) {
      return isDark ? 'text-amber-400' : 'text-amber-600';
    }
    return isDark ? 'text-gray-300' : 'text-gray-600';
  };

  const getTimerBg = () => {
    if (timeLeft <= 5) {
      return isDark ? 'bg-red-900/30 border-red-700' : 'bg-red-50 border-red-200';
    }
    if (timeLeft <= 10) {
      return isDark ? 'bg-amber-900/30 border-amber-700' : 'bg-amber-50 border-amber-200';
    }
    return isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200';
  };

  const progressPercentage = (timeLeft / timeLimit) * 100;

  return (
    <div className={`flex items-center space-x-2 sm:space-x-3 ${className}`}>
      <div className={`relative flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 ${getTimerBg()} ${isWarning ? 'animate-pulse' : ''}`}>
        <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 64 64">
          <circle
            cx="32"
            cy="32"
            r="28"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            className={isDark ? 'text-gray-700' : 'text-gray-200'}
          />
          <circle
            cx="32"
            cy="32"
            r="28"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            strokeDasharray={`${2 * Math.PI * 28}`}
            strokeDashoffset={`${2 * Math.PI * 28 * (1 - progressPercentage / 100)}`}
            className={`transition-all duration-1000 ease-linear ${
              timeLeft <= 5 ? 'text-red-500' : 
              timeLeft <= 10 ? 'text-amber-500' : 
              'text-primary-500'
            }`}
          />
        </svg>
        <span className={`text-xs sm:text-sm font-bold ${getTimerColor()}`}>
          {formatTime(timeLeft)}
        </span>
      </div>
      
      <div className="flex flex-col min-w-0">
        <span className={`text-xs sm:text-sm font-medium ${getTimerColor()}`}>
          Time Remaining
        </span>
        <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'} hidden sm:block`}>
          {timeLimit} seconds per question
        </span>
      </div>
    </div>
  );
};

export default Timer;
