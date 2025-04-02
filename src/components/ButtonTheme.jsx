import { useContext } from "react"
import { ThemeContext } from "../hooks/ThemeProvider"

const ButtonTheme = () => {
    const { changeTheme,darkMode } = useContext( ThemeContext )
  return (
    <button className={darkMode?"dark":'normal'} onClick={ changeTheme }>
        Change Theme</button>
  )
}

export default ButtonTheme