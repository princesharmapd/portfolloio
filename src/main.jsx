// src/main.jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import getTheme from './theme';
import CssBaseline from '@mui/material/CssBaseline';
import { AnimatePresence } from 'framer-motion';

const Main = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={getTheme(isDarkMode ? 'dark' : 'light')}>
      <CssBaseline />
      <AnimatePresence mode="wait">
        <App toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      </AnimatePresence>
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);