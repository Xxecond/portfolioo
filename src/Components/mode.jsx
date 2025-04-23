import { useState, useEffect } from "react";

const Mode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("portfolio-theme");
    if (savedMode) return savedMode === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add("dark-mode");
      html.classList.remove("light-mode");
      localStorage.setItem("portfolio-theme", "dark");
    } else {
      html.classList.add("light-mode");
      html.classList.remove("dark-mode");
      localStorage.setItem("portfolio-theme", "light");
    }
  }, [isDarkMode]);

  return (
    <button
      className="theme-toggle"
      onClick={() => setIsDarkMode(!isDarkMode)}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? "🌙" : "🔆"}
    </button>
  );
};

export default Mode;