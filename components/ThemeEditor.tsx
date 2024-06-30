"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useTheme } from "./theme-provider";
import ColorPalette from "./ColorPalette";
import ThemePreview from "./ThemePreview";
import { Moon, Sun, RotateCcw, Download } from "lucide-react";

const ThemeEditor = () => {
  const { theme, mode, toggleMode, resetTheme, availableThemes, switchTheme } =
    useTheme();
  const currentTheme = theme[mode];

  const exportThemeAsJSON = () => {
    const jsonTheme = JSON.stringify(theme, null, 2);
    downloadFile(jsonTheme, "theme.json", "application/json");
  };

  const exportThemeAsCSS = () => {
    const cssTheme = generateThemeCSS(theme);
    downloadFile(cssTheme, "theme.css", "text/css");
  };

  const generateThemeCSS = (theme: Themes): string => {
    const themeVariables = Object.entries(theme)
      .map(([mode, colors]) => {
        const colorVariables = Object.entries(colors as Record<string, string>)
          .map(([key, value]) => `--${mode}-${key}: ${value};`)
          .join("\n");
        return colorVariables;
      })
      .join("\n");

    return `
      :root {
        ${themeVariables}
      }
    `;
  };

  const downloadFile = (
    content: string,
    fileName: string,
    mimeType: string
  ) => {
    const blob = new Blob([content], { type: mimeType });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      style={{
        backgroundColor: currentTheme.background,
        color: currentTheme.onBackground,
      }}
      className='flex h-screen'
    >
      <Card
        style={{
          backgroundColor: currentTheme.background,
          color: currentTheme.onBackground,
        }}
        className='w-1/3 h-full overflow-hidden border-0 rounded-none shadow-lg'
      >
        <CardHeader className='border-b border-gray-200 dark:border-gray-700'>
          <CardTitle className='text-2xl font-semibold'>Theme Editor</CardTitle>
        </CardHeader>
        <CardContent className='p-0'>
          <ScrollArea className='h-[calc(100vh-60px)]'>
            <div className='p-6'>
              <ColorPalette />
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
      <div className='w-2/3 p-8 flex flex-col'>
        <div className='flex justify-between items-center mb-6'>
          <div className='flex items-center space-x-4'>
            <Switch
              id='theme-toggle'
              checked={mode === "dark"}
              onCheckedChange={toggleMode}
            />
            <Label
              htmlFor='theme-toggle'
              className='flex items-center space-x-2'
            >
              {mode === "dark" ? <Moon size={18} /> : <Sun size={18} />}
              <span>{mode === "dark" ? "Dark Mode" : "Light Mode"}</span>
            </Label>
          </div>
          <div className='flex items-center space-x-4'>
            <label
              htmlFor='theme-select'
              className='flex items-center space-x-2'
            >
              <span>Theme</span>
              <select
                id='theme-select'
                onChange={(e) => switchTheme(e.target.value)}
                style={{
                  backgroundColor: currentTheme.background,
                  color: currentTheme.onBackground,
                }}
                className='border border-gray-300 rounded p-1'
              >
                {availableThemes.map((themeName) => (
                  <option key={themeName} value={themeName}>
                    {themeName}
                  </option>
                ))}
              </select>
            </label>
            <Button
              style={{
                backgroundColor: currentTheme.background,
                color: currentTheme.onBackground,
              }}
              onClick={resetTheme}
              variant='outline'
              className='flex items-center space-x-2'
            >
              <RotateCcw size={18} />
              <span>Reset Theme</span>
            </Button>
            <Button
              style={{
                backgroundColor: currentTheme.background,
                color: currentTheme.onBackground,
              }}
              onClick={exportThemeAsJSON}
              variant='outline'
              className='flex items-center space-x-2'
            >
              <Download size={18} />
              <span>Export as JSON</span>
            </Button>
            <Button
              style={{
                backgroundColor: currentTheme.background,
                color: currentTheme.onBackground,
              }}
              onClick={exportThemeAsCSS}
              variant='outline'
              className='flex items-center space-x-2'
            >
              <Download size={18} />
              <span>Export as CSS</span>
            </Button>
          </div>
        </div>
        <ScrollArea className='flex-grow rounded-lg shadow-inner'>
          <div className='p-6'>
            <ThemePreview />
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default ThemeEditor;
