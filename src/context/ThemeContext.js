import React, { createContext, useEffect, useState } from 'react';
import { DARK, LIGHT } from 'constants/themes';

export const ThemeContext = createContext(null);

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(LIGHT);

  useEffect(() => {
    if (window.matchMedia('(prefers-schema-mode: dark)')) {
      setTheme(DARK);
    } else {
      setTheme(LIGHT);
    }
  }, []);

  function changeTheme() {
    if (theme.theme === 'dark') {
      setTheme(LIGHT);
    } else {
      setTheme(DARK);
    }
  }
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
