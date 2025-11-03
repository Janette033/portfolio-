import React, { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    // ✅ Remove initial transition-block class once theme applied
    document.body.classList.remove("theme-init");
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <label className="theme-toggle" aria-label="Vaihda teema">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />

      <span className="toggle-track">
        <span className="track-icon sun-static" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8"/>
            <path d="M12 2.5v3M12 18.5v3M21.5 12h-3M5.5 12h-3M18.66 5.34l-2.12 2.12M7.46 16.54l-2.12 2.12M18.66 18.66l-2.12-2.12M7.46 7.46 5.34 5.34"
              stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
        </span>

        <span className="track-icon moon-static" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M20 13.5A8.5 8.5 0 1 1 10.5 4a6.5 6.5 0 0 0 9.5 9.5Z"
              stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>

        <span className="toggle-handle">
          <span className="icon sun-active" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 2.5v3M12 18.5v3M21.5 12h-3M5.5 12h-3M18.66 5.34l-2.12 2.12M7.46 16.54l-2.12 2.12M18.66 18.66l-2.12-2.12M7.46 7.46 5.34 5.34"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </span>

          <span className="icon moon-active" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M20 13.5A8.5 8.5 0 1 1 10.5 4a6.5 6.5 0 0 0 9.5 9.5Z"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </span>
      </span>
    </label>
  );
}

