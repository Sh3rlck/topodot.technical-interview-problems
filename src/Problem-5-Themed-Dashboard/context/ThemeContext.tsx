import React, { createContext, useContext, useState } from 'react';
import type {Theme, ThemeContextType} from "../types/app.types.ts";


const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // TODO: Declare a state variable for the current theme.
  //       It should be of type Theme and default to 'light'.

  /**
   * TODO: Implement toggleTheme.
   * Switch the theme from 'light' → 'dark' and 'dark' → 'light'.
   */
  const toggleTheme = () => {};

  const theme: Theme = 'light'; // TODO: Replace with your state variable.

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a <ThemeProvider>');
  return context;
}
