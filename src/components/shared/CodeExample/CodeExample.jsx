import { useState, useRef, useLayoutEffect } from "react";
import { useDarkMode } from "../../../features/darkMode";
import CodeExampleHeader from "./CodeExampleHeader";
import Code from "./Code";
import styles from "./CodeExample.module.css";

function CodeExample({ children, language = "javascript", fileName }) {
  const { darkMode } = useDarkMode();
  const [wrapperStyle, setWrapperStyle] = useState(null);
  const wrapperRef = useRef(null);

  useLayoutEffect(() => {
    if (!wrapperRef.current) return;

    const syntaxHighlighterPreElement = wrapperRef.current.querySelector("pre");

    const { background, fontFamily } = syntaxHighlighterPreElement.style;

    setWrapperStyle({ background, fontFamily });
  }, [darkMode]);

  return (
    <div ref={wrapperRef} className={styles.wrapper} style={wrapperStyle}>
      <CodeExampleHeader
        fileName={fileName}
        code={children}
        darkMode={darkMode}
      />
      <Code language={language} darkMode={darkMode}>
        {children}
      </Code>
    </div>
  );
}

export default CodeExample;
