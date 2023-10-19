import { motion } from "framer-motion";
import { ScrollToLink } from "../../../shared";
import navLinkData from "../navLinkData";
import styles from "./NavLinksRow.module.css";

function NavLinksRow() {
  const links = navLinkData.map((link) => (
    <motion.li
      key={link.text}
      whileHover={{ scale: 1.15 }}
      transition={{ type: "spring", stiffness: 500, damping: 17 }}
    >
      <ScrollToLink to={link.to} className={styles.link}>
        {link.text}
      </ScrollToLink>
    </motion.li>
  ));

  return <ul className={styles.list}>{links}</ul>;
}

export default NavLinksRow;
