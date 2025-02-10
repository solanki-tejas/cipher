import React, { createContext, useState, useMemo, useContext } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { darkTheme } from "@/styles/dark-theme";
import { lightTheme } from "@/styles/light-theme";

const ThemeContext = createContext({
  toggleTheme: () => {},
  darkMode: false,
});

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProviderWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ toggleTheme, darkMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
