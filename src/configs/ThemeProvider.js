import { createContext, useState } from "react";
import { THEME_TYPE } from "./Constants";

export const ThemeContext = createContext();

export const ThemeProvider = (group) => {
    const [theme, setTheme] = useState({
        theme: THEME_TYPE.LIGHT,
    })

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {group.children}
        </ThemeContext.Provider>
    )
}