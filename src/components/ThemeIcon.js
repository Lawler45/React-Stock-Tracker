import { MoonIcon } from "@heroicons/react/outline";
import React, { useContext } from "react";
import ThemeeContext from "../context/ThemeContext";

const ThemeIcon = () => {
  const { darkMode, setDarkMode } = useContext(ThemeeContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <button
      className={`rounded-lg border-1 vorder-neutral-400 p-2 absolute right-8 xl:right-32 shadow-lg ${
        darkMode ? "shadow-gray-800" : null
      }`}
      onClick={toggleDarkMode}
    >
      <MoonIcon
        className={`h-8 w-8 cursor-pointer stroke-1 fill-none stroke-neutral-400 ${
          darkMode
            ? "fill-yellow-400 stroke-yellow-400"
            : "fill-none stroke-neutral-400"
        }`}
      />
    </button>
  );
};

export default ThemeIcon;
