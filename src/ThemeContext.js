import React, { useContext, useState } from 'react';

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

// custom hook useTheme
export const useTheme = () => {
     return useContext(ThemeContext);
};

// custom hook useThemeUpdate
export const useThemeUpdate = () => {
     return useContext(ThemeUpdateContext);
};

export const ThemeProvider = ({ children }) => {
     const [darkTheme, setDarkTheme] = useState(true);

     // toggle theme function
     const toggleTheme = () => {
          setDarkTheme(prevDarkTheme => !prevDarkTheme);
     };

     return (
          <ThemeContext.Provider value={darkTheme}>
               <ThemeUpdateContext.Provider value={toggleTheme}>
                    {children}
               </ThemeUpdateContext.Provider>
          </ThemeContext.Provider>
     );
};