// ThemeContext.js
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Початкова тема

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// import React, { createContext, useState } from 'react';

// export const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState('light');

//   const toggleTheme = () => {
//     setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
//   };

//   const themeColors = {
//     light: {
//       background: '#B8BCFD',
//       text: '#161616',
//     },
//     dark: {
//       background: '#1F1F1F',
//       text: '#FFFFFF',
//     },
//     violet: {
//       background: '#F6F6F7',
//       text: '#161616',
//     },
//   };

//   return (
//     <ThemeContext.Provider
//       value={{ theme, toggleTheme, colors: themeColors[theme] }}
//     >
//       {children}
//     </ThemeContext.Provider>
//   );
// };
