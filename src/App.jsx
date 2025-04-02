import React from 'react'
import { ThemeProvider } from './hooks/ThemeProvider'
import Title from './components/Title'
import ButtonTheme from './components/ButtonTheme'

export const App = () => {
  return (
    <ThemeProvider>
      <div className='container'>
        <Title/>
        <ButtonTheme/>
      </div>
    </ThemeProvider>
  )
}

export default App