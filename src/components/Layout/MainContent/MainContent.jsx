import { useRef, useLayoutEffect, useState } from "react";
import { ThemeableContainer } from "../../shared";
import styles from "./MainContent.module.css";

function MainContent({ children }) {
  const [wrapperMinHeight, setWrapperMinHeight] = useState(null);
  const wrapperRef = useRef(null);

  // Fill viewport space beneath header 
  useLayoutEffect(() => {
    if (!wrapperRef.current) return;

    const updateWrapperMinHeight = () => {
      const { top } = wrapperRef.current.getBoundingClientRect();
      const YPosition = top + window.scrollY;
      const newMinHeight = `calc(100vh - ${YPosition}px)`;
      setWrapperMinHeight(newMinHeight);
    };

    updateWrapperMinHeight();

    window.addEventListener("resize", updateWrapperMinHeight);
    return () => window.removeEventListener("resize", updateWrapperMinHeight);
  }, []);

  return (
    <ThemeableContainer
      ref={wrapperRef}
      element="div"
      className={styles.wrapper}
      style={{ minHeight: wrapperMinHeight }}
    >
      <main>{children}</main>
    </ThemeableContainer>
  );
}

export default MainContent;
