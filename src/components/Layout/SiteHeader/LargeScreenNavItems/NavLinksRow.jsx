import { motion } from "framer-motion";
import navLinkData from "../navLinkData";
import NavLinkWithUnderline from "./NavLinkWithUnderline";
import styles from "./NavLinksRow.module.css";

function NavLinksRow() {
  const links = navLinkData.map((link) => (
    <motion.li
      key={link.text}
      whileHover={{ scale: 1.15 }}
      transition={{ type: "spring", stiffness: 500, damping: 17 }}
    >
      <NavLinkWithUnderline to={link.to}>{link.text}</NavLinkWithUnderline>
    </motion.li>
  ));

  return <ul className={styles.list}>{links}</ul>;
}

export default NavLinksRow;
