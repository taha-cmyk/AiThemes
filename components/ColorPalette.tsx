"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useTheme } from "./theme-provider";

const ColorSwatch = ({
  category,
  colorKey,
  color,
  onClick,
  isActive,
  handleColorChange,
  theme,
  currentTheme,
}) => (
  <div className='flex items-center space-x-4 mb-4'>
    <button
      className={`w-16 h-16 rounded-md cursor-pointer transform transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
        isActive ? "ring-2 ring-blue-500 ring-offset-2" : "ring-1 ring-gray-300"
      }`}
      style={{ backgroundColor: color }}
      onClick={() => onClick(`${category}-${colorKey}`)}
    />
    <div className='flex flex-col'>
      <span className='text-sm text-gray-500'>{colorKey}</span>
      <div className='flex items-center space-x-2 mt-2'>
        <Input
          style={{
            backgroundColor: currentTheme.background,
            color: currentTheme.onBackground,
          }}
          type='color'
          value={color}
          onChange={(e) => handleColorChange(e, category, colorKey)}
          className='w-12 h-12 p-1 rounded-md'
        />
        <Input
          style={{
            backgroundColor: currentTheme.background,
            color: currentTheme.onBackground,
          }}
          type='text'
          value={color}
          onChange={(e) => handleColorChange(e, category, colorKey)}
          className='flex-grow'
          placeholder='Enter color value'
        />
      </div>
    </div>
  </div>
);

const ColorPalette = () => {
  const { theme, updateTheme, mode } = useTheme();
  const [activeColor, setActiveColor] = useState(null);
  const [activeTab, setActiveTab] = useState("light");

  const currentTheme = theme[mode];

  const handleColorChange = (e, category, colorKey) => {
    updateTheme({
      ...theme,
      [category]: {
        ...theme[category],
        [colorKey]: e.target.value,
      },
    });
  };

  return (
    <div className='space-y-6'>
      <Tabs value={activeTab} onValueChange={setActiveTab} className='w-full'>
        <TabsList className='grid w-full grid-cols-2 mb-4'>
          <TabsTrigger value='light' className='data-[state=active]:bg-white'>
            Light
          </TabsTrigger>
          <TabsTrigger
            value='dark'
            className='data-[state=active]:bg-gray-800 data-[state=active]:text-white'
          >
            Dark
          </TabsTrigger>
        </TabsList>
        {Object.entries(theme).map(([category, colors]) => (
          <TabsContent key={category} value={category} className='mt-4'>
            <div className='flex flex-col space-y-4'>
              {Object.entries(colors).map(([colorKey, color]) => (
                <ColorSwatch
                  key={colorKey}
                  category={category}
                  colorKey={colorKey}
                  color={color}
                  onClick={setActiveColor}
                  isActive={activeColor === `${category}-${colorKey}`}
                  handleColorChange={handleColorChange}
                  theme={theme}
                  currentTheme={currentTheme}
                />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default ColorPalette;
