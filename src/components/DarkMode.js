"use client";
import { useEffect } from "react";

const setDark = () => {
  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
};

const getDefaultDark = () => {
  if (typeof window === "undefined") return false;
  const storedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  return storedTheme === "dark" || (storedTheme === null && prefersDark);
};

const DarkMode = () => {
  // Set initial theme on mount
  useEffect(() => {
    if (getDefaultDark()) {
      setDark();
    } else {
      setLight();
    }
  }, []);

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDark();
    } else {
      setLight();
    }
  };

  return (
    <div className="toggle-theme-wrapper">
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          onChange={toggleTheme}
          defaultChecked={getDefaultDark()}
        />
        <div className="slider round"></div>
      </label>
    </div>
  );
};

export default DarkMode; 