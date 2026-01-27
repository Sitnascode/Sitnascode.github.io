import React, { useState } from 'react';
import Start from './pages/Start';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import { ThemeProvider } from './contexts/ThemeContext';

const App = () => {
  const [screen, setScreen] = useState('start');
  const [results, setResults] = useState(null);

  const handleStartQuiz = () => {
    setScreen('quiz');
    setResults(null);
  };

  const handleQuizComplete = (quizResults) => {
    setResults(quizResults);
    setScreen('result');
  };

  const handleRetry = () => {
    setScreen('quiz');
    setResults(null);
  };

  const handleBackToStart = () => {
    setScreen('start');
    setResults(null);
  };

  const handleBackFromQuiz = () => {
    setScreen('start');
    setResults(null);
  };

  return (
    <ThemeProvider>
      <div className="App">
        {screen === 'start' && <Start onStart={handleStartQuiz} />}
        {screen === 'quiz' && (
          <Quiz 
            onComplete={handleQuizComplete} 
            onBack={handleBackFromQuiz}
          />
        )}
        {screen === 'result' && results && (
          <Result 
            results={results} 
            onRetry={handleRetry}
            onBackToStart={handleBackToStart}
          />
        )}
      </div>
    </ThemeProvider>
  );
};

export default App;
