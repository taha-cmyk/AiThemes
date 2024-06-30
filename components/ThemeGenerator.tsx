"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import { Label } from "@/components/ui/label";
import { useTheme } from "./theme-provider";
import { generateTheme } from "@/app/actions/theme";

const ThemeGenerator = ({ currentTheme }) => {
  const { updateTheme } = useTheme();
  const [keywords, setKeywords] = useState("");

  const handleGenerateTheme = async () => {
    const result = await generateTheme(keywords);
    if (result) {
      const newTheme = JSON.parse(result);
      updateTheme(newTheme);
    }
  };

  return (
    <div className='p-4'>
      <Label htmlFor='keywords-input'>Enter Keywords:</Label>
      <input
        id='keywords-input'
        type='text'
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        className='border border-gray-300 rounded p-1 w-full mt-2'
      />
      <Button
        style={{
          backgroundColor: currentTheme.background,
          color: currentTheme.onBackground,
        }}
        onClick={handleGenerateTheme}
        className='mt-4 flex items-center space-x-2'
      >
        <Edit size={18} />
        <span>Generate Theme</span>
      </Button>
    </div>
  );
};

export default ThemeGenerator;
