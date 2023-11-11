import React, { createContext } from "react";

export const ThemeContext = createContext();

export function ThemeProvider(props) {

  console.log('propsss', props)
  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
