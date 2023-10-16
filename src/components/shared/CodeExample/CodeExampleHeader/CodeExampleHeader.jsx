import styles from "./CodeExampleHeader.module.css";
import CopyToClipboardControl from "./CopyToClipboardControl";

function CodeExampleHeader({ fileName, code, darkMode = true }) {
  return (
    <div className={styles.header}>
      <h2
        style={{
          color: darkMode ? "#ffffff" : "inherit",
        }}
      >
        {fileName}
      </h2>
      <CopyToClipboardControl text={code} />
    </div>
  );
}

export default CodeExampleHeader;
