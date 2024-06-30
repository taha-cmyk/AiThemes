"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import ColorPalette from "./ColorPalette";
import ThemePreview from "./ThemePreview";
import { useTheme } from "./theme-provider";
import ThemeSwitch from "./ThemeSwitch";
import ThemeSelector from "./ThemeSelector";
import ExportButtons from "./ExportButtons";
import ThemeGenerator from "./ThemeGenerator";

const ThemeEditor = () => {
  const { theme, mode } = useTheme();
  const currentTheme = theme[mode];

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
        className='h-full overflow-hidden border-0 rounded-none shadow-lg'
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
          <ThemeSwitch />
          <div className='flex items-center space-x-4'>
            <ThemeSelector />
            <ExportButtons currentTheme={currentTheme} />
            <ThemeGenerator currentTheme={currentTheme} />
          </div>
        </div>
        <ScrollArea className='flex-grow rounded-lg'>
          <div className=''>
            <ThemePreview />
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default ThemeEditor;
