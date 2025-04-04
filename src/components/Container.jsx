import React, { useContext } from 'react'
import Title from './Title'
import ButtonTheme from './ButtonTheme'
import { ThemeContext } from '../hooks/ThemeProvider'

const Container = () => {
    const { darkMode } = useContext(ThemeContext)
  return (
    <div className={'container' + darkMode?"container-dark":"container"}>Container</div>
  )
}

export default Container