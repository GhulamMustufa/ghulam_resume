'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import type { ThemeName } from '@/types/theme'

type ThemeContextType = {
  theme: ThemeName
  setTheme: (t: ThemeName) => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark-ide',
  setTheme: () => {},
})

const THEME_KEY = 'portfolio-theme'
const isValidTheme = (t: string | null): t is ThemeName =>
  [
    'dark-ide',
    'light-premium',
    'light-minimal',
    'light-warm',
    'light-mono',
    'dark-graphite',
    'dark-oled',
    'dark-violet',
    'dark-midnight',
  ].includes(t as string)

function readSavedTheme(): ThemeName {
  try {
    const saved = localStorage.getItem(THEME_KEY)
    return isValidTheme(saved) ? saved : 'dark-ide'
  } catch {
    return 'dark-ide'
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>(readSavedTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme: setThemeState }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
