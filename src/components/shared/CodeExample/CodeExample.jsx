import { useState, useRef, useLayoutEffect } from "react";
import { useDarkMode } from "../../../features/darkMode";
import CodeExampleHeader from "./CodeExampleHeader";
import Code from "./Code";
import styles from "./CodeExample.module.css";

function CodeExample({
  code = "",
  language = "javascript",
  fileName,
  withHeader = true,
  darkMode = true
}) {
  const [wrapperStyle, setWrapperStyle] = useState(null);
  const wrapperRef = useRef(null);

  useLayoutEffect(() => {
    if (!wrapperRef.current) return;

    const syntaxHighlighterPreElement = wrapperRef.current.querySelector("pre");

    const { background, fontFamily } = syntaxHighlighterPreElement.style;

    setWrapperStyle({ background, fontFamily });
  }, [darkMode]);

  return (
    <div
      ref={wrapperRef}
      className={styles.wrapper}
      style={{
        padding: withHeader ? "16px 24px 24px" : "24px",
        ...wrapperStyle,
      }}
    >
      {withHeader && (
        <CodeExampleHeader
          fileName={fileName}
          code={code}
          darkMode={darkMode}
        />
      )}
      <Code language={language} code={code} darkMode={darkMode} />
    </div>
  );
}

export default CodeExample;
