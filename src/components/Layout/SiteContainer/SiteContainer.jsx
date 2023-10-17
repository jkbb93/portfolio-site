import { ThemeableContainer } from "../../shared";
import styles from "./SiteContainer.module.css";

function SiteContainer({ children }) {
  return (
    <div className={styles["site-container"]}>
      <div>{children}</div>
    </div>
  );
}

export default SiteContainer;
