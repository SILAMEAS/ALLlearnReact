import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
const UpdateThemeContext = createContext();
export function useTheme() {
  return useContext(ThemeContext);
}
export function useThemeUpdate() {
  return useContext(UpdateThemeContext);
}
export function ThemeAnyWhere({ children }) {
  const [theme, setThem] = useState(true);
  const UpdateTheme = () => {
    setThem(!theme);
  };
  return (
    <ThemeContext.Provider value={theme}>
      <UpdateThemeContext.Provider value={UpdateTheme}>
        {" "}
        {children}
      </UpdateThemeContext.Provider>
    </ThemeContext.Provider>
  );
}
