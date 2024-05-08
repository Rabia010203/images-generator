import { useState, useEffect, useContext, createContext } from "react";


const AppContext = createContext();
const initialValue = () => {
    const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme:dark)"
    ).matches;
    const storedDarkMode = localStorage.getItem("darkTheme") === "true";
    return storedDarkMode || prefersDarkMode;
}
export const AppProvider = ({children}) => {
    const [searchItem, setSearchItem] = useState("cat");
    const [isDarkTheme, setIsDarkTheme] = useState(initialValue());
    const ToggleBtn = () => {
     const newDarkTheme = !isDarkTheme;
     setIsDarkTheme(newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme)

    } 
    useEffect(() => {
        document.body.classList.toggle("dark-theme", isDarkTheme)
    }, [isDarkTheme])
     return <AppContext.Provider value={{isDarkTheme, ToggleBtn, searchItem, setSearchItem}}>
        {children}
    </AppContext.Provider>
}
export const useGlobalContext = () => {
   return useContext(AppContext);
}