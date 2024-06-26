"use client";

import { useTheme } from "next-themes";
import { SunIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/solid";

const ThemeSwitcher = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {currentTheme === "dark" ? (
        <div>
          <SunIcon
            className="w-6 h-6 text-yellow-500 "
            role="button"
            onClick={() => setTheme("light")}
          />
        </div>
      ) : (
        <div>
          <MoonIcon
            className="w-6 h-6 text-gray-900 "
            role="button"
            onClick={() => setTheme("dark")}
          />
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
