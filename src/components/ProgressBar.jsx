import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ProgressBar = ({ current, total, showLabel = true }) => {
  const { isDark } = useTheme();
  const percentage = Math.round((current / total) * 100);
  
  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Progress
          </span>
          <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
            {current} / {total}
          </span>
        </div>
      )}
      <div className={`w-full rounded-full h-2 overflow-hidden ${
        isDark ? 'bg-gray-700' : 'bg-gray-200'
      }`}>
        <div 
          className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={current}
          aria-valuemin={0}
          aria-valuemax={total}
          aria-label={`Quiz progress: ${current} of ${total} questions completed`}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
