"use client";
import React from "react";
import { useTheme } from "./theme-provider";

const ThemeSelector = () => {
  const { theme, availableThemes, switchTheme, mode } = useTheme();
  const currentTheme = theme[mode];

  const handleThemeChange = (e) => {
    switchTheme(e.target.value);
  };

  return (
    <label htmlFor='theme-select' className='flex items-center space-x-2'>
      <span>Theme</span>
      <select
        id='theme-select'
        onChange={handleThemeChange}
        style={{
          backgroundColor: currentTheme.background,
          color: currentTheme.onBackground,
        }}
        className='border border-gray-300 rounded p-1'
        value={mode} // Ensure the select reflects the current theme mode
      >
        {availableThemes.map((themeName) => (
          <option key={themeName} value={themeName}>
            {`Theme ${themeName}`} {/* Displaying theme names dynamically */}
          </option>
        ))}
      </select>
    </label>
  );
};

export default ThemeSelector;
