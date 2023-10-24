import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  duotoneLight,
  duotoneDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";

function Code({ language, code, showLineNumbers, darkMode = false }) {
  const style = darkMode ? duotoneDark : duotoneLight;

  const customStyle = {
    margin: 0,
    padding: 0,
    lineHeight: "24px",
  };

  const lineNumberStyle = {
    userSelect: "none",
    MozUserSelect: "none",
    WebkitUserSelect: "none",
    msUserSelect: "none",
    padding: "0px",
    marginRight: "24px",
    minWidth: "0px",
  };

  return (
    <SyntaxHighlighter
      language={language}
      showLineNumbers={showLineNumbers}
      wrapLines={true}
      style={style}
      customStyle={customStyle}
      lineNumberStyle={lineNumberStyle}
    >
      {code}
    </SyntaxHighlighter>
  );
}

export default Code;
