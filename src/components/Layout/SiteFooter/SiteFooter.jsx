import FooterIconLinks from "./FooterIconLinks";
import styles from "./SiteFooter.module.css";

function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div>
        <FooterIconLinks />
        <span>Jake Betts {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}

export default SiteFooter;
