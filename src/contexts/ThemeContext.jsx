import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    console.log('Initial savedTheme:', savedTheme);
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Always start in light mode by default
    console.log('No saved theme, starting with light mode');
    return false;
  });

  useEffect(() => {
    console.log('Theme effect triggered, isDark:', isDark);
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      console.log('Added dark class to root');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      console.log('Removed dark class from root');
    }
  }, [isDark]);

  const toggleTheme = () => {
    console.log('toggleTheme called, current isDark:', isDark);
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
