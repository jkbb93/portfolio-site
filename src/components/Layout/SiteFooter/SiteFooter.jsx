import { ThemeableContainer } from "../../shared";
import IconLinks from "./IconLinks";
import styles from "./SiteFooter.module.css";

function SiteFooter() {
  return (
    <ThemeableContainer element="footer" className={styles.footer}>
      <div>
        <IconLinks />
        <span>Jake Betts {new Date().getFullYear()}</span>
      </div>
    </ThemeableContainer>
  );
}

export default SiteFooter;
