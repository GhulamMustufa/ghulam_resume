'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import type { ThemeName } from '@/types/theme'

type ThemeContextType = {
  theme: ThemeName
  setTheme: (t: ThemeName) => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'default',
  setTheme: () => {},
})

const THEME_KEY = 'portfolio-theme'
const isValidTheme = (t: string | null): t is ThemeName =>
  t === 'default' || t === 'executive' || t === 'neon-saas'

function readSavedTheme(): ThemeName {
  try {
    const saved = localStorage.getItem(THEME_KEY)
    return isValidTheme(saved) ? saved : 'default'
  } catch {
    return 'default'
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
