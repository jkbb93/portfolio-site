import styles from "./MainContent.module.css";

function MainContent({ children }) {
  return (
    <div className={styles.wrapper}>
      <main>{children}</main>
    </div>
  );
}

export default MainContent;
