import { ThemeableContainer } from "../../shared";
import styles from "./SiteContainer.module.css";

function SiteContainer({ children }) {
  return (
    <ThemeableContainer element="div" className={styles["site-container"]}>
      <div>{children}</div>
    </ThemeableContainer>
  );
}

export default SiteContainer;
