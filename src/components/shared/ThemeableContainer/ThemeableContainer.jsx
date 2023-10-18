import { forwardRef } from "react";
import { useDarkMode } from "../../../features/darkMode";
import styles from "./ThemeableContainer.module.css";

const ThemeableContainer = forwardRef(function ThemeableContainer(
  {
    children,
    element: Element = "div",
    colorScheme = "primary",
    className = "",
    ...restProps
  },
  forwardedRef
) {
  const { darkMode } = useDarkMode();

  const colorSchemeClass = styles[colorScheme];
  const darkModeClass = darkMode ? styles.dark : "";

  return (
    <Element
      ref={forwardedRef}
      className={`${colorSchemeClass} ${darkModeClass} ${className}`}
      {...restProps}
    >
      {children}
    </Element>
  );
});

export default ThemeableContainer;
