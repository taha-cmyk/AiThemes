"use client";

import ThemeEditor from "@/components/ThemeEditor";
import { useTheme } from "@/components/theme-provider";

export default function Home() {
  const { theme, mode } = useTheme();
  const currentTheme = theme[mode];
  return (
    <div
      style={{
        backgroundColor: currentTheme.background,
        color: currentTheme.onBackground,
      }}
    >
      <div className=''>
        <ThemeEditor />
      </div>
    </div>
  );
}
