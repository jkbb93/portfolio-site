import FooterIconLinks from "./FooterIconLinks";
import styles from "./SiteFooter.module.css";

function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div>
        <h2>Thanks for visiting!</h2>
        <FooterIconLinks />
        <span>Jake Betts {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}

export default SiteFooter;
