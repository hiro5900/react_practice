import React, { useContext } from 'react'
import { ThemeContext } from './App';

const FunctionContextComponent = () => {
     const darkMode = useContext(ThemeContext)
     const themeStyles = {
          backgroundColor: darkMode ? '#333' : '#CCC',
          color: darkMode ? '#CCC' : '#333',
          padding: '2rem',
          margin: '2rem'
     }
     return (
          <div style={themeStyles}>
               Function Theme
          </div>
     )
}

export default FunctionContextComponent;