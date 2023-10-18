import { useLayoutEffect, useEffect } from "react";
import useDarkMode from "./useDarkMode";

/*
    Adds/removes 'dark' class to document body,
    which in turn changes CSS variables to switch between
    light/dark color scheme
*/

function useDarkModeStyles() {
  const { darkMode } = useDarkMode();

  useLayoutEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    document.body.classList.add("theme-transition");
  }, []);
}

export default useDarkModeStyles;
