import { Children, createContext, useState } from "react"

export let ThemeContext = createContext()
const CustomThemeContextProvider = ({children}) => {
    const [isLightTheme, setIsLightTheme] = useState(true)
    return(
        <ThemeContext.Provider value={[isLightTheme, setIsLightTheme]}>
            {children}
        </ThemeContext.Provider>
    )
}
export default CustomThemeContextProvider;