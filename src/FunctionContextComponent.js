import React from 'react'
import { useTheme, useThemeUpdate } from './ThemeContext'

const FunctionContextComponent = () => {
     const darkMode = useTheme()
     const toggleTheme = useThemeUpdate()
     const themeStyles = {
          backgroundColor: darkMode ? '#333' : '#CCC',
          color: darkMode ? '#CCC' : '#333',
          padding: '2rem',
          margin: '2rem'
     }
     return (
          <>
               <button onClick={toggleTheme}>Toggle Theme</button>
               <div style={themeStyles}>Function Theme</div>
          </>
     )
}

export default FunctionContextComponent;