import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true); // Par défaut dark

  useEffect(() => {
    // Force le mode sombre au chargement
    document.documentElement.classList.add("dark");
    setIsDark(true);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-md p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 dark:text-white dark:hover:text-blue-400 dark:hover:bg-white/10 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
    </button>
  );
}
