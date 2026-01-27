import React from 'react';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../contexts/ThemeContext';

const AnswerOption = ({ 
  option, 
  index, 
  isSelected, 
  isCorrect, 
  showResult, 
  onClick, 
  disabled = false 
}) => {
  const { isDark } = useTheme();
  
  const baseClasses = "w-full p-3 sm:p-4 text-left rounded-lg border-2 transition-smooth cursor-pointer touch-manipulation ";
  
  let stateClasses = "";
  
  if (showResult) {
    if (isCorrect) {
      stateClasses = isDark 
        ? "bg-emerald-900/30 border-emerald-500 text-emerald-300" 
        : "bg-emerald-50 border-emerald-500 text-emerald-800";
    } else if (isSelected && !isCorrect) {
      stateClasses = isDark 
        ? "bg-red-900/30 border-red-500 text-red-300" 
        : "bg-red-50 border-red-500 text-red-800";
    } else {
      stateClasses = isDark 
        ? "bg-gray-800/50 border-gray-700 text-gray-400" 
        : "bg-gray-50 border-gray-200 text-gray-600";
    }
  } else {
    if (isSelected) {
      stateClasses = isDark 
        ? "bg-primary-900/30 border-primary-500 text-primary-300" 
        : "bg-primary-50 border-primary-500 text-primary-800";
    } else {
      stateClasses = isDark 
        ? "bg-gray-800 border-gray-700 hover:border-primary-600 hover:bg-gray-700" 
        : "bg-white border-gray-200 hover:border-primary-300 hover:bg-gray-50";
    }
  }
  
  const disabledClasses = disabled ? "cursor-not-allowed opacity-60" : "";
  
  return (
    <button
      className={`${baseClasses}${stateClasses}${disabledClasses}`}
      onClick={() => !disabled && onClick(index)}
      disabled={disabled}
      aria-pressed={isSelected}
      aria-describedby={`question-${index}`}
    >
      <div className="flex items-center space-x-3">
        <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
          isSelected 
            ? showResult 
              ? isCorrect 
                ? 'border-emerald-500 bg-emerald-500' 
                : 'border-red-500 bg-red-500'
              : 'border-primary-500 bg-primary-500'
            : isDark ? 'border-gray-600' : 'border-gray-300'
        }`}>
          {isSelected && (
            <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          )}
        </div>
        <span className="font-medium text-sm sm:text-base leading-relaxed">{option}</span>
      </div>
    </button>
  );
};

export default AnswerOption;
