"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { RotateCcw, Download } from "lucide-react";
import { useTheme } from "./theme-provider";

const ExportButtons = ({ currentTheme }) => {
  const { resetTheme, exportThemeAsJSON, exportThemeAsCSS } = useTheme();

  return (
    <>
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
    </>
  );
};

export default ExportButtons;
