import React, { createContext, useState } from 'react'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [ darkMode, setDarkMode ] = useState( false )
  return (
    <div>ThemeProvider</div>
  )
}

export default ThemeProvider