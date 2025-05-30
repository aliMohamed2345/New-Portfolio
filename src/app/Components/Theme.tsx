"use client";
import { useEffect, useState } from "react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

const Theme = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Sync with localStorage and apply theme
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  // Toggle the theme
  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 dark:bg-gray-800/50 dark:border-gray-700/50 dark:hover:bg-gray-700/50 transition-all duration-300"
    >
      {isDarkMode ? (
        <IoMdSunny
          size={25}
          className={`${
            isDarkMode ? `rotate-0 scale-100` : `-rotate-90 scale-0`
          }`}
        />
      ) : (
        <IoMdMoon
          size={25}
          className={`${
            isDarkMode ? `rotate-0 scale-100` : `-rotate-90 scale-0`
          }`}
        />
      )}
    </button>
  );
};

export default Theme;
