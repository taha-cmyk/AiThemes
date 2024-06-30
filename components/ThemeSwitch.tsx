"use client";
import React from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

const ThemeSwitch = () => {
  const { mode, toggleMode } = useTheme();

  return (
    <div className='flex items-center space-x-4'>
      <Switch
        id='theme-toggle'
        checked={mode === "dark"}
        onCheckedChange={toggleMode}
      />
      <Label htmlFor='theme-toggle' className='flex items-center space-x-2'>
        {mode === "dark" ? <Moon size={18} /> : <Sun size={18} />}
        <span>{mode === "dark" ? "Dark Mode" : "Light Mode"}</span>
      </Label>
    </div>
  );
};

export default ThemeSwitch;
