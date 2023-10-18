import { motion } from "framer-motion";
import { ScrollToLink } from "../../../shared";
import styles from "./NavLinks.module.css";

function NavLinks() {
  const linkData = [
    { to: "about", text: "About" },
    { to: "skills", text: "Skills" },
    { to: "projects", text: "Projects" },
    { to: "contact", text: "Contact" },
  ];

  const links = linkData.map((link) => (
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

  return <ul className={styles["links-list"]}>{links}</ul>;
}

export default NavLinks;
