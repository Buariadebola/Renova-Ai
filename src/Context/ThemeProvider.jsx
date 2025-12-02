import React, { createContext, useState, useEffect } from 'react'

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState('dark');
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
    const storedThemeColor = localStorage.getItem(theme);
        if (storedThemeColor) {
            setTheme(storedThemeColor)
        }
    }, [theme])
      
    useEffect (() => {
        document.body.classList.toggle('light', theme === 'light');
    }, [theme]);
    
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
         localStorage.setItem(theme)
    };

    const handleColor = () => {
      setClicked(! clicked)
    }

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme, handleColor, clicked}}>
        {children}
    </ThemeContext.Provider>
  )
}

export {ThemeProvider, ThemeContext}
