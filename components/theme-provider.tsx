"use client";
import { ReactNode, createContext, useContext, useState } from "react";

const themes = {
  default: {
    light: {
      primary: "#4CAF50",
      primaryVariant: "#388E3C",
      secondary: "#2196F3",
      secondaryVariant: "#1976D2",
      background: "#F5F5F5",
      surface: "#FFFFFF",
      error: "#B00020",
      onPrimary: "#FFFFFF",
      onSecondary: "#FFFFFF",
      onBackground: "#000000",
      onSurface: "#000000",
      onError: "#FFFFFF",
    },
    dark: {
      primary: "#69F0AE",
      primaryVariant: "#48BB78",
      secondary: "#2962FF",
      secondaryVariant: "#19469B",
      background: "#121212",
      surface: "#1D1D1D",
      error: "#CF6679",
      onPrimary: "#000000",
      onSecondary: "#000000",
      onBackground: "#FFFFFF",
      onSurface: "#FFFFFF",
      onError: "#000000",
    },
    neutral: {
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
    accent: {
      A100: "#82B1FF",
      A200: "#448AFF",
      A400: "#2979FF",
      A700: "#2962FF",
    },
  },
  alternative: {
    light: {
      primary: "#FF5722",
      primaryVariant: "#E64A19",
      secondary: "#03A9F4",
      secondaryVariant: "#0288D1",
      background: "#F3F4F6",
      surface: "#FFFFFF",
      error: "#D32F2F",
      onPrimary: "#FFFFFF",
      onSecondary: "#FFFFFF",
      onBackground: "#000000",
      onSurface: "#000000",
      onError: "#FFFFFF",
    },
    dark: {
      primary: "#FF8A65",
      primaryVariant: "#D84315",
      secondary: "#29B6F6",
      secondaryVariant: "#0288D1",
      background: "#121212",
      surface: "#1E1E1E",
      error: "#EF9A9A",
      onPrimary: "#000000",
      onSecondary: "#000000",
      onBackground: "#FFFFFF",
      onSurface: "#FFFFFF",
      onError: "#000000",
    },
    neutral: {
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
    accent: {
      A100: "#FF8A80",
      A200: "#FF5252",
      A400: "#FF1744",
      A700: "#D50000",
    },
  },
};

interface Theme {
  primary: string;
  primaryVariant: string;
  secondary: string;
  secondaryVariant: string;
  background: string;
  surface: string;
  error: string;
  onPrimary: string;
  onSecondary: string;
  onBackground: string;
  onSurface: string;
  onError: string;
}

interface Neutral {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

interface Accent {
  A100: string;
  A200: string;
  A400: string;
  A700: string;
}

export interface Themes {
  light: Theme;
  dark: Theme;
  neutral: Neutral;
  accent: Accent;
}

// Create a context for the theme
const ThemeContext = createContext<
  | {
      theme: Themes;
      updateTheme: (newTheme: Themes) => void;
      mode: "light" | "dark";
      toggleMode: () => void;
      resetTheme: () => void;
      availableThemes: string[];
      switchTheme: (themeName: string) => void;
    }
  | undefined
>(undefined);

// Custom hook to use the theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

// ThemeProvider component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeName, setThemeName] = useState<string>("default");
  const [theme, setTheme] = useState<Themes>(themes[themeName]);
  const [mode, setMode] = useState<"light" | "dark">("light");

  const updateTheme = (newTheme: Themes) => {
    setTheme(newTheme);
  };

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const resetTheme = () => {
    setTheme(themes[themeName]);
    setMode("light");
  };

  const switchTheme = (newThemeName: string) => {
    if (themes[newThemeName]) {
      setThemeName(newThemeName);
      setTheme(themes[newThemeName]);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        updateTheme,
        mode,
        toggleMode,
        resetTheme,
        availableThemes: Object.keys(themes),
        switchTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
