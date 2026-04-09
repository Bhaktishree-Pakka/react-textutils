"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <div className={`navbar ${darkMode ? 'dark-mode' : ''}`}>
      <div>
        <a href="/">TextUtils</a>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </div>
      <button
        className={darkMode ? 'dark-mode' : 'light-mode'}
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
}