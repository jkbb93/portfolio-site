import { ScrollToLink } from "../../../shared";
import navLinkData from "../navLinkData";
import styles from "./NavDrawerLinks.module.css";

function NavDrawerLinks({ onLinkClick: handleLinkClick }) {
  const links = navLinkData.map((link) => (
    <li key={link.text}>
      <ScrollToLink
        to={link.to}
        onClick={handleLinkClick}
        className={styles.link}
      >
        {link.text}
      </ScrollToLink>
    </li>
  ));

  return <ul className={styles.list}>{links}</ul>;
}

export default NavDrawerLinks;
