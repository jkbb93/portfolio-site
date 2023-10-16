import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  duotoneLight,
  duotoneDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";

function Code({ children, language, darkMode = false }) {
  const style = darkMode ? duotoneDark : duotoneLight;

  const customStyle = {
    margin: 0,
    padding: 0,
  };

  const lineNumberStyle = {
    userSelect: "none",
    MozUserSelect: "none",
    WebkitUserSelect: "none",
    msUserSelect: "none",
    padding: "0px",
    marginRight: "24px",
    minWidth: "0px"
  };

  return (
    <SyntaxHighlighter
      language={language}
      showLineNumbers={true}
      style={style}
      customStyle={customStyle}
      lineNumberStyle={lineNumberStyle}
    >
      {children}
    </SyntaxHighlighter>
  );
}

export default Code;
