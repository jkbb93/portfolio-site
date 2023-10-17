import styles from "./CodeExampleHeader.module.css";
import CopyToClipboardControl from "./CopyToClipboardControl";

function CodeExampleHeader({ fileName, code }) {
  return (
    <div className={styles.header}>
      <h2>{fileName}</h2>
      <CopyToClipboardControl text={code} />
    </div>
  );
}

export default CodeExampleHeader;
